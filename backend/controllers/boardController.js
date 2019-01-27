//Import models

//Render main board page
exports.index = function(req, res) {
    res.render('main_board');
}

//Render white cat board page
exports.white_cats = function(req, res) {
    res.render('cats',{catcolor:'White'});
}

//Render black cat board page
exports.black_cats = function(req, res) {
    res.render('cats',{catcolor:'Black'});
}

//Render grey cat board page
exports.grey_cats = function(req, res) {
    res.render('cats',{catcolor:'Grey'});
}

//Render orange cat board page
exports.orange_cats = function(req, res) {
    res.render('cats',{catcolor:'Orange'});
}

//Render tabby cat board page
exports.tabby_cats = function(req, res) {
    res.render('cats',{catcolor:'Tabby'});
}


