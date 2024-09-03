class ProductModel {
  constructor() {
    this.products = []; // Array untuk menyimpan data produk
  }

  // Menambahkan produk baru
  addProduct(product) {
    this.products.push(product);
  }

  // Mengambil semua produk
  getProducts() {
    return this.products;
  }

  // Menghapus produk berdasarkan ID
  removeProduct(productId) {
    this.products = this.products.filter((product) => product.id !== productId);
  }

  // Memperbarui produk berdasarkan ID
  updateProduct(productId, updatedProduct) {
    this.products = this.products.map((product) =>
      product.id === productId ? { ...product, ...updatedProduct } : product
    );
  }
}

export default ProductModel;
