const pkg = require("./package.json");
const { MAUNA_GRAPHQL_ENDPOINT } = process.env;
const endpoint = MAUNA_GRAPHQL_ENDPOINT || pkg.graphqlEndpoint;
console.log(endpoint);

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
