import clienteRedis from '../database/redis.database.js'

const salvar = async (chave, valor) => await clienteRedis.set(chave, JSON.stringify(valor))

const buscar = async (chave) => {
    let produto = await clienteRedis.get(chave)
    produto = JSON.parse(produto)

    return produto
}

const excluir = async (chave) => await clienteRedis.del(chave)


const serviceCache = {
    salvar,
    buscar,
    excluir
}

export default serviceCache