"use strict";

const { formatters } = use("Validator");

class CreateUser {
  async authorize() {
    return true;
  }

  get rules() {
    return {
      username: "required|unique:users,username",
      password: "required",
      email: "required|email|unique:users,email"
    };
  }

  get messages() {
    return {
      "username.required": "You must provide a username.",
      "username.unique": "This username is already registered.",
      "password.required": "You must provide a password",
      "email.required": "You must provide a email address.",
      "email.email": "You must provide a valid email address.",
      "email.unique": "This email is already registered."
    };
  }

  async fails(errors) {
    return this.ctx.response.send(errors);
  }

  get formatter() {
    return formatters.Vanilla;
  }
}

module.exports = CreateUser;
