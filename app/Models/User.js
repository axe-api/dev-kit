import { Model } from "axe-api";

class User extends Model {
  get fillable() {
    return {
      POST: ["email", "name"],
      PUT: ["name"],
    };
  }

  posts() {
    return this.hasMany("Post");
  }
}

export default User;
