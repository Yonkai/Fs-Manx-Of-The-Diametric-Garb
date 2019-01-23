//Import models

//Render main board page
exports.index = function(req, res) {
    res.render('main_board');
}

//Render white cat board page
exports.white_cats = function(req, res) {
    res.render('white_cats');
}

//Render black cat board page
exports.black_cats = function(req, res) {
    res.render('black_cats');
}

//Render grey cat board page
exports.grey_cats = function(req, res) {
    res.render('grey_cats');
}

//Render orange cat board page
exports.orange_cats = function(req, res) {
    res.render('orange_cats');
}

//Render tabby cat board page
exports.tabby_cats = function(req, res) {
    res.render('tabby_cats');
}


