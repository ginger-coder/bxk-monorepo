"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.welcomeUser = void 0;
const package_a_1 = require("@my-scope/package-a");
function welcomeUser(name) {
    const greeting = (0, package_a_1.greet)(name);
    return `${greeting} Welcome to our platform. --by bianxk`;
}
exports.welcomeUser = welcomeUser;
