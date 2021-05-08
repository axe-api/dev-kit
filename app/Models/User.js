import { Model, hasMany } from "axe-api";

class User extends Model {
  get table() {
    return "users";
  }

  get fillable() {
    return {
      POST: ["email", "name", "surname", "age"],
      PUT: ["name", "surname", "age"],
    };
  }

  get validations() {
    return {
      POST: {
        email: "required|email",
        name: "required|max:50",
      },
      PUT: {
        name: "required|max:50",
      },
    };
  }

  get relations() {
    return [hasMany("Post")];
  }

  get actions() {
    return ["GET", "POST", "PUT", "DELETE"];
  }
}

export default User;
