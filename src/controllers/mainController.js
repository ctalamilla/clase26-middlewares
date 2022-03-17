const fs = require('fs');
const path = require('path');

const productsFilePath = path.join(__dirname, '../data/productsDataBase.json');
const products = JSON.parse(fs.readFileSync(productsFilePath, 'utf-8'));

const toThousand = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ".");


const controller = {
	index: (req, res) => {
		res.render("index")
	},
	search: (req, res) => {
		let busqueda = req.query.keywords;
		console.log(busqueda)
		productosBuscados = products.filter((producto)=> producto.description.includes(busqueda))
		console.log(productosBuscados)
		res.send(productosBuscados)
	
	},
	admin: (req, res)=> {
		let user = req.query.user;
		res.send('Hola Admin:'+ user);

	}
};

module.exports = controller;
