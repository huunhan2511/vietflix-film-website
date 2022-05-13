import jwt from 'jsonwebtoken';
import { ApolloError} from "apollo-server-express";
import Admin from '../models/admin.js'
import dotenv from 'dotenv'
dotenv.config();
const SECRET_KEY = process.env.SECRET_KEY || "Vietflix";
const ACCESS_DENIED = ['Từ chối truy cập','ACCESS DENIED']
const token = {
    createToken: admin => {
        const tokenLife = process.env.tokenLife || 3600*6
        const SECRET_KEY = process.env.SECRET_KEY || "Vietflix"
        const accessUser = {
            id: admin._id
        };
        const accessToken = jwt.sign(
            { user: accessUser },
            SECRET_KEY,
            { expiresIn: tokenLife }
        );
        return accessToken;
    },

    verifyToken: async (req) => {
        let authorization = req.headers.authorization
        if (!authorization) {
            throw new ApolloError('Từ chối truy cập', 'ACCESS DENIED')
        } else {
            try {
                const decodedToken = verify(token, SECRET);
                if (!decodedToken) throw new ApolloError('Từ chối truy cập', 'ACCESS DENIED')
                else {
                    let authAdmin = await Admin.findById(decodedToken.id)
                    if (authAdmin) {
                        return next()
                    } else {
                        throw new ApolloError('Từ chối truy cập', 'ACCESS DENIED')
                    }
                }
            } catch (error) {
                throw new ApolloError('Từ chối truy cập', 'ACCESS DENIED')
            }
        }
    },
    // UNDER CONSTRUCED FOR AUTHORIZATION
    verify: async req => {
        let authorization = req.headers.authorization
        if (!authorization) {
            return new ApolloError(...ACCESS_DENIED)
        } else {
            try {
                const decodedToken = jwt.verify(authorization, SECRET_KEY);
                if (!decodedToken) return new ApolloError(...ACCESS_DENIED)
                else {
                    let authAdmin = await Admin.findById(decodedToken.user.id)
                    if (authAdmin) {
                        return authAdmin
                    } else {
                        return ApolloError(...ACCESS_DENIED)
                    }
                }
            } catch (error) {
                return new ApolloError(...ACCESS_DENIED)
            }
        }
    }
}

export default token