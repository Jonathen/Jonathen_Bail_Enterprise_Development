var Module = require('./module.model');

function handleError(res, err) {
  console.log(err);
  return res.status(500).json(err);
}


exports.addModule = function(req, res){
	console.log('addModule API:', req.body)
	var module = {
		title: req.body.title
	}
	Module.create(module, function(err, module){
		if(err){handleError(res, err)}
		else{
			console.log('Added module:', module)
			res.status(201).json(module)
		}
	})
}

exports.getModules = function(req, res){
	console.log('getModules', req.body)
	Module.find(function(err, modules){
		if(err){handleError(res, err)}
		else{
			console.log("got modules", modules)
			res.status(200).json(modules)
		}
	})
}