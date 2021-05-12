export const up = function (knex) {
  return knex.schema.createTable("posts", function (table) {
    table.increments();
    table.integer("user_id").nullable().unsigned();
    table.string("title");
    table.text("content");

    table
      .foreign("user_id")
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamps();
  });
};

export const down = function (knex) {};