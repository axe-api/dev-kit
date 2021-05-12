import { Model } from "axe-api";
import { CAPABILITIES } from "axe-api";
import { isAdmin, isLogged } from "./../Middlewares/User/index.js";
import general from "./../Middlewares/general.js";

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
      general,
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
