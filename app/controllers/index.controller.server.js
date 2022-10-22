
import { UserDisplayName } from "../utils/index.js";

export function displayHomePage(req, res, next) {
    res.render('index.ejs', { title: 'Home', page: 'home', displayName: UserDisplayName(req)} );
};

export function displayAboutMePage(req, res, next) {
    res.render('index.ejs', { title: 'AboutMe', page: 'aboutMe', displayName: UserDisplayName(req)} );
};

export function displayMyProjectsPage(req, res, next) {
    res.render('index.ejs', { title: 'MyProjects', page: 'myProjects', displayName: UserDisplayName(req)} );
};

export function displayServicesPage(req, res, next) {
    res.render('index.ejs', { title: 'Services', page: 'services', displayName: UserDisplayName(req)} );
};

export function displayContactMePage(req, res, next) {
    res.render('index.ejs', { title: 'ContactMe', page: 'contactMe', displayName: UserDisplayName(req)} );
};


