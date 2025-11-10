"use client";
import React, { useEffect, useState } from "react";
import ProductForm from "@/app/components/productform";
import { useRouter } from "next/navigation";
import { supabaseBrowser } from "@/app/lib/supabaseBrowser";

export default function CreateProduct() {   
    
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold mb-6">Create Product</h1>
      <ProductForm mode="create" />
    </section>
  );
}
