import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabaseClient";
import { productType } from "../../../types/product";


export async function GET()
   {
  const { data, error } = await supabase
    .from("producten")
    .select("*")

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!data) {
    return NextResponse.json({ error: "Products not found" }, { status: 404 });
  }

  return NextResponse.json(data);
} 
export async function POST(req: Request) {
   
  const product = (await req.json()) as productType;
  console.log("Product added:"+product);
  const { error } = await supabase.from("producten").insert([{
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    image_url: product.image_url
  }]);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(product);
}

