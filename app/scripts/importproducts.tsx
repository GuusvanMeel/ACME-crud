import axios from "axios";
import { productType } from "../../types/product";
import { createClient } from "@supabase/supabase-js";

const supabase = createClient(
  "https://keonktrguevgwkmyditt.supabase.co",
  "sb_publishable_gAKe56CX-_SCsl8qWTdcjQ_5nRuaTlR"
);


async function importProducts() {
    const response = await axios.get("https://fakestoreapi.com/products");
    const products = response.data.map((p: productType) => ({
      id: p.id,
      title: p.title,
      price: p.price,
      description: p.description,
      category: p.category,
      image: p.image
    }));
  
    const { error } = await supabase.from("producten").insert(products);
    if (error) console.error(error);
    else console.log("Data inserted successfully!");
  }
  
  importProducts();

