import { Model } from "axe-api";
import { CAPABILITIES } from "axe-api";
import isLogged from "./../Middlewares/isLogged.js";
import isAdmin from "./../Middlewares/isAdmin.js";

class User extends Model {
  get fillable() {
    return {
      POST: ["email", "name"],
      PUT: ["name"],
    };
  }

  get validations() {
    return {
      POST: {
        email: "required|email",
        name: "required",
      },
    };
  }

  get middlewares() {
    return [
      {
        capability: CAPABILITIES.PAGINATE,
        middleware: isLogged,
      },
      isAdmin,
      (req, res, next) => {
        next();
      },
    ];
  }

  myPosts() {
    return this.hasMany("Post", "id", "user_id");
  }

  otherPosts() {
    return this.hasMany("Post", "id", "user_id");
  }
}

export default User;
