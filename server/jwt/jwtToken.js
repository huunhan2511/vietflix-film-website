import jwt from 'jsonwebtoken';

const token = {
    createToken: admin => {
        const tokenLife = 60 * 60 * 6 * 1000;
        const SECRET_KEY = "Vietflix"
        const accessUser = {
            id: admin._id
        };
        const accessToken = jwt.sign(
            { user: accessUser },
            SECRET_KEY,
            { expiresIn: tokenLife }
        );
        return accessToken;
    }
}

export default token