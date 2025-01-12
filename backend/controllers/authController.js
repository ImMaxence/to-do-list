import passport from '../configurations/passportConfig.js';

export const googleAuth = passport.authenticate('google', { scope: ['https://www.googleapis.com/auth/plus.login', 'email'] });

export const googleAuthCallback = passport.authenticate('google', { failureRedirect: '/' });

export const authSuccess = (req, res) => {
    // Successful authentication, redirect home.
    res.redirect('/');
};