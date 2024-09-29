const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User=require('../models/userSchema');
const bcrypt = require('bcrypt'); // Ensure bcrypt is installed and required

passport.use(new LocalStrategy({
    usernameField: 'email'
},
async function (email, password, done) {
   try {
       console.log("Authenticating user:", email +" password->"+password); // Log the email
       const user = await User.findOne({ email: email });
       console.log("User found:", user); // Log user found

       if (!user) {
           console.log("No user found with that email");
           return done(null, false, { message: "Invalid Username/Password" });
       }

       // Assuming you're using bcrypt to hash passwords
       const isMatch =(password==user.password);
       console.log("Password match ->" + isMatch+ " "+ (password==user.password)+" typeofPassword->"+typeof password +"  "+typeof user.password +" "+password+" "+user.password); // Log password match status
       
       if (!isMatch) {
           console.log("Incorrect password");
           return done(null, false, { message: "Invalid Username/Password" });
       }

       return done(null, user);
   } catch (error) {
       console.error("Error during authentication:", error);
       return done(error);
   }
}


))


// Serializing the user to decide which key is to be kept in cookies
passport.serializeUser(function (user, done) {
    done(null, user.id);
})

// Deserializing the user from the key in the cookies
passport.deserializeUser(async function (id, done) {
   try {
      const user = await User.findOne({ _id: id });
      return done(null, user);
   } catch (error) {
      console.log("Passport-Local : Error while finding user while deserialzing:- " + error);
      return done(error);
   }
})

passport.checkAuthentication = function (req, res) {
   if (req.isAuthenticated()) {
      return next();
   }

   return res.redirect('/user/sign-in');
}

passport.setAuthenticatedUser = function (req, res, next) {
   if (req.isAuthenticated()) {
      res.locals.user = req.user;
   }
   next();
}
module.exports = passport;