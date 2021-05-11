import { Model } from "axe-api";

class Comment extends Model {
  get fillable() {
    return ["content"];
  }

  post() {
    return this.belongsTo("Post", "post_id", "id");
  }
}

export default Comment;
