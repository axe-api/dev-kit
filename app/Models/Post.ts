import { Model } from "axe-api";

class Post extends Model {
  get table(): string {
    return "posts";
  }

  get fillable(): string[] {
    return ["title", "content"];
  }

  get validations(): Record<string, string> {
    return {
      title: "required|max:100",
    };
  }

  serialize(item: any) {
    return {
      ...item,
      upperCase: item.title ? item.title.toUpperCase() : "",
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
