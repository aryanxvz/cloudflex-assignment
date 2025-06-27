'use client';
import Link from 'next/link';
import Image from 'next/image';
import { ShoppingCart, Plus } from 'lucide-react';
import { Product } from '@/lib/data';
import { toast } from 'react-hot-toast';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    
    toast.success(`${product.name} added to cart!`, {
      duration: 3000,
      position: 'bottom-right',
      style: {
        background: '#10B981',
        color: 'white',
        fontWeight: '500',
        borderRadius: '8px',
        padding: '12px 16px',
      },
      iconTheme: {
        primary: 'white',
        secondary: '#10B981',
      },
    });
  };

  return (
    <Link href={`/products/${product.id}`} className="relative group cursor-pointer block h-full">

      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2472FC] to-[#8711C1] rounded-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
      
      <div className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full border-2 border-gray-200 group-hover:border-transparent overflow-hidden">
        <div className="relative h-[160px] sm:h-[200px] md:h-[220px] w-full overflow-hidden flex-shrink-0">
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-cover hover:scale-105 duration-300 transition-all"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        </div>

        <div className="p-3 sm:p-4 flex flex-col flex-grow">
          <div className="flex-grow flex flex-col">
            <h3 className="font-black text-gray-900 text-sm sm:text-md md:text-lg mb-1 sm:mb-2 line-clamp-2">
              {product.name}
            </h3>
            <div className="text-gray-600 text-xs sm:text-sm line-clamp-2 hidden md:block flex-grow">
              {product.description}
            </div>
          </div>

          <div className="mt-3 sm:mt-4">
            <div className="flex items-center justify-between">
              <span className="text-lg sm:text-xl md:text-2xl font-bold text-green-600">
                ${product.price.toFixed(2)}
              </span>
              
              <button
                onClick={handleAddToCart}
                className="relative bg-gradient-to-r from-emerald-500 to-teal-600 text-white p-2 rounded-full hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 group/cart">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-400 to-teal-500 rounded-full opacity-0 group-hover/cart:opacity-20 transition-opacity duration-300"></div>
                <div className="relative flex items-center justify-center">
                  <ShoppingCart className="w-4 h-4 sm:w-5 sm:h-5 transition-transform duration-200" />
                  <Plus className="w-2.5 h-2.5 sm:w-3 sm:h-3 absolute -top-0.5 -right-0.5 bg-white text-emerald-600 rounded-full transition-all duration-200 group-hover/cart:scale-110" />
                </div>
              </button>
            </div>
          </div>

        </div>
      </div>
    </Link>
  );
}