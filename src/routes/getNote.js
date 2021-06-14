const notes = require('../notes')

const route = {
    method: 'GET',
    path: '/notes/{id}',
    handler: (request, h) => {
        const { id } = request.params

        const note = notes.find(n => n.id === id)
        console.log(notes)

        if (note) {
            return {
                status: 'success',
                data: {
                    note
                }
            }
        }
        const response = h.response({
            status: 'fail',
            message: 'Catatan tidak ditemukan'
        })
        response.code(404)
        return response
    }
}

module.exports = route