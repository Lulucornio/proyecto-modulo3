const mongoose = require('mongoose')
const PostSchema = new mongoose.Schema({

  title: {
	  type: String, 
	  require: true
	}, 
  description: {
	  type: String, 
	  require: true
	},
  topic: {
	  type: String, 
	  require: true, 
	  enum: [
		  'HTML', 
		  'JavaScript', 
		  'Styles', 
		  'Python', 
		  'Java', 
		  'DataScience', 
		  'Backend', 
		  'Frontend', 
		  'FullStack', 
		  'GitHub'
		]
	}, 
  author: {
	  type: mongoose.Schema.Types.ObjectId, 
	  ref: 'User'
	}

}, {timestamps: true, collection: 'posts'})

PostSchema.methods.publicData = function () {
	return{
		id: this.id,
		title: this.title,
		description: this.description,
		topic: this.topic,
		author: this.author
	}
}

mongoose.model('Post', PostSchema);