import { Model, hasMany } from "axe-api";

class User extends Model {
  get fillable() {
    return {
      POST: ["email", "name"],
      PUT: ["name"],
    };
  }

  get relations() {
    return [hasMany("Post")];
  }
}

export default User;
