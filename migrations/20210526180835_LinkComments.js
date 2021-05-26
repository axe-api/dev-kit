export const up = function (knex) {
  return knex.schema.createTable("link_comments", function (table) {
    table.increments();
    table.uuid("link_uuid").notNullable();
    table.integer("create_user_id").nullable().unsigned();
    table.string("content");

    table
      .foreign("create_user_id")
      .references("users.id")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");

    table
      .foreign("link_uuid")
      .references("links.uuid")
      .onDelete("CASCADE")
      .onUpdate("CASCADE");
    table.timestamps();
  });
};

export const down = function (knex) {};
