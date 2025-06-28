'use client'
import toast from 'react-hot-toast'
import Link from 'next/link'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { Product } from '@/lib/data'

interface ProductDetailClientProps {
  product: Product
}

interface Props {
  productName: string
}

export function ProductDetailClient({ product }: ProductDetailClientProps) {
  return (
    <section className="min-h-screen bg-gray-50">

      <motion.div 
        className="bg-white shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-x-2 text-sm py-4">
            <Link href="/" className="text-gray-500 hover:text-gray-700">
              Home
            </Link>
            <span className="text-gray-400">/</span>
            <Link href="/products" className="text-gray-500 hover:text-gray-700">
              Products
            </Link>
            <span className="text-gray-400">/</span>
            <span className="text-gray-900 font-medium">{product.name}</span>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <motion.div 
          className="bg-white rounded-lg shadow-lg overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div className="relative h-96 sm:h-[500px] md:h-[600px] lg:h-full lg:min-h-[500px]">
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover cursor-pointer transition-opacity duration-200"
                priority
              />
            </div>

            <div className="p-8">
              <h1 className="text-3xl font-bold text-gray-900 mb-4">
                {product.name}
              </h1>

              <div className="mb-6">
                <span className="text-4xl font-bold text-green-600">
                  ${product.price.toFixed(2)}
                </span>
              </div>

              <div className="mb-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Description</h3>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
                <ClientButtons productName={product.name} />
              </div>

              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="text-lg font-semibold text-gray-900 mb-4">Product Details</h3>
                <ul className="space-y-2 text-gray-700">
                  <li className="flex justify-between">
                    <span>Category:</span>
                    <span className="font-medium">{product.category}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Product ID:</span>
                    <span className="font-medium">#{product.id}</span>
                  </li>
                  <li className="flex justify-between">
                    <span>Availability:</span>
                    <span className="font-medium text-green-600">In Stock</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </motion.div>

        <motion.div 
          className="mt-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.35, ease: "easeOut" }}>
          <Link href="/products"
            className="inline-flex items-center text-blue-600 hover:text-blue-700 font-medium">
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Products
          </Link>
        </motion.div>
      </div>
    </section>
  )
}

function ClientButtons({ productName }: Props) {
  const handleAddToCart = () => {
    toast.success(`${productName} added to cart!`, {
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
    })
  }

  const handleAddToWishlist = () => {
    toast.success(`${productName} added to wishlist!`, {
      duration: 3000,
      position: 'bottom-right',
      style: {
        background: '#3B82F6',
        color: 'white',
        fontWeight: '500',
        borderRadius: '8px',
        padding: '12px 16px',
      },
      iconTheme: {
        primary: 'white',
        secondary: '#3B82F6',
      },
    })
  }

  return (
    <div className="flex flex-col sm:flex-row gap-3 md:gap-8">
      <button onClick={handleAddToCart}
        className="md:w-[240px] w-[290px] bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition-colors duration-200 font-medium text-lg flex-1 cursor-pointer">
        Add to Cart
      </button>
      <button onClick={handleAddToWishlist}
        className="md:w-[240px] w-[290px] border border-gray-300 text-gray-700 px-8 py-2 rounded-md hover:bg-gray-50 transition-colors duration-200 font-medium text-lg flex-1 cursor-pointer">
        Add to Wishlist
      </button>
    </div>
  )
}