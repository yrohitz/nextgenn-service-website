import { Request, Response } from "express";
import jwt from "jsonwebtoken";

export class AuthController {
  static async login(req: Request, res: Response) {
    try {
      const { username, password } = req.body;

      console.log("\n========== LOGIN DEBUG ==========");
      console.log("Request Body:", req.body);
      console.log("Received Username :", username);
      console.log("Received Password :", password);

      console.log("---------------------------------");

      console.log("ENV Username      :", process.env.ADMIN_USERNAME);
      console.log("ENV Password      :", process.env.ADMIN_PASSWORD);

      console.log("---------------------------------");

      console.log(
        "Username Match    :",
        username === process.env.ADMIN_USERNAME
      );

      console.log(
        "Password Match    :",
        password === process.env.ADMIN_PASSWORD
      );

      console.log("=================================\n");

      if (
        username !== process.env.ADMIN_USERNAME ||
        password !== process.env.ADMIN_PASSWORD
      ) {
        return res.status(401).json({
          success: false,
          message: "Invalid username or password.",
        });
      }

      const token = jwt.sign(
        {
          username,
        },
        process.env.JWT_SECRET as string,
        {
          expiresIn: "7d",
        }
      );

      return res.status(200).json({
        success: true,
        token,
      });
    } catch (err) {
      console.error(err);

      return res.status(500).json({
        success: false,
        message: "Internal Server Error",
      });
    }
  }
}