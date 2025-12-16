import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabaseClient";

export async function GET(
  _: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params;
  const productId = Number(id);
  
  if (!productId) {
    return NextResponse.json(
      { error: "Invalid ID" },
      { status: 400 }
    );
  }
  
  const { data, error } = await supabase
    .from("producten")
    .select("*")
    .eq("id", productId)
    .single();
    
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  
  if (!data) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }
  
  return NextResponse.json(data);
}

export async function PUT(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // Add this line
  const product = await req.json();
  
  const { error } = await supabase
    .from("producten")
    .update({
      title: product.title,
      price: product.price,
      description: product.description,
      category: product.category,
      image: product.image
    })
    .eq("id", id); // Fixed syntax here too
    
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  
  return NextResponse.json(product);
}

export async function DELETE(
  req: Request,
  { params }: { params: Promise<{ id: string }> }
) {
  const { id } = await params; // Add this line
  
  const { error } = await supabase
    .from("producten")
    .delete()
    .eq("id", id); // Fixed syntax here too
    
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  
  return NextResponse.json({ success: true });
}