import redis from 'redis'
import 'dotenv/config'

const HOST = process.env.REDIS_HOST
const PORT = process.env.REDIS_PORT

const clienteRedis = new redis.createClient({
    host: HOST,
    port: PORT
})

try {
    await clienteRedis.connect()    
    console.log(`Conectado com o REDIS efetuada com sucesso`)
} catch (error) {
    console.log(error)
}

export default clienteRedis