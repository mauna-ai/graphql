# Mauna GraphQL

GraphQL schema and common queries for mauna. Reference documentation can be found [here](https://mauna-ai.github.io/graphql/docs/).

## Instructions for building package

- Edit files in `common/` directory
- Make sure to set env vars: `export HASURA_ADMIN_SECRET=XXX`
- Run `npm run build`

## Instructions for publishing package

- If build successful, **before committing results**, run `npm run version bump`.
- `npm publish --access public`

## Instructions for updating docs

Docs are built using a ruby gem `graphql_docs` and published on github pages.

- Install `bundler`
- Run `bundle install --path vendor/bundle`
- Run `npm run docs`
- Commit all changes,
- Then `git checkout gh-pages` and `git merge <original-branch>`
- `git push origin gh-pages`
