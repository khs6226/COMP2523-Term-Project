import { database } from "../../../model/fakeDB";
import IUser from "../../../interfaces/user.interface";
import { IAuthenticationService } from "./IAuthentication.service";
import WrongCredentialsException from "../../../exceptions/WrongCredentialsException";

export class MockAuthenticationService implements IAuthenticationService {
  readonly _db = database;

  public async getUserByEmailAndPassword(email: string, password: string): Promise<IUser> {
    const user = this._db.users.find((user) => {
      return user.email === email && user.password === password;
    });

    if (user) {
      if (user.password === password) {
        return user;
      } else {
        throw new WrongCredentialsException();
      }
    }
    throw new Error(`Could not find a user with email: ${email}`);
  }

  public async findUserByEmail(email: String): Promise<null | IUser> {
    const user = this._db.users.find((user) => {
      return user.email === email;
    });

    if (user) {
      return user;
    }
    throw new Error(`Could not find a user with email: ${email}`);
  }

  public async createUser(user: IUser): Promise<IUser> {
    let newUser: IUser;
    newUser = {
      id: user.id,
      username: user.username,
      email: user.email,
      password: user.password,
      firstName: user.firstName,
      lastName: user.lastName
    };

    this._db.users.push(newUser);
    return newUser;
  }
}
