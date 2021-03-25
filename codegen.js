const pkg = require("./package.json");
const endpoint = pkg.graphqlEndpoint;

module.exports = {
  overwrite: true,
  schema: [
    {
      [endpoint]: {
        headers: {
          "X-Hasura-Admin-Secret": process.env.HASURA_ADMIN_SECRET || "",
        },
      },
    },
  ],
  generates: {
    "./schema.json": {
      plugins: ["introspection"],
    },
  },
};
