const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
let products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");

const controller = {
	// Root - Show all products
	index: (req, res) => {
		res.render('products', {products})
	
	},

	// Detail - Detail from one product
	detail: (req, res) => {
		let idProd = req.params.idProd
		//idProd = idProd-1
		res.render("detail", {products : products.filter((producto)=> producto.id == idProd)[0]})
	}, 

	// Create - Form to create
	create: (req, res) => {
		res.render("product-create-form")
	},
	
	// Create -  Method to store
	store: (req, res) => {
		let body = req.body;
		let newProduct = body;
		newProduct.id = products[products.length-1].id +1
		products.push(newProduct)

		res.redirect('/products')
	},
	
	// Update - Form to edit
	edit: (req, res) => {
		let { idProd }= req.params
		//idProd = idProd-1
		res.render("product-edit-form", {productToEdit :products.filter((producto)=> producto.id == idProd)[0] })
	},

	// Update - Method to update
    update: (req, res) => {
        // Do the magic
        let id = req.params.id;
        let infoForm=req.body;
        
        products.forEach(function (elemento){
            if (elemento.id == id)
            {
                elemento.name = infoForm.name;
                elemento.price = infoForm.price;
                elemento.discount = infoForm.discount;
                elemento.category = infoForm.cetegory;
                elemento.description = infoForm.description;
            }
        })

        //fs.writeFileSync(productsFilePath,JSON.stringify(products))

		res.redirect('/products')     
    },

	// Delete - Delete one product from DB
	destroy : (req, res) => {
		// Do the magic
		let id = req.params.id;
        let infoForm=req.body;
		products = products.filter((producto)=> producto.id != id)
    //celulares = newCelulares
    res.send(products)
	}
};

module.exports = controller;