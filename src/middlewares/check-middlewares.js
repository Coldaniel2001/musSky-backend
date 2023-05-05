// const { auth0 } = require('../config/config')
// const { expressjwt: jwt } = require("express-jwt")
// const jwksRsa = require("jwks-rsa")

// const checkJwt = jwt({
//     secret: jwksRsa.expressJwtSecret({
//         cache: true,
//         rateLimit:true,
//         jwksRequestsPerMinute: 5,
//         jwksUri: `${auth0.issuer}.well-known/jwks.json`
//     }),

//     audience:auth0.audience,
//     issuer:auth0.issuer,
//     algorithms:['RS256']
// })

// module.exports = {
//     checkJwt
// }
const { auth } = require('express-oauth2-jwt-bearer');

const jwtCheck = auth({
    audience: "MvenrVUNImyZXZV83EPbI4AtsILyOpvq",
    issuerBaseURL: 'https://dev-yeqwyacrnvebw8ga.us.auth0.com/',
    tokenSigningAlg: 'RS256'
})

module.exports = {jwtCheck}