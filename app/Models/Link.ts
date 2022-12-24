import { Model } from "axe-api";

class Link extends Model {
  get primaryKey(): string {
    return "uuid";
  }

  get fillable(): string[] {
    return ["url"];
  }

  get validations(): Record<string, string> {
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
