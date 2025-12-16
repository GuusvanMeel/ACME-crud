// app/products/[id]/edit/page.tsx
import { supabase } from "@/app/lib/supabaseClient";
import ProductForm from "@/app/components/productform";
import { notFound } from "next/navigation";

export default async function EditPage({ 
  params 
}: { 
  params: Promise<{ productId: string }> 
}) {
  const { productId } = await params;
  const id = Number(productId);

  // Validate id
  if (!Number.isFinite(id) || id <= 0) {
    notFound();
  }

  const { data: product, error } = await supabase
    .from("producten")
    .select("*")
    .eq("id", id)
    .single();

  if (error || !product) {
    notFound();
  }

  return (
    <section className="py-12">
      <ProductForm productId={productId} initialData={product} mode="edit" />
    </section>
  );
}