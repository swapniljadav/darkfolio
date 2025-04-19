import { sanity } from '@/lib/sanity'
import { NextResponse } from 'next/server'

export async function GET() {
  const query = `*[_type == "experience"] | order(order asc){
    company,
    role,
    duration,
    description,
    icon
  }`

  const experience = await sanity.fetch(query)
  return NextResponse.json(experience)
}
