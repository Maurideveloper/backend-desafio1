class ProductManager {

  constructor() {
    this.products = [];
  }

  getProducts() {
    return this.products;
  }

  addProducts(product) {
    const existeProducto = this.products.find((producto) => producto.code === product.code);

    if (existeProducto) {
      console.log(`Producto con código ${product.code} ya existe.`);
    } else {
      
      if (this.products.length === 0) {
        product.id = 1;
      } else {
        product.id = this.products[this.products.length - 1].id + 1;
      }

      this.products.push(product);
      console.log(`Producto "${product.title}" agregado.`);
    }
  }

  getProductByID(id) {
    const product = this.products.find((p) => p.id === id);
    return product || "No existe el ID seleccionado";
  }
}

class Product {
  constructor(title, description, price, thumbnail, code, stock) {
    this.title = title || "";
    this.description = description || "";
    this.price = price || 0;
    this.thumbnail = thumbnail || "";
    this.code = code || "";
    this.stock = stock || 0;
  }
}

const manejadorProducts = new ProductManager();

manejadorProducts.addProducts(
  new Product("Chocolate 1", "Chips de chocolate", 1200, '🍫', 'a1', 10)
);

manejadorProducts.addProducts(
  new Product("Chocolate 2", "Chips de chocolate", 1200, '🍫', 'a2', 10)
);

manejadorProducts.addProducts(
  new Product("Chocolate 3", "Chips de chocolate", 1200, '🍫', 'a2', 10)
);

manejadorProducts.addProducts(
  new Product("Chocolate 4", "Chips de chocolate", 1200, '🍫', 'a4', 10)
);

console.log(manejadorProducts.getProducts());

const productoEncontrado = manejadorProducts.getProductByID(2); 
console.log("Se encontro con el ID el producto: " + productoEncontrado.title);
