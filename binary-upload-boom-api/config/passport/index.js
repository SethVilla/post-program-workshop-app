const LocalStrategy = require("passport-local");
const { emailExists, createUser, matchPassword } = require("../db/index.js");

module.exports = (passport) => {
    passport.use(
        "local-signup",
        new LocalStrategy(
            {
                usernameField: "email",
                passwordField: "password",
                passReqToCallback: true
            },
            async (req,email, password, done) => {
                try {
                    const userExists = await emailExists(email)

                    if (userExists) {
                        return done(null, false);
                    }

                    const user = await createUser({username: req.body.username, firstName: req.body.firstName, lastName: req.body.lastName, email, password});
                    return done(null, user);
                } catch (error) {
                    done(error);
                }
            }
        )
    );
    passport.use(
        "local-login",
        new LocalStrategy(
            {
                usernameField: "email",
                passwordField: "password",
            },
            async (email, password, done) => {
                try {
                    const user = await emailExists(email);
                    if (!user) return done(null, false);
                    const isMatch = await matchPassword(password, user.password);
                    if (!isMatch) return done(null, false);
                    delete user.password;
                    return done(null, {...user});
                } catch (error) {
                    return done(error, false);
                }
            }
        )
    );
}
