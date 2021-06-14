const fs = require('fs')

const handlerFiles = fs.readdirSync('./src/routes').filter(file => file.endsWith('.js'))

let tempRoutes = []

for (const file of handlerFiles) {
    const route = require(`./routes/${file}`)
    tempRoutes.push(route)
}

const routes = [
    ...tempRoutes
]

console.log(routes)

module.exports = routes