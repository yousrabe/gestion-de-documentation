
export class MuserService {
  private _firstName: String;
  private _lastName: String;
  private _username: String;
  private _email: String;
  private _password: String;

  get lastName(): String {
    return this._lastName;
  }
  get firstName():String
  {
    return this._firstName;
  }
  get username():String
  {
    return this._username;
  }
  get email():String
  {
    return this._email;
  }
  get password():String
  {
    return this._password;
  }
  set LastName(value:String){
    this._lastName=value;
  }
  set FirstName(value:String){
    this._firstName=value;
  }
  set Username(value:String){
    this._username=value;
  }
  set Email(value:String){
    this._email=value;
  }
  set Password(value:String){
    this._password=value;
  }
}
