import { Model, hasMany } from "axe-api";

class User extends Model {
  get fillable() {
    return {
      POST: ["email", "name", "surname", "age"],
      PUT: ["name", "surname", "age"],
    };
  }

  get relations() {
    return [hasMany("Post")];
  }
}

export default User;
