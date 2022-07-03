const { response } = require('express');
const express = require('express')



const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
const authenticate = require('../middleware/authenticate');

const router = express.Router();

require('../db/conn');
const {
    User,
    
} = require('../model/userSchema')

///////////////// user //////////////// 

router.post('/registerUser',async(req,res)=>{
    const { name, email, phone, password, cpassword, role } = req.body
   
    console.log(name);
    try {
        const userExits =  await  User.findOne({email:email});

        if(userExits){
            return res.status(422).json({error:'user already exist'})
        }

        const data = new User({name,email,phone,password,cpassword,role});
        await data.save();

        res.status(200).json({ message: 'user registered' })

    } catch (error) {
        console.log(error);
    }
});


// login route

router.post('/signin', async (req,res)=>{
    console.log('in signin');
    try {
        let token;
        const {email,password} = req.body;
        if(!email || !password){
            return res.status(400).json({
                error:'plz fill the data'
            })
        }

        const userLogin = await User.findOne({email:email});

        // console.log(userLogin);
        if(userLogin){
            console.log(User);
            const isMatch = await bcrypt.compare(password, userLogin.password);

            const token = await userLogin.generateAuthToken();

            console.log(token);

            res.cookie("jwToken",token,{
                expires: new Date(Date.now() + 25892000000),
                httpOnly:true
            })

            if(!isMatch){
                res.status(400).json({
                    error:'invalid credentials'
                });
            }else{
                res.json({
                    message:'user sign in successfully'
                });
            }
        }else{
            res.status(400).json({
                error:'invalid credentials'
            });
        }

    } catch (error) {
        res.json({
            error:'error'
        });
    }
})

// get user data for contact us and home page

router.get('/aboutUser', authenticate , (req,res)=>{
    console.log(`hello my about`);
    res.send(req.rootUser);
})


router.get('/getdata', authenticate , (req,res)=>{
    console.log(`hello my about`);
    res.status(200).send(req.rootUser);
})

// contact us page


////////// log out ///////////
router.get('/logout', (req,res)=>{
    console.log(`hello my logout page`);
    res.clearCookie('jwToken',{path:'/'})
    res.status(200).json({ message:'user logout'});
})

module.exports = router