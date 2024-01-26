import UserModel from "../models/User.js";
import jwt from "jsonwebtoken";


const authenticated = async(req, res, next) => {
    try {
    // req.headers["Authorization"] = `Bearer ${token}`
    // optional operator
    console.log(req.headers)
    const authorization = req.headers['authorization']
        // ["Bearer", "token"]
    console.log(authorization)
    const token = authorization && (authorization.split(' ')[0] === "Bearer" ? authorization.split(' ')[1] : authorization.split(' ')[0])
    console.log(token)
    if (!token) res.status(401).send("Unauthenticated")

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
        if (!decodedToken) {
            return res.status(401).send("Unauthenticated");
        }

        const user = await UserModel.findById(decodedToken.userId);
        if (!user) {
            return res.status(401).send("Unauthenticated");
        }

    req.user = user

    // req.user

    return next()
    //invalid

    // res.500
    }catch (error) {
        return res.status(500).json({ message: "Internal server error", error: error.message });
    }
        
}


const authorization = (req, res, next) => {
        // roles: Admin, User, Guest
        const { user } = req
        const role = user.role
        if (role !== "admin"||role !== "user"||role !== "guest") return res.status(403)
        return next()
    }
    //

export {
    authenticated,
    authorization
}