const {
  SQL_SERVER = "nkjs-mdedicals.database.windows.net",
  SQL_DATABASE = "nnkjs-medicals-orders",
  SQL_ADMINUSERNAME = "nkjs-user",
  SQL_ADMINPASSWORD = "{ga15ecNav",
} = process.env

const config = {
  SQL_SERVER,
  SQL_DATABASE,
  SQL_ADMINUSERNAME,
  SQL_ADMINPASSWORD,
  SQL_CONFIG: {
    username: SQL_ADMINUSERNAME,
    password: SQL_ADMINPASSWORD,
    database: SQL_DATABASE,
    host: SQL_SERVER,
    port: 1433,
    dialect: 'mssql',
    dialectOptions: {
      options: {
        encrypt: true
      }
    },
    logging: false,
    pool: {
      max: 50, // Maximum number of connection in pool (default: 5)
      min: 0, // Minimum number of connection in pool (default: 0)
      idle: 10000, // The maximum time, in milliseconds, that a connection can be idle before being released (default: 10000)
      acquire: 60000, // The maximum time, in milliseconds, that pool will try to get connection before throwing error (default: 60000)
      evict: 1000 // The time interval, in milliseconds, after which sequelize-pool will remove idle connections (default: 1000)
    },
    retry: {
      match: [ // Only retry a query if the error matches one of these strings
        /SequelizeConnectionError/,
        /SequelizeConnectionRefusedError/,
        /SequelizeHostNotFoundError/,
        /SequelizeHostNotReachableError/,
        /SequelizeInvalidConnectionError/,
        /SequelizeConnectionTimedOutError/,
        /TimeoutError/
      ],
      max: 10 // How many times a failing query is automatically retried. Set to 0 to disable retrying on SQL_BUSY error
    }
  }
}

module.exports = config
