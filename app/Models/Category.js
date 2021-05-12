import { Model } from "axe-api";

class Category extends Model {
  static get table() {
    return "categories";
  }

  static get fillable() {
    return ["title"];
  }

  categories() {
    return this.hasMany("Category");
  }

  category() {
    return this.hasOne("Category");
  }
}

export default Category;
