const dotenv = require('dotenv')

dotenv.config()

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
        auth0: {
            client_origin: process.env.APP_ORIGIN,
            audience: process.env.AUTH0_AUDIENCE,
            issuer: process.env.AUTH0_ISSUER,
        },
        cloudinary: {
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        }
    },
    production: {
        app: {
            PORT: process.env.PORT || 4006
        },
        db: {
            URL: process.env.MONGO_URL
        },
        auth0: {
            client_origin: process.env.APP_ORIGIN,
            audience: process.env.AUTH0_AUDIENCE,
            issuer: process.env.AUTH0_ISSUER,
        },
        cloudinary: {
            cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
            api_key: process.env.CLOUDINARY_API_KEY,
            api_secret: process.env.CLOUDINARY_API_SECRET,
        }
    }
}

module.exports = CONFIG[ENV]