class ProductView {
  constructor() {
    this.app = document.getElementById("app"); // Elemen utama aplikasi
    this.form = document.createElement("form");
    this.nameInput = document.createElement("input");
    this.priceInput = document.createElement("input");
    this.addButton = document.createElement("button");
    this.productList = document.createElement("ul");

    // Konfigurasi elemen input dan tombol
    this.nameInput.placeholder = "Nama Produk";
    this.priceInput.placeholder = "Harga Produk";
    this.addButton.textContent = "Tambah Produk";

    // Menambahkan elemen ke form
    this.form.append(this.nameInput, this.priceInput, this.addButton);

    // Menambahkan form dan daftar produk ke aplikasi
    this.app.append(this.form, this.productList);
  }

  // Mengambil input dari pengguna
  getProductInput() {
    return {
      name: this.nameInput.value,
      price: parseFloat(this.priceInput.value),
    };
  }

  // Menghapus input setelah ditambahkan
  clearInput() {
    this.nameInput.value = "";
    this.priceInput.value = "";
  }

  // Menampilkan produk ke layar
  displayProducts(products) {
    // Kosongkan daftar produk terlebih dahulu
    this.productList.innerHTML = "";

    // Buat elemen daftar produk
    products.forEach((product) => {
      const li = document.createElement("li");
      li.textContent = `${product.name} - $${product.price}`;
      li.id = product.id;

      const deleteButton = document.createElement("button");
      deleteButton.textContent = "Hapus";
      li.append(deleteButton);

      this.productList.append(li);
    });
  }

  // Mengatur event listener untuk penambahan produk
  bindAddProduct(handler) {
    this.form.addEventListener("submit", (event) => {
      event.preventDefault();
      handler();
    });
  }

  // Mengatur event listener untuk penghapusan produk
  bindRemoveProduct(handler) {
    this.productList.addEventListener("click", (event) => {
      if (event.target.tagName === "BUTTON") {
        const productId = event.target.parentElement.id;
        handler(productId);
      }
    });
  }
}

export default ProductView;
