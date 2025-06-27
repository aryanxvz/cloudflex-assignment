import { notFound } from 'next/navigation'
import { products } from '@/lib/data'
import { ProductDetailClient } from '@/components/product-details'

interface ProductDetailPageProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProductDetailPage({ params }: ProductDetailPageProps) {
  const { id } = await params
  const productId = parseInt(id)
  const product = products.find((p) => p.id === productId)

  if (!product) {
    notFound()
  }

  return (
    <ProductDetailClient product={product} />
  )
}