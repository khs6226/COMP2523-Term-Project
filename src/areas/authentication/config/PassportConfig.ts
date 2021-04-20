//----------------------------------------
// TODO: Serialize User, Deserialize User, login function     |
//----------------------------------------
// 🚀 Configure Passport.js Local Authentication in this file
//    Ensure code is fully typed wherever possible (unless inference can be made)
import passport from 'passport';
import * as passportLocal from 'passport-local';
import IUser from '../../../interfaces/user.interface';
import { IAuthenticationService } from '../services/IAuthentication.service';

const LocalStrategy = passportLocal.Strategy;

export default class PassportConfig {
  private _Strategy;
  private _user: IUser;
  private _strategyOptions: passportLocal.IStrategyOptions = {
    usernameField: "email",
    passwordField: "password",
  };
  private _authService: IAuthenticationService;

  constructor(authService: IAuthenticationService, strategyType: string) {
    this._authService = authService;
    this._Strategy = new LocalStrategy(this._strategyOptions, this.signIn);
    passport.use(this._Strategy);
    passport.serializeUser(this.serializeUser);
    passport.deserializeUser(this.deserializeUser);
  }

  serializeUser(user: IUser, done): void {
    done(null, user.email);
  }

  async deserializeUser(email: string, done) {
    try {
      const user = await this._authService.findUserByEmail(email);
      return done(null, user);
    } catch (e) {
      done({ message: "user not found" }, null);
    }
  }

  async signIn(email: string, password: string, done) {
    try {
      this._user = await this._authService.getUserByEmailAndPassword(email, password);
      return done(null, this._user);
    } catch (e) {
      done(null, false, e);
    }
  }

  get strategy(): passportLocal.Strategy {
    return this._Strategy;
  }
  get user(): IUser {
    return this._user;
  } 
}
