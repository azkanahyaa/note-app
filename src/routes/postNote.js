const notes = require('../notes')
const { nanoid } = require('nanoid')

const route = {
    method: 'POST',
    path: '/notes',
    handler: (request, h) => {
        const { title, tags, body } = request.payload
        const id = nanoid(6)
        const createdAt = new Date().toISOString()
        const updatedAt = createdAt

        const newNote = { title, tags, body, id, createdAt, updatedAt }
        
        notes.push(newNote)

        const isSucces = notes.some(note => note.id === id)
        
        if (isSucces) {
            const response = h.response({
                status: 'succes',
                message: 'Catatan berhasil ditambahkan',
                data: {
                    noteId: id
                }
            })
            response.code(201)
            return response
        }

        const response = h.response({
            status: 'fail',
            message: 'Catatan gagal ditambahkan',
        })
        response.code(500)
        return response
    }
}

module.exports = route