import { Router } from "express";
import { displayAboutMePage, 
    displayContactMePage, 
    displayHomePage, 
    displayMyProjectsPage, 
    displayServicesPage } from "../controllers/index.controller.server.js";

const router = Router();

router.get('/', displayHomePage);
router.get('/home', displayHomePage);
router.get('/aboutMe', displayAboutMePage);
router.get('/myProjects', displayMyProjectsPage);
router.get('/services', displayServicesPage);
router.get('/contactMe', displayContactMePage);

export default router;
