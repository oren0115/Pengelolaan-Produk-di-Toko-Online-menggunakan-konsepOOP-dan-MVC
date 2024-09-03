import ProductModel from "./ProductModel.js";
import ProductView from "./ProductView.js";
import ProductController from "./ProductController.js";

// Inisialisasi Model, View, dan Controller
const app = new ProductController(new ProductModel(), new ProductView());
