"use strict";

const UserService = use("App/Services/UserService");

class IndexController {
  async index() {
    const users = await UserService.fetchAll();
    return { data: users };
  }
}

module.exports = IndexController;
