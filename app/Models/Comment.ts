import { Model } from "axe-api";

class Comment extends Model {
  post() {
    return this.belongsTo("Post", "post_id", "id");
  }
}

export default Comment;
