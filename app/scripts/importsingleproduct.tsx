import axios from "axios";

async function addProduct() {
  try {
    const newProduct = {
      title: "MINECRAFT Torch lamp",
      price: 59.99,
      description: "DIT IS EEN TORCH LAMPTJE SO TRUE FOREAL FROEAL YESSIR",
      category: "electronics",
      image: "https://example.com/torchlampje.jpg",
    };

    const response = await axios.post("/api/products", newProduct);
    console.log("Product added:", response.data);
  } catch (err) {
    console.error("Error adding product:", err);
  }
}
addProduct();
