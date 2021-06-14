const notes = require('../notes')

const route = {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: (request, h) => {
        const { id } = request.params

        const index = notes.findIndex(note => note.id === id)

        if (index !== -1) {
            notes.splice(index, 1)
            const response = h.response({
                status: 'success',
                message: 'Catatan berhasil dihapus'
            })
            response.code(200)
            return response
        }

        const response = h.response({
            status: 'fail',
            message: 'Catatan gagal dhapus. Id tidak ditemukan'
        })
        response.code(404)
        return response
    }
}

module.exports = route