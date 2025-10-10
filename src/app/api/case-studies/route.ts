import { NextResponse } from 'next/server'
import { prisma } from '@/lib/prisma'

/**
 * GET /api/case-studies
 * Returns all published case studies, ordered by the order field
 */
export async function GET() {
  try {
    const caseStudies = await prisma.caseStudy.findMany({
      where: {
        published: true,
      },
      orderBy: {
        order: 'asc',
      },
    })

    return NextResponse.json(caseStudies)
  } catch (error) {
    console.error('Error fetching case studies:', error)
    return NextResponse.json(
      { error: 'Failed to fetch case studies' },
      { status: 500 }
    )
  }
}

