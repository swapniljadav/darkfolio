import { sanity } from '@/lib/sanity'
import { NextResponse } from 'next/server'

export async function GET() {
  const query = `*[_type == "hero"][0] {
    mainLine,
    subtext
  }`

  const hero = await sanity.fetch(query)
  return NextResponse.json(hero)
}
