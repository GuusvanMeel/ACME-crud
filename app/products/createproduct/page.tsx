"use client";
import React from "react";
import ProductForm from "@/app/components/productform";

export default function CreateProduct() {   
    
  return (
    <section className="py-12">
      <h1 className="text-3xl font-bold mb-6">Create Product</h1>
      <ProductForm mode="create" />
    </section>
  );
}
