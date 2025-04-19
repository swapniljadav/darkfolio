import { sanity } from '@/lib/sanity'
import { NextResponse } from 'next/server'

export async function GET() {
  const query = `*[_type == "about"][0] {
    title,
    content,
    "imageUrl": image.asset->url,
    grayscale
  }`

  const about = await sanity.fetch(query)
  return NextResponse.json(about)
}
