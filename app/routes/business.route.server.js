import { Router } from "express";

import {  DisplayBusinessList, 
    DisplayBusinessAddPage, 
    ProcessBusinessAddPage, 
    ProcessBusinessEditPage, 
    DisplayBusinessEditPage, 
    ProcessBusinessDelete } from "../controllers/business.controller.server.js";
import { AuthGuard } from "../utils/index.js";

const router = Router();

router.get('/business-list', DisplayBusinessList);
router.get('/business-add',  DisplayBusinessAddPage);
router.post('/business-add',  ProcessBusinessAddPage);
router.post('/business-edit/:id', ProcessBusinessEditPage);
router.get('/business-edit/:id',  DisplayBusinessEditPage);
router.get('/business-delete/:id',  ProcessBusinessDelete);

export default router;