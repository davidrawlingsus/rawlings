import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

export async function GET() {
  try {
    const logos = await prisma.logo.findMany({
      where: { published: true },
      orderBy: { order: 'asc' },
    })

    return NextResponse.json(logos)
  } catch (error) {
    console.error('Error fetching logos:', error)
    return NextResponse.json(
      { error: 'Failed to fetch logos' },
      { status: 500 }
    )
  }
}

