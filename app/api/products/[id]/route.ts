import { NextResponse } from "next/server";
import { supabase } from "@/app/lib/supabaseClient";

export async function GET(
  req: Request,
  { params }: { params: { id: string } }
) {
  const id = Number(params.id);
  if (!id) {
    return NextResponse.json({ error: "Invalid ID" }, { status: 400 });
  }

  const { data, error } = await supabase
    .from("producten")
    .select("*")
    .eq("id", id)
    .single();

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }

  if (!data) {
    return NextResponse.json({ error: "Product not found" }, { status: 404 });
  }

  return NextResponse.json(data);
} 
export async function PUT(req: Request, { params }: { params: { id: string } }) {   
  const product = await req.json();
  const { error } = await supabase.from("producten")
  .update([{
    title: product.title,
    price: product.price,
    description: product.description,
    category: product.category,
    image_url: product.image_url
  }])
  .eq(`id`, params.id);
  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json(product);
}
export async function DELETE(
  req: Request,
  { params }: { params: { id: string } }
){
  const { error } = await supabase.from("producten").delete().eq(`id`, params.id);

  if (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
  return NextResponse.json({success: true});
}
