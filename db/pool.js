const { Pool } = require("pg");

// All of the following properties should be read from environment variables
// We're hardcoding them here for simplicity
module.exports = new Pool({
  connectionString: "postgresql://postgres:fUcRSsmEjCHznPKLewoNJqsBsamMzRrK@switchyard.proxy.rlwy.net:52426/railway"
});