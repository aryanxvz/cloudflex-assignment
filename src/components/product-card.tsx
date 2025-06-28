'use client';
import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/data';

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="relative group h-full">
      <div className="absolute -inset-0.5 bg-gradient-to-r from-[#2472FC] to-[#8711C1] rounded-xl opacity-0 group-hover:opacity-70 transition-opacity duration-300"></div>
      
      <div className="relative bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 flex flex-col h-full border-2 border-gray-200 group-hover:border-transparent overflow-hidden">
        <div className="relative aspect-square w-full overflow-hidden flex-shrink-0">
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
              
              <Link 
                href={`/products/${product.id}`}
                className="text-blue-600 hover:text-blue-800 text-sm underline transition-colors duration-200"
              >
                View Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}