import { Model } from "axe-api";

class LinkComment extends Model {
  get table() {
    return "link_comments";
  }

  get fillable() {
    return ["content", "create_user_id"];
  }

  get validations() {
    return {
      content: "required",
      create_user_id: "required",
    };
  }

  link() {
    return this.belongsTo("Link", "link_uuid", "uuid");
  }
}

export default LinkComment;
