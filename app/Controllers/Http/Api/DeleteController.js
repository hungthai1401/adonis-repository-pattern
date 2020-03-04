"use strict";
const UserService = use("App/Services/UserService");

class DeleteController {
  async index({ params: { id } }) {
    const user = UserService.delete(id);
    return user;
  }
}

module.exports = DeleteController;
