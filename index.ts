import dotenv from 'dotenv'
import {app, graphqlPath} from './app'

dotenv.config({path: './config/.env'})

const PORT = process.env.APP_PORT || 3000

app.listen(PORT, () => {
    console.log(`Сервер запущен: http://localhost:${PORT}${graphqlPath}`)
})