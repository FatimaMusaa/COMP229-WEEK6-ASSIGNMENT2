

export function UserDisplayName(req){
    if(req.user){
        return res.user.displayName;
    }
    return '';
    
}
export function AuthGuard(req, res, next){
    if(!req.isAuthenticated()){
        return res.redirect('/login');
    }
    next();
}