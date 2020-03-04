"use strict";

const UserService = use("App/Services/UserService");

class CreateController {
  async index({ request }) {
    const input = request.all();
    return await UserService.store(input);
  }
}

module.exports = CreateController;
