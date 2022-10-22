import  Express  from "express";

import passport from "passport";

import User from '../models/user.js';
import { UserDisplayName } from "../utils/index.js";

export function DisplayLoginPage(req, res, next){

    if(!req.user){

        return res.render('index',{title: 'Login', page: 'login', messages: req.flash('loginMessage'), displayName: UserDisplayName(req)});
    }
    return res.redirect('/business-list');
}
export function DisplayRegisterPage(req, res, next){

    if(!req.user){

        return res.render('index',{title: 'Register', page: 'register', messages: req.flash('registerMessage'), displayName: UserDisplayName(req) });
    }
}

//process function

export function ProcessLoginPage(req, res, next){

    passport.authenticate('local',function(err, user, info){

        if(err){

            console.error(err);
            res.end(err);
        }
        if(!user){
            req.flash('loginMessage', 'Authentication Error');
            return res.redirect('/login');
        }

        req.login(user, function(err){
            if(err){
                console.error(err);
                res.end(err);
            }
            return res.redirect('/')
        })



    })(req, res,next);
}

export function ProcessRegisterPage(req, res, next){

    let newUser = new User({

        username: req.body.username,
        emailAddress: req.body.emailAddress,
        displayName: req.body.firstName + " " + req.body.lastName

    });

    User.register(newUser, req.body.password, function(err){

        if(err){
            if(err.name == "UserExitsError"){
                console.error('Error: User Already Exits');
                req.flash('registerMessage', 'User Already Exits');
            }else{
                console.error(err);
                req.flash('registerMessage', 'Server Error');
            }
            return res.redirect('/regidter');

        }
        return passport.authenticate('local')(req,res, function(){

            return res.redirect('/');
        })
    })
}
export function ProcessLogoutPage(req, res, next){
    req.logOut(function(err){
        if(err){
            console.error(err);
            res.end(err);
        }
        console.log('User logged out successfully');

    });

    res.redirect('/login');

}