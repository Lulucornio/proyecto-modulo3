const mongoose = require('mongoose')
const PostSchema = new mongoose.Schema({

  title: {type: String, require: true}, 
  description: {type: String, require: true}, // Javi recomendó que la longitud se controle en el Frontend
  topic: {type: String, require: true, enum: ['JavaScript', 'Backend', 'Webpack', 'HTML']}, // Definir si es libre o no
  author: {type: mongoose.Schema.Types.ObjectId, ref: 'User'}

}, {timestamps: true, collection: 'posts'})

PostSchema.methods.publicData = () => {
	return{
		id: this.id,
		title: this.title,
		description: this.description,
		topic: this.topic,
		author: this.author,
	}

}


mongoose.model('Post', PostSchema);