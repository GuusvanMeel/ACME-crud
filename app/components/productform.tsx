"use client";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { productType } from "@/types/product";

type ProductFormProps = {
  productId?: string;
  initialData?: productType;
  mode: "create" | "edit";
};

export default function ProductForm({ productId, initialData, mode }: ProductFormProps) {
  
    
  
  
    const [formData, setFormData] = useState({
    title: initialData?.title || "",
    price: initialData?.price || 0,
    description: initialData?.description || "",
    category: initialData?.category || "",
    image_url: initialData?.image_url || "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const router = useRouter();


  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      if (mode === "create") {
        await axios.post("/api/products", formData);
        alert("✅ Product created!");
      } else if (mode === "edit" && productId) {
        await axios.put(`/api/products/${productId}`, formData);
        alert("✅ Product updated!");
      }

      router.push("/products")
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("❌ Failed to submit product");
    }
  };
  return (
    <div className="max-w-200 mx-auto w-full" >
    <form 
      onSubmit={handleSubmit}
      className="bg-white dark:bg-gray-900 border border-gray-300 dark:border-gray-800 rounded-2xl shadow-md p-4 flex flex-col gap-5"
    >
      <input
        type="text"
        name="title"
        value={formData.title}
        onChange={handleChange}
        placeholder="Product title"
        className="rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3"
      />
      <input
        type="number"
        name="price"
        value={formData.price}
        onChange={handleChange}
        placeholder="Price"
        step="0.01"
        className="rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3"
      />
      <textarea
        name="description"
        value={formData.description}
        onChange={handleChange}
        placeholder="Description"
        rows={6}
        className="rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3 resize-none"
      ></textarea>
      <input
        type="text"
        name="category"
        value={formData.category}
        onChange={handleChange}
        placeholder="Category"
        className="rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3"
      />
      <input
        type="text"
        name="image_url"
        value={formData.image_url}
        onChange={handleChange}
        placeholder="Image URL"
        className="rounded-xl border border-gray-300 dark:border-gray-700 bg-gray-50 dark:bg-gray-800 p-3"
      />
     {formData.image_url && (
  <img
    src={formData.image_url}
    alt="image preview"
    width={80}
    height={80}
    className="mt-2 rounded-lg border border-gray-300 dark:border-gray-700 object-contain"
  />
)}

      <button
        type="submit"
        className="mt-4 inline-flex items-center justify-center rounded-xl bg-indigo-600 px-5 py-3 text-white font-semibold hover:bg-indigo-700 transition-colors shadow"
      >
        {mode === "create" ? "Create Product" : "Update Product"}
      </button>
    </form>
    </div>
  );
}
