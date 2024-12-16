import express from "express"
import { login, logout, signup } from "../controllers/auth.controller.js";

const router = express.Router();

router.post("/signup",(req,res) => {
     res.send("signup route", signup)
});

router.post("/login",(req,res) => {
    res.send("login route", login)
});

router.post("/logout",(req,res) => {
    res.send("logout route", logout)
});

export default router;


//wM7EG9r0fmXq7fiY