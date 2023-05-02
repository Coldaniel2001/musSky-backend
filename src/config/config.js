const dotenv = require('dotenv')

const ENV = process.env.NODE_ENV || "development"

if (ENV === "development") {
    dotenv.config({ path: ".env.development" })
} else {
    dotenv.config({ path: ".env.production" })
}


const CONFIG = {
    development: {
        app: {
            PORT: process.env.PORT || 4005
        },
        db: {
            URL: process.env.MONGO_URL
        },
        auth0:{
            client_origin: process.env.APP_ORIGIN,
            audience: process.env.AUTH0_AUDIENCE,
            issuer: process.env.AUTH0_ISSUER,
        }
    },
    production: {
        app: {
            PORT: process.env.PORT || 4006
        },
        db: {
            URL: process.env.MONGO_URL
        },
        auth0:{
            client_origin: process.env.APP_ORIGIN,
            audience: process.env.AUTH0_AUDIENCE,
            issuer: process.env.AUTH0_ISSUER,
        }
    }
}

module.exports = CONFIG[ENV]