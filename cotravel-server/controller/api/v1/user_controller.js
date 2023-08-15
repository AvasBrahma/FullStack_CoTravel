const User=require('../../../models/user');
const jwt=require('jsonwebtoken');


module.exports.signUp=async function(req, res) {
    try {
        console.log("User Body", req.body);
     
        let user = await User.findOne({ email: req.body.email });
             if (user) {
                 return res.status(200).send({
                     success: false,
                     message: 'Sorry, User Already Exists',
                 });
             }
     
       let newUser = await User.create({
           email: req.body.email,
           name: req.body.name,
           password: req.body.password
       });
     
       if (newUser) {
           return res.status(200).send({ 
               success: true,
               data : newUser,
               message: 'User Signup Successfully',
           });
       }
     
     } catch (error) {
       return res.status(500).send({
           success: false,
           message: 'Internal Server Error',
       });
     }
     
}

module.exports.login=async function(req, res){
  let user= await User.findOne({email: req.body.email})
  if(!user || user.password!=req.body.password){
     return res.json(422, {
       success: false,
       message: "Invalid username or password"
     });
  }

  return res.status(200).send({
    message: "User Login Successfully, here is your token",
    success: true ,
    data:{
      token: jwt.sign(user.toJSON(), 'test123', { expiresIn: '100000'}),
      user
    }
  })
}

