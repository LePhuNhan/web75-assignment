import UserModel from "../models/User.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";

const login = async (req, res) => {
    try {
        const user = await UserModel.findOne({
            name: req.body.name,
        });

        if (!user) {
            return res.status(404).json({
                success: false,
                message: "User not found",
            });
        }

        const isMatch = await bcrypt.compare(req.body.password, user.password);
        if (!isMatch) {
            return res.status(400).json({
                success: false,
                message: "Invalid credentials",
            });
        }
        
        const token = jwt.sign({
            userId: user._id,
        }, process.env.JWT_SECRET, { expiresIn: "1h" });

        return res.status(200).json({
            success: true,
            message: "Login successful",
            data: {
                token: token,
            },
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};

const register = async (req, res) => {
    try {
        const user = await UserModel.findOne({ name: req.body.name });
        if (user) {
            return res.status(400).json({
                success: false,
                message: "User already exists",
            });
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(req.body.password, salt);

        const newUser = new UserModel({
            name: req.body.name,
            age: req.body.age,
            password: hashedPassword,
            role: req.body.role
        });

        await newUser.save();

        return res.status(200).json({
            success: true,
            message: "Register successful",
            data: newUser,
        });
    } catch (error) {
        return res.status(500).json({
            success: false,
            message: "Internal server error",
            error: error.message,
        });
    }
};

export { login, register };
