const uuid = require('uuid')
const mongoose = require('mongoose')


const imageSchema = new mongoose.Schema(
    {
        filename: String,
        ratio: Number,
        size: { width: Number, height: Number },
        caption: String,
        origin: String,
        is_active: Boolean,
        created: new Date(),
      _id: { type: String, default: uuid }
    },
    { versionKey: false }
)

imageSchema.statics.toResponse = user => {
    const { title, columns } = user
    return { id: user._id, title, columns }
}

const Image = mongoose.model('Image', imageSchema)

module.exports = Image

