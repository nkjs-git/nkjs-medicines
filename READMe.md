ref = https://ravindradevrani.medium.com/node-js-rest-api-crud-with-mssql-and-sequelize-746381585043


Migration scripts:

Add migration file

npm i --save sequelize-cli
npx sequelize-cli migration:generate --name add-timestamp-columns

Ref: https://dev.to/nedsoft/add-new-fields-to-existing-sequelize-migration-3527
https://sequelize.org/docs/v6/other-topics/query-interface/