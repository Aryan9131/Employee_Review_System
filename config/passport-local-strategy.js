const passport=require('passport');
const LocalStrategy=require('passport-local').Strategy;
const User=require('../models/userSchema');
passport.use(new LocalStrategy({
    usernameField: 'email'
},
    async function(email, password, done){
        try {
            const user = await User.findOne({ email: email });
             if (!user || user.password != password) {
            console.log("Passport-Local : Invalid Username/Password user");
            return done(null, false);
         } else {
            return done(null, user);
         }
        } catch (error) {
            console.log("Error while authenticate user **passport** : "+error);
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