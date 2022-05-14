import { mapSchema, getDirective, MapperKind } from '@graphql-tools/utils';
import { defaultFieldResolver } from 'graphql';
import token from '../jwt/jwtToken.js';
function isAuth(schema, directiveName) {
  return  mapSchema(schema, {

    // Executes once for each object field definition in the schema
    [MapperKind.OBJECT_FIELD]: (fieldConfig) => {

      // Check whether this field has the specified directive
      const upperDirective = getDirective(schema, fieldConfig, directiveName)?.[0];

      if (upperDirective) {

        // Get this field's original resolver
        const { resolve = defaultFieldResolver } = fieldConfig;
        // Replace the original resolver with a function that *first* calls
        // the original resolver, then converts its result to upper case
        fieldConfig.resolve = async function (source, args, context, info) {
          const result = await resolve(source, args, context, info);
          let authorized = await token.verify(context.req);
          return authorized instanceof Error ? authorized : result;
        }
        return fieldConfig;
      }
    },

    // Executes once for each enum value definition in the schema
    [MapperKind.ENUM_VALUE]: (enumValueConfig) => {
      const deprecatedDirective = getDirective(schema, enumValueConfig, directiveName)?.[0];
      if (deprecatedDirective) {
        enumValueConfig.deprecationReason = deprecatedDirective['reason'];
        console.log('BUGGGGGGGGG')
        return enumValueConfig;
      }
    }
  });
};
export default isAuth;