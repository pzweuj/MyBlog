import { getAllPosts } from '@/lib/markdown'
import { NextResponse } from 'next/server'

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url)
  const query = searchParams.get('q')?.toLowerCase()

  if (!query) {
    return NextResponse.json([])
  }

  const posts = await getAllPosts()
  
  const results = posts.filter(post => {
    const titleMatch = post.title.toLowerCase().includes(query)
    const contentMatch = post.content.toLowerCase().includes(query)
    const tagsMatch = post.tags.some(tag => tag.toLowerCase().includes(query))
    
    return titleMatch || contentMatch || tagsMatch
  }).map(post => ({
    title: post.title,
    excerpt: post.excerpt,
    slug: post.slug,
    date: post.date
  }))

  return NextResponse.json(results)
} 