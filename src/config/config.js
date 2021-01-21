// Define a string de conexão com o banco de dados
module.exports = {
    development: {
        database: {
            host: 'ls-1dbd24128902b6717dd75efd765c670967db73cc.cs2h3flg47ox.us-east-1.rds.amazonaws.com',
            port: 3306,
            name: 'db_usuario',
            dialect: 'mysql',
            user: 'dbmasteruser',
            password: '9>H8^.IX{RU,kq>LcCOyl01lFx8:K&}#'
        }
    },
    production: {
        database: {
            host: process.env.DB_HOST,
            host: process.env.DB_PORT
        }
    }
}