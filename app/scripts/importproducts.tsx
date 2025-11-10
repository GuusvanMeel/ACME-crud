import axios from "axios";

import { createClient } from '@supabase/supabase-js'
import { productType } from "../../types/product";

const supabaseUrl = 'https://uhvksjtplaxuoslkmjug.supabase.co'
const supabaseKey = `eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVodmtzanRwbGF4dW9zbGttanVnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxNDExMTMsImV4cCI6MjA3NDcxNzExM30.ehYNuQT0w0840osgioCZV4MVGqd4q0nO6t7JWG7Ekyc`

const supabase = createClient(supabaseUrl, supabaseKey!)    

async function importProducts() {
    const response = await axios.get("https://fakestoreapi.com/products");
    const products = response.data.map((p: productType) => ({
      id: p.id,
      title: p.title,
      price: p.price,
      description: p.description,
      category: p.category,
      image_url: p.image_url
    }));
  
    const { error } = await supabase.from("producten").insert(products);
    if (error) console.error(error);
    else console.log("Data inserted successfully!");
  }
  
  importProducts();

