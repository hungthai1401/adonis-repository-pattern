"use strict";

const { formatters } = use("Validator");

class EditUser {
  async authorize() {
    return true;
  }

  get rules() {
    const userId = this.ctx.params.id;
    return {
      username: `unique:users,username,id,${userId}`,
      email: `email|unique:users,email,id,${userId}`
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

  get formatters() {
    return formatters.Vanilla;
  }
}

module.exports = EditUser;
