export const up = function (knex) {
  return knex.schema.createTable("comments", function (table) {
    table.increments();
    table.integer("post_id").nullable().unsigned();
    table.text("content");

    table
      .foreign("post_id")
      .references("posts.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamps();
  });
};

export const down = function (knex) {};
