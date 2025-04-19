import { sanity } from '@/lib/sanity'
import { NextResponse } from 'next/server'

export async function GET() {
  const query = `*[_type == "project"] | order(_createdAt desc){
    title,
    description,
    slug,
    techStack
  }`

  const projects = await sanity.fetch(query)
  return NextResponse.json(projects)
}
