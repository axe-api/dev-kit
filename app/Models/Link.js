import { Model } from "axe-api";

class Link extends Model {
  get primaryKey() {
    return "uuid";
  }

  get fillable() {
    return ["url"];
  }

  get validations() {
    return {
      url: "required",
    };
  }

  user() {
    return this.belongsTo("User", "user_id", "id");
  }

  comments() {
    return this.hasMany("LinkComment", "uuid", "link_uuid");
  }
}

export default Link;
