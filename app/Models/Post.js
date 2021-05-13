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
    };
  }

  user() {
    return this.belongsTo("User", "user_id", "id");
  }

  comments() {
    return this.hasMany("Comment", "id", "post_id");
  }
}

export default Post;
