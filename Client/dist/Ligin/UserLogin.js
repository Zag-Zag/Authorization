
class  UserLogin{
  static #password;
  static #loginName;
  static SetPassword(password){
    this.#password = password
  };
  static SetLoginName(loginName){
    this.#loginName = loginName
  };
  static GetParametrsUser(){
    return `UserName=${this.#loginName}&Password=${this.#password}`;
  }
}