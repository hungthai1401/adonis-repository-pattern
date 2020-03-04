"use strict";

/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| Http routes are entry points to your web application. You can create
| routes for different URLs and bind Controller actions to them.
|
| A complete guide on routing is available here.
| http://adonisjs.com/docs/4.1/routing
|
*/

/** @type {typeof import('@adonisjs/framework/src/Route/Manager')} */
const Route = use("Route");
const DEFAULT_NAMESPACE = "Api/";

Route.get("/", `${DEFAULT_NAMESPACE}IndexController.index`);
Route.post("/", `${DEFAULT_NAMESPACE}CreateController.index`).validator(
  "CreateUser"
);
Route.get("/:id", `${DEFAULT_NAMESPACE}DetailController.index`);
Route.put("/:id", `${DEFAULT_NAMESPACE}EditController.index`).validator(
  "EditUser"
);
Route.delete("/:id", `${DEFAULT_NAMESPACE}DeleteController.index`);
