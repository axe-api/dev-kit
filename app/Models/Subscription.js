import { Model } from "axe-api";

class Subscription extends Model {
  get fillable() {
    return ["email"];
  }
}

export default Subscription;
