const {Router}=require("express");

module.exports=(app)=>{
    const userController=require("../controllers/user.controller")
    
    const router=require('express').Router();

    
    router.post('/signup',userController.signUp);
    router.post('/login',userController.login); 
    router.post('/logout',userController.logout);
    router.get('/getCouponCode',userController.getCoupons);
    app.use("/api/auth",router);
}