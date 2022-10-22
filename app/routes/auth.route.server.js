import { Router } from "express";

import { DisplayLoginPage, 
    DisplayRegisterPage, 
    ProcessLoginPage,
    ProcessLogoutPage,
    ProcessRegisterPage
 } from "../controllers/auth.controller.server.js";

const router = Router();

router.get('/login', DisplayLoginPage);

router.post('/login', ProcessLoginPage);

router.get('/register', DisplayRegisterPage);

router.post('/register', ProcessRegisterPage);

router.get('/logout', ProcessLogoutPage);

export default router;