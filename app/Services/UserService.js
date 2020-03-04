"use strict";
const { ioc } = require("@adonisjs/fold");
const UserRepository = use("App/Repositories/UserRepository");

class UserService {
  async fetchAll() {
    return await UserRepository.fetchAll();
  }

  async store(input) {
    return await UserRepository.store(input);
  }

  async findOrFail(id) {
    return await UserRepository.findOrFail(id);
  }

  async update(input, id) {
    return await UserRepository.update(input, id);
  }

  async delete(id) {
    return await UserRepository.delete(id);
  }
}

ioc.singleton("UserService", () => {
  return new UserService();
});

module.exports = ioc.use("UserService");
