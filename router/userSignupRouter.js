import express from "express";
import { userLogin, userSignup, decodeToken } from "../controller/userSignupController.js";

const router = express.Router();

router.post("/userSignup", userSignup);
router.post("/userlogin", userLogin);
router.get("/verifyToken", decodeToken);

export default router;