'use client';
import { motion } from 'framer-motion';

export const Features = () => {
  const features = [
    {
      emoji: '🚚',
      title: 'Fast Shipping',
      description: 'Free shipping on orders over $50. Get your products delivered quickly and safely.',
    },
    {
      emoji: '⭐',
      title: 'Quality Products',
      description: 'All our products are carefully selected and tested to ensure the highest quality standards.',
    },
    {
      emoji: '🔒',
      title: 'Secure Shopping',
      description: 'Your personal information and payment details are protected with enterprise-grade security.',
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 max-w-6xl mx-auto px-2 sm:px-4 py-8 2xl:py-12">
      {features.map((feature, index) => (
        <motion.div 
          key={index} 
          className="bg-white rounded-xl p-5 sm:p-6 md:p-8 shadow-lg hover:shadow-xl transition-shadow duration-300 h-full"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: index * 0.1, ease: "easeOut" }}>
          <div className="text-3xl sm:text-4xl mb-3 sm:mb-4">{feature.emoji}</div>
          <h3 className="text-lg sm:text-xl font-semibold text-gray-900 mb-2 sm:mb-3">{feature.title}</h3>
          <p className="text-sm sm:text-base text-gray-600 leading-relaxed">{feature.description}</p>
        </motion.div>
      ))}
    </div>
  );
};
