const notes = require('../notes')

const route = {
    method: 'GET',
    path: '/notes',
    handler: () => ({
        status: 'success',
        data: {
            notes
        }
    })
}

module.exports = route