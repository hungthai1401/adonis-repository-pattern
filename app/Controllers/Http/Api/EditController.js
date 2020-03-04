"use strict";
const UserService = use("App/Services/UserService");

class EditController {
  async index({ request, params: { id } }) {
    const user = UserService.update(request.all(), id);
    return user;
  }
}

module.exports = EditController;
