import serviceCache from "../services/cache.service.js";

const CHAVE = 'ocorrencias'

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
        const colecaoOcorrencias = cache.map(
            ocorrencia => {
                return {
                    id: ocorrencia._id,
                    titulo: ocorrencia.titulo,
                    tipo: ocorrencia.tipo,
                    data: ocorrencia.data.toLocaleString('pt-BR', { timezone: 'UTC' }),
                    localizacao: ocorrencia.localizacao
                }
            }
        )
        console.log('.........VEIO DO CACHE............')
        res.render('ocorrencias/ocorrencias', {ocorrencias: colecaoOcorrencias})        
    }else{
        next()
    }
}


const middlewareCache = {
    verificaSeTemCache,
    limpaCache
}

export default middlewareCache