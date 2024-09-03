import ProductModel from "./ProductModel.js";
import ProductView from "./ProductView.js";

class ProductController {
  constructor(model, view) {
    this.model = model;
    this.view = view;

    // Inisialisasi
    this.view.bindAddProduct(this.handleAddProduct);
    this.view.bindRemoveProduct(this.handleRemoveProduct);

    // Tampilkan produk awal
    this.onProductListChanged(this.model.getProducts());
  }

  // Saat daftar produk berubah, perbarui tampilan
  onProductListChanged = (products) => {
    this.view.displayProducts(products);
  };

  // Tangani penambahan produk
  handleAddProduct = () => {
    const productInput = this.view.getProductInput();
    if (productInput.name && productInput.price) {
      const newProduct = {
        id: Date.now().toString(),
        name: productInput.name,
        price: productInput.price,
      };

      this.model.addProduct(newProduct);
      this.onProductListChanged(this.model.getProducts());
      this.view.clearInput();
    }
  };

  // Tangani penghapusan produk
  handleRemoveProduct = (productId) => {
    this.model.removeProduct(productId);
    this.onProductListChanged(this.model.getProducts());
  };
}

export default ProductController;
