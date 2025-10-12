import Image from 'next/image'

export default function TeamSection() {
  const teamMembers = [
    {
      name: 'David Rawlings',
      role: 'Founder and Chief Optimizer',
      image: '/images/team/david-rawlings.jpg',
    },
    {
      name: 'Francois Du Toit',
      role: 'CTO',
      image: '/images/team/francois-du-toit.jpg',
    },
    {
      name: 'Attila Szucs',
      role: 'Head of Analytics',
      image: '/images/team/attila-szucs.jpg',
    },
    {
      name: 'Sarah Chen',
      role: 'Head of Paid Media',
      image: '/images/team/sarah-chen.jpg',
    },
  ]

  return (
    <section className="bg-black text-white py-24 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16">
          <h2 className="text-5xl md:text-6xl font-bold mb-6">Who we are</h2>
          <p className="text-lg md:text-xl text-gray-300 max-w-3xl">
            We are a curated team of international experts united by a single goal: to create category-defining brands and digital experiences that make an impact, shape culture and connect people.
          </p>
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.name} className="group">
              <div className="relative aspect-[3/4] mb-4 overflow-hidden bg-gray-800">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <h3 className="text-xl font-semibold mb-1">{member.name}</h3>
              <p className="text-sm text-gray-400">{member.role}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

