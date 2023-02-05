import {
  IMethodBaseConfig,
  IMethodBaseValidations,
  Model,
} from from "../../../../index";

class User extends Model {
  get fillable(): IMethodBaseConfig {
    return {
      POST: ["email", "name", "surname"],
      PUT: ["name", "surname"],
    };
  }

  get validations(): IMethodBaseValidations {
    return {
      POST: {
        email: "required|email",
        name: "required",
        surname: "required",
      },
    };
  }

  get middlewares() {
    return [];
  }
}

export default User;
