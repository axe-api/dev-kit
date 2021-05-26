export const up = function (knex) {
  return knex.schema.createTable("tickets", function (table) {
    table.uuid("uuid").primary();
    table.string("content");
  });
};

export const down = function (knex) {};
