import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabaseClient";
import { productType } from "../../../types/product";

export async function GET() {
  const { data, error } = await supabase
    .from("producten")
    .select("*");    
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }  
  if (!data) {
    return NextResponse.json({ error: "Products not found" }, { status: 404 });
  }  
  return NextResponse.json(data);
} 

export async function POST(req: Request) {
  try {
    const product = (await req.json()) as productType;
    console.log("Product received:", JSON.stringify(product, null, 2)); // Better logging
    
    const { data, error } = await supabase
      .from("producten")
      .insert([{
        title: product.title,
        price: product.price,
        description: product.description,
        category: product.category,
        image: product.image
      }])
      .select()
      .single();
      
    if (error) {
      console.error("Supabase error:", error); // Log the actual error
      return NextResponse.json({ error: error.message }, { status: 500 });
    }
    
    return NextResponse.json(data, { status: 201 });
  } catch (err) {
    console.error("Server error:", err);
    return NextResponse.json({ 
      error: err instanceof Error ? err.message : "Unknown error" 
    }, { status: 500 });
  }
}