const ProductModel = require("./../database/models/product_model");

async function index(req, res) {
   const product = await ProductModel.find();
   res.render("products/index",{products});
}

async function show(req, res) {
    //res.send("show single product");
    // const{id} = req.params;
    // // const id = req.params.id;
    // const product =  await ProductModel.findById(id);
    res.render("products/show", {product: req.product});
}

function make(req, res) {
    res.render("products/make");
}

async function create(req, res) {
    // res.send("logic to create new product");
    // res.json(req.body);
    // const product = new ProductModel;
    // product.name = name
    // product.save();
   const {name, categories, price} = req.body;
   const product =  await ProductModel.create({name, categories, price});
   res.redirect(`/products/${product._id}`);

}

function update(req, res) {
    res.send("show form to make new product");
}

function destroy(req, res) {
    res.send("show form to make new product");
}

async function edit(req, res) {
   // res.send("show form to make new product");
   const{id} = req.params;
   const product =  await ProductModel.findById(id);
   res.render("products/edit", {product});

}

module.exports = {
    index,
    show,
    make,
    create,
    update,
    destroy,
    edit
}