var path = require('path'),
    config;

config = {
    production: {
        url: 'https://blog.ertrzyiks.pl/',

        mail: {},

        database: {
            client: 'postgres',
            connection: {
                host: process.env.POSTGRES_HOST,
                user: process.env.POSTGRES_USER,
                password: process.env.POSTGRES_PASSWORD,
                database: process.env.POSTGRES_DATABASE,
                port: '5432'
            }
        },

        server: {
            host: '0.0.0.0',
            port: process.env.PORT
        },

        paths:{
            contentPath: path.join(__dirname, '/content/')
        }
    },
    development: {
        url: 'http://localhost:2368',

        mail: {},

        fileStorage: true,

        database: {
            client: 'sqlite3',
            connection: {
                filename: path.join(__dirname, '/content/data/ghost-dev.db')
            },
            debug: false
        },

        server: {
            host: '0.0.0.0',
            port: '2368'
        },

        paths: {
            contentPath: path.join(__dirname, '/content/')
        }
    }
};

module.exports = config;
