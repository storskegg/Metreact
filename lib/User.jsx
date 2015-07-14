class User {
  "use strict"

  constructor(username, email, roles) {
    this.username = username;
    this.userEmail = email;

    this.userRoles = roles || [];

    this.userFirstName = '';
    this.userLastName = '';
    this.userMiddleInitial = '';
  }
  get userName() {
    return this.username;
  }
  get userEmail() {
    return this.userEmail;
  }
  get userNick() {
    return <b>{this.userFirstName + ' ' + this.userLastName.charAt(0) + '.'}</b>;
  }
}
