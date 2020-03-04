"use strict";
const { ioc } = require("@adonisjs/fold");
const User = use("App/Models/User");
const Database = use("Database");

class UserRepository {
  async fetchAll() {
    return await User.all();
  }

  async store(input) {
    try {
      return await Database.transaction(async ctx => {
        const user = new User();
        // The fill method overrides existing model instance key/pair values:
        user.fill({ ...input });
        await user.save();
        return user;
      });
    } catch (e) {
      throw e;
    }
  }

  async findOrFail(id) {
    return await User.findOrFail(id);
  }

  async update(input, id) {
    try {
      return await Database.transaction(async ctx => {
        const user = await this.findOrFail(id);
        // The merge method only modifies the specified attributes:
        user.merge({ ...input });
        await user.save();
        return user;
      });
    } catch (e) {
      throw e;
    }
  }

  async delete(id) {
    try {
      return await Database.transaction(async ctx => {
        const user = await this.findOrFail(id);
        await user.delete();
        return user;
      });
    } catch (e) {
      throw e;
    }
  }
}

ioc.singleton("UserRepository", () => {
  return new UserRepository();
});

module.exports = ioc.use("UserRepository");
