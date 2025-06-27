'use client'
import { useState } from 'react'
import { motion } from 'framer-motion'
import ProductCard from '@/components/product-card'
import { products as productData } from '@/lib/data'

export default function ProductsPage() {
  const [sortOrder, setSortOrder] = useState<'asc' | 'desc'>('asc')

  const sortedProducts = [...productData].sort((a, b) => {
    return sortOrder === 'asc'
      ? a.price - b.price
      : b.price - a.price
  })

  return (
    <section className="min-h-screen bg-gray-50">
      <motion.div 
        className="bg-white shadow-sm"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="text-center">
            <h1 className="text-3xl sm:text-4xl font-bold text-gray-900">
              Our Products
            </h1>
          </div>
        </div>
      </motion.div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <motion.div 
          className="mb-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1, ease: "easeOut" }}
        >
          <p className="text-gray-600 text-sm sm:text-base">
            Showing <span className="font-semibold">{sortedProducts.length}</span> products
          </p>

          <div className="flex items-center gap-2">
            <label htmlFor="sort" className="text-sm text-gray-700 font-medium">
              Sort by:
            </label>
            <select
              id="sort"
              value={sortOrder}
              onChange={(e) => setSortOrder(e.target.value as 'asc' | 'desc')}
              className="border border-gray-300 rounded-md px-3 py-1.5 text-sm text-gray-700">
              <option value="asc">Price: Low to High</option>
              <option value="desc">Price: High to Low</option>
            </select>
          </div>
        </motion.div>

        <motion.div 
          className="grid grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
        >
          {sortedProducts.map((product, index) => (
            <motion.div
              key={product.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ 
                duration: 0.5, 
                delay: 0.3 + (index * 0.05), 
                ease: "easeOut" 
              }}
            >
              <ProductCard product={product} />
            </motion.div>
          ))}
        </motion.div>
        
      </div>
    </section>
  )
}