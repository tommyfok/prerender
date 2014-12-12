module.exports = {
    beforeSend: function(req, res, next) {
      	if(!req.prerender.documentHTML) {
      		  return next();
      	}

        req.prerender.documentHTML = req.prerender.documentHTML.toString().replace(/\sng-\w+="[^"]+"/gi, '');
        req.prerender.documentHTML = req.prerender.documentHTML.toString().replace(/<!--[^>]*-->/gi, '');
        next();
    }
};

