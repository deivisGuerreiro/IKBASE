const db = require("../../conexao.js")

const getAll = async () => {

  const query = "select * from prefeitos"
  result = await db.query(query)

  console.log(result.rows);
  return result.rows
}

module.exports = {
  getAll
} 