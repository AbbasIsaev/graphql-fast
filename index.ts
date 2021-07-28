import './initEnv'
import {app, graphqlPath} from './app'
import {sequelize} from './models'

const PORT = process.env.APP_PORT || 3000

// Проверяем подключение к БД
sequelize.authenticate()
    .then(() => {
        console.log('База данных подключена')

        app.listen(PORT, () => {
            console.log(`Сервер запущен: http://localhost:${PORT}${graphqlPath}`)
        })
    })
    .catch(error => console.log(error))