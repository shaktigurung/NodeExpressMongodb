const BookModel = require("./../database/models/book_model");

async function create(req, res){
    //logic for creating a resource
    let {name, bio, gender} = req.body;
    let book = await BookModel.create({name, bio, gender})  
        .catch(err => res.status(500).send(err));
    res.redirect(`/books/${book._id}`);
}
async function index(req, res){
    // showed a list of all the resources
   let books = await BookModel.find();
   res.render("book/index", {books});
}
function make(req, res){
    // shows the form to create the resource
    res.render("book/new");
}
async function destroy(req, res){
    //Deletes the resource
    let {id} = req.params;
    await BookModel.findByIdAndRemove(id);
    res.redirect("/books");
}
async function show(req, res){
    //shows a single resource
    let {id} = req.params;
    let book = await BookModel.findById(id);
    res.render("book/show", {book});
}

async function update(req, res){
    //updates the resource
    let {name, bio, gender} = req.body;
    let {id} = req.params;
    await BookModel.findByIdAndUpdate(id, {name, bio, gender});
    res.redirect(`/books/${id}`);

}
async function edit(req, res){
    //shows the form to edit the resource
    let {id} = req.params;
    let book = await BookModel.findById(id);
    res.render("books/edit", {book});
}

module.exports = {
    create,
    index,
    make, 
    destroy,
    show,
    update,
    edit 
}