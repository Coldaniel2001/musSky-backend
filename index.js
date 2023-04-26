const app = require("./src/server")
const config = require("./src/config/config")

const connect = require("./src/db/connect")

function onInitServer(){
    console.log("database is connected")
    app.listen(config.app.PORT, () => {
        console.log(`Server is running on Port ${config.app.PORT}`)
    })
}

connect().then(onInitServer())