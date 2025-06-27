'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Features } from '@/components/features';
import MainButton from '@/components/button';

export default function HomePage() {
  return (
    <section className="min-h-screen bg-gray-50 flex justify-center items-center">
      <div className="mx-auto px-6 py-8 md:px-4 md:py-12 lg:py-16">

        <motion.div 
          className="max-w-4xl mx-auto text-center"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.75, ease: "easeOut" }}>
          <h1 className="text-5xl lg:text-6xl 2xl:text-7xl font-bold text-gray-900 mb-3 sm:mb-4 md:mb-6 leading-tight">
            Welcome to{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              ProductStore
            </span>
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 mb-6 md:mb-8 max-w-3xl mx-auto leading-relaxed px-2">
            Discover amazing products curated just for you. From electronics to lifestyle essentials, 
            we have everything you need to enhance your daily life.
          </p>
        </motion.div>

        <motion.div
          className="hidden sm:block"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.2, ease: "easeOut" }}>
          <Features />
        </motion.div>
        
        <motion.div 
          className="flex flex-col sm:flex-row gap-4 justify-center items-center mt-6 sm:mt-8 2xl:mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.35, ease: "easeOut" }}>
          <Link href="/products">
            <MainButton />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
