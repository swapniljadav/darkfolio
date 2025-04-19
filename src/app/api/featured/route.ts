import { sanity } from '@/lib/sanity'
import { NextResponse } from 'next/server'

export async function GET() {
  const query = `*[_type == "featuredProject"] | order(order asc){
    title,
    description,
    techStack
  }`

  const featured = await sanity.fetch(query)
  return NextResponse.json(featured)
}
