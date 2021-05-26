export const up = function (knex) {
  return knex.schema.createTable("links", function (table) {
    table.uuid("uuid").primary();
    table.integer("user_id").nullable().unsigned();
    table.string("url");

    table
      .foreign("user_id")
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamps();
  });
};

export const down = function (knex) {};
