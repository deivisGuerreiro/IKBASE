const db = require("./conexao.js")

const getAll = async () => {

  const query = "select * from postagem"
  result = await db.query(query)

  console.log(result);
  return result
}

module.exports = {
  getAll
} 