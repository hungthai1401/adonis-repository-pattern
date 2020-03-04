"use strict";

const UserService = use("App/Services/UserService");

class DetailController {
  async index({ params: { id } }) {
    return await UserService.findOrFail(id);
  }
}

module.exports = DetailController;
