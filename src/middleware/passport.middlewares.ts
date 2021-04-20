import { MockAuthenticationService } from "../areas/authentication/services/Authentication.service.mock";
import passport from "passport";
import PassportConfig from "../areas/authentication/config/PassportConfig";

module.exports = (app) => {
  app.use(passport.initialize());
  app.use(passport.session());
  // Use PassportConfig class here
  new PassportConfig(new MockAuthenticationService(), 'local');
};
