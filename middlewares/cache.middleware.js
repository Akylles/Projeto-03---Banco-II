import serviceCache from "../services/cache.service.js";

const CHAVE = 'produtos'

const limpaCache = async (req, res, next) => {
    try {
        await serviceCache.excluir(CHAVE)
        next()
    } catch (error) {
        console.log(error)
        res.status(500).send({
            message: "Erro do servidor"
        })
    }
}

const verificaSeTemCache = async (req, res, next) => {
    const cache = await serviceCache.buscar(CHAVE)

    if (cache){
        res.status(200).send({
            message: "Produtos do cache",
            produtos: cache
        
        })        
    }else{
        next()
    }
}


const middlewareCache = {
    verificaSeTemCache,
    limpaCache
}

export default middlewareCache