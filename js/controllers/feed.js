const db = require("../../conexao.js")

const getAll = async () => {

  const query = "select * from postagem"
  result = await db.query(query)

  console.log(result.rows);
  return result.rows
}

const insert = async (id_user,duvida,tecnologias) => {
  const data = new Date()
  const query = "insert into postagem (usuario_id,duvida,data) values ($1,$2,$3)"
  result = await db.query(query,[id_user,duvida,data])
  const query2 = "select * from postagem where usuario_id = $1 and duvida = $2 and data =$3"
  result2 = await db.query(query2,[id_user,duvida,data])
  console.log(result2.rows[0].id);
  for(linha of tecnologias){
    const query = "insert into postagem_tecnologia (postagem_id,tecnologia_id) values ($1,$2)"
    result = await db.query(query,[result2.rows[0].id,linha.id])
    
  }

  
  return result.rows
}

const update = async (nome,email,id) => {

  const verifica = "select * from usuario where id = $1"
  var result = await db.query(verifica,[id])
  if(!result.rows.length > 0){
    console.log("ITEM INEXISTENTE");
    return "ITEM INEXISTENTE"
  }
  const query = "update usuario set nome = $1, email = $2 where id=$3"
  result = await db.query(query,[nome,email,id])

  console.log(result.rows);
  return result.rows
}

const deletar = async (id) => {

  const verifica = "select * from usuario where id = $1"
  var result = await db.query(verifica,[id])
  if(!result.rows.length > 0){
    console.log("ITEM INEXISTENTE");
    return "ITEM INEXISTENTE"
  }
  const query = "delete from usuario where id=$1"
  await db.query(query,[id])

  console.log("ITEM DELETADO");
  return "ITEM DELETADO"
  
}

const get = async (id) => {

  var result
  const query = "select * from usuario where id = $1";
  result = await db.query(query,[id])


  return result.rows
  
}

module.exports = {
  getAll,insert,update,deletar,get
} 