// app/products/[id]/edit/page.tsx
import axios from "axios";
import ProductForm from "@/app/components/productform";
import { productType } from "@/types/product";

export default async function EditPage({ params }: { params: { productId: string } }) {
  
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SITE_URL}/api/products/${params.productId}`);
  const product = response.data as productType;
  
  return(
    <section className="py-12">
  
    <ProductForm productId={params.productId} initialData={product} mode="edit" />
    </section>
)
}

 