const mongoose = require("mongoose");
const productModel = require("../models/productsModel");


class Product {
	constructor() {
		this.url = "mongodb+srv://Apizarro:darbeta12@cluster0.ho8uwm4.mongodb.net/?retryWrites=true&w=majority"
		//this.url = "mongodb://localhost:27017/";
		this.mongodb = mongoose.connect;
		this.mongodb(this.url);
	}

	// Crear Archivo con el producto

	async save(prod){
		try{
			await this.mongodb(this.url)
			const result = await prod.save();
			console.log(`result ${result}`)
			return result;
		}catch(err){
			return err;
		}
	}

	async createData(prod) {
		try {
			await this.mongodb(this.url)
			const newProduct = await this.save(
				new productModel({
                title: prod.title,
                price: prod.price,
                thumbnail: prod.thumbnail
            })
			);
			console.log(`newProduct ${newProduct}`)
			return await newProduct;
		} catch (err) {
			console.log(err)
		}
	}

	// Obtener producto por Id
	async getById(id) {
		try {
			//findById es un metodo de mongoose
			await this.mongodb(this.url);
			return await ProductModel.findById(id);

		} catch (error) {
			return { error: "Producto no existe" }
		}
	}
	// Obtener todos los productos

	async getAll() {
		try {
			await this.mongodb(this.url);
			return await ProductModel.find();

		} catch (err) {
			return { error: "No existen productos" }
		}
	}

	// Actualizar un producto
	async put(id, prod) {
		try {
			await this.mongodb(this.url);
			return await ProductModel.findByIdAndUpdate(id, prod);

		} catch (err) {
			console.log(err)
		}
	}

	// Borrar un producto
	async delete(id) {
		try {
			await this.mongodb(this.url);
			return await ProductModel.findByIdAndDelete(id);

		} catch (err) {
			return { error: "No existen productos" }
		}


	}
}

module.exports = Product;
