import { Model, hasOne } from "axe-api";

class Post extends Model {
  get table() {
    return "posts";
  }

  get fillable() {
    return ["title", "content"];
  }

  get validations() {
    return {
      title: "required|max:100",
      content: "required",
    };
  }

  get relations() {
    return [hasOne("User"), hasOne("Admin"), hasOne("X1")];
  }
}

export default Post;
