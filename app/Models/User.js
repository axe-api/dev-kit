import { Model } from "axe-api";
import { HANDLERS } from "axe-api";
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
    return [];
  }

  posts() {
    return this.hasMany("Post", "id", "user_id");
  }
}

export default User;
