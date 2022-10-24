import googleOAuth from "passport-google-oauth20";

import dotenv from "dotenv";
dotenv.config({
  path: require("path").resolve(__dirname, "../.env"),
});

import { UserModel } from "../database/allModels";

const Googlestrategy = googleOAuth.Strategy;

export default (passport) => {
    passport.use(new Googlestrategy(
        {
            clientID: process.env.GOOGLE_CLIENT_ID,
            clientSecret: process.env.GOOGLE_CLIENT_SECRET,
            callbackURL: "http://localhost:99/auth/google/callback"

        },
        async (accessToken, refreshToken, profile, done) => {
            // creating a new user
            const newUser = {
                fullName: profile.displayName,
                email: profile.emails[0].value,
                profilePic: profile.photos[0].value
            };
            try {
                // check if user exists
                const user = await UserModel.findOne({ email: newUser.email })

                if (user) {
                    // generate token
                    const token = user.generateJwtToken();

                    // return user
                    done(null, { user, token });
                } else {
                    // create new user
                    const user = await UserModel.create(newUser);

                    // generate token
                    const token = user.generateJwtToken();

                    // return user
                    done(null, { user, token });
                }
            } catch (error) {
                done(error, null);
            }
        }
    ));

    passport.serializeUser((userData, done) => done(null, { ...userData }))
    passport.deserializeUser((id, done) => done(null, id))
}