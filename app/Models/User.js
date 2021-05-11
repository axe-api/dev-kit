import { Model, API_FEATURES } from "axe-api";
const { BULK_INSERT, COUNT, BULK_UPDATE } = API_FEATURES;

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

  get actions() {
    return [...super.actions, BULK_INSERT, COUNT, BULK_UPDATE];
  }

  myPosts() {
    return this.hasMany("Post", "id", "user_id");
  }

  otherPosts() {
    return this.hasMany("Post", "id", "user_id");
  }
}

export default User;
