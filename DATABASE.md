# Database Setup

## Overview

This project uses **PostgreSQL** (hosted on Railway) with **Prisma ORM** for type-safe database access.

## Connection

The database connection is configured in `.env` and `.env.local`:

```bash
DATABASE_URL="postgresql://postgres:***@ballast.proxy.rlwy.net:20768/railway"
```

## Schema

Located in `prisma/schema.prisma`, includes:

- **CaseStudy** - Portfolio case studies with metrics, tags, and images
- **Testimonial** - Client testimonials with ratings and featured flags  
- **ContactSubmission** - Form submissions for future contact form

## Useful Commands

```bash
# Push schema changes to database (development)
npm run db:push

# Create a migration (production-ready)
npm run db:migrate

# Open Prisma Studio (database GUI)
npm run db:studio

# Regenerate Prisma Client
npm run db:generate

# Seed database with sample data
npm run db:seed
```

## Usage in Code

```typescript
// Import the Prisma client
import { prisma } from '@/lib/prisma'

// Query examples
const caseStudies = await prisma.caseStudy.findMany({
  where: { published: true },
  orderBy: { order: 'asc' }
})

const testimonials = await prisma.testimonial.findMany({
  where: { featured: true }
})
```

## API Routes

Example API route: `/api/case-studies`

Returns all published case studies in order.

## Railway Integration

When deploying to Railway:
- Add `DATABASE_URL` to your service environment variables
- Railway automatically sets this for linked services
- Use `npm run db:push` or migrations before deployment

## Prisma Studio

Access at `http://localhost:5555` when running `npm run db:studio`

Visual interface to view and edit database records.

