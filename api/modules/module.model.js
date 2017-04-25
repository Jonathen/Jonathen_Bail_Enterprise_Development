var mongoose = require('mongoose')
var Schema = mongoose.Schema;


var ModuleSchema = new Schema({
	title: { type: String, required: true }
});

module.exports = mongoose.model('modules', ModuleSchema);
