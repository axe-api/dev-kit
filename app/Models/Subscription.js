import { Model } from "axe-api";

class Subscription extends Model {
  get fillable() {
    return ["email"];
  }

  get validations() {
    return {
      email: "required|email",
    };
  }
}

export default Subscription;
