import { Model } from "axe-api";

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

  user() {
    return this.hasOne("User");
  }
}

export default Post;
