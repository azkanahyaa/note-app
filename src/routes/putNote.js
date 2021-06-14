const notes = require("../notes")

const route = {
    method: 'PUT',
    path: '/notes/{id}',
    handler: (request, h) => {
        const { id } = request.params

        const { title,tags, body } = request.payload

        const updatedAt = new Date().toISOString()

        const index = notes.findIndex(note => note.id === id)

        if (index !== -1) {
            notes[index] = {
                ...notes[index],
                title,
                tags,
                body, 
                updatedAt
            }
            const response = h.response({
                status: 'success',
                message: 'Catatan berhasil diperbarui'
            })
            response.code(200)
            return response
        }

        const response = h.response({
            status: 'fail',
            message: 'Gagal memperbaharui catatan. Id tidak ditemukan'
        })
        response.code(404)
        return response
    }
}

module.exports = route