import express from 'express'
import controllerOcorrencia from '../controllers/ocorrencia.controller.js'
import middlewareGlobal from '../middlewares/global.middleware.js'
import middlewareCache from '../middlewares/cache.middleware.js'

const router = express.Router()

router.get('/', middlewareCache.verificaSeTemCache, middlewareGlobal.temOcorrenciaCadastrada, controllerOcorrencia.mostrarOcorrencias)

router.get('/mapa', controllerOcorrencia.exibirMapa)

router.get('/form/:lat/:lng', controllerOcorrencia.renderizarFormulario)

router.post('/salvar', middlewareCache.limpaCache, middlewareGlobal.validaForm, controllerOcorrencia.registrarOcorrencia)

router.get('/local/:id', middlewareGlobal.validaID, controllerOcorrencia.visualizarLocalizacao)

router.delete('/deletar/:id', middlewareCache.limpaCache, middlewareGlobal.validaID, middlewareGlobal.validaOcorrencia, controllerOcorrencia.deletar)

router.get('/edicao/:id', middlewareGlobal.validaID, controllerOcorrencia.formEdicao)

router.patch('/atualizar/:id', middlewareCache.limpaCache, controllerOcorrencia.atualizar)

router.get('/charts', controllerOcorrencia.mostrarCharts)

export default router