import { useState } from 'react';
import {  FaTrash } from 'react-icons/fa';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { deleteProduct } from '@/lib/actions/actions';
import { ProductType } from '@/lib/ProductType';


export default function All({ products,  }: { products: ProductType[] }) {
  const [productList, setProductList] = useState(products);

  const handleDelete = async (id: string) => {
    const confirmed = confirm("Are you sure you want to delete this product?");
    if (!confirmed) return;

    const result = await deleteProduct(id);

    if (result.success) {
      setProductList((prev) => prev.filter((product) => product.id !== id));
      alert("Product deleted successfully");
    } else {
      alert("Error deleting product: " + result.message);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-6">ყველა პროდუქტი</h1>

      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow">
          <thead>
            <tr className="text-left border-b">
              <th className="p-4">სურათი</th>
              <th className="p-4">სახელი</th>
              <th className="p-4">ტიპი</th>
              <th className="p-4 text-center">ქმედება</th>
            </tr>
          </thead>
          <tbody>
            {productList.map((product) => (
              <tr key={product.id} className="border-b hover:bg-gray-50 transition">
                <td className="p-4">
                  <div className="w-12 h-12 relative rounded-full overflow-hidden">
                    <Image  loading="lazy"  quality={80}
                      src={product.images?.[0] ?? '/placeholder.jpg'}
                      alt={product.titleKa}
                      width={48} height={48}
                      className="object-cover"
                      unoptimized
                    />
                  </div>
                </td>
                <td className="p-4 font-medium"> <Link href={`/product/${product.id}`}>{product.titleKa}    </Link></td>
                <td className="p-4 text-gray-600">{product.type}</td>
                <td className="p-4 flex justify-center gap-4">
                  
                  <Button className="cursor-pointer" onClick={() => handleDelete(product.id)}>
                    <FaTrash className="cursor-pointer" size={18} />
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
