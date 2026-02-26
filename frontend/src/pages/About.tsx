import { Lightbulb, Heart, Shield, Star, GraduationCap, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const coreValues = [
  {
    icon: Lightbulb,
    title: 'Curiosity',
    description: 'We encourage students to ask questions, explore ideas, and never stop learning.',
  },
  {
    icon: Heart,
    title: 'Respect',
    description: 'We treat every member of our community with dignity, empathy, and genuine care.',
  },
  {
    icon: Shield,
    title: 'Integrity',
    description: 'We act with honesty and transparency in all that we do, modeling ethical behavior for our students.',
  },
  {
    icon: Star,
    title: 'Excellence',
    description: 'We hold ourselves to the highest standards, striving to be the best in everything we do.',
  },
];

export default function About() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-school-indigo py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-school-amber translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-0.5 bg-school-amber" />
            <span className="text-school-amber text-sm font-medium tracking-widest uppercase">About Us</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Our Story & Mission
          </h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
            Located in the vibrant neighborhood of Kankarbagh, Doon's Public School has been a stepping stone
            for thousands of students across Patna.
          </p>
        </div>
      </section>

      {/* Our Story & Image */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-0.5 bg-school-amber" />
                <span className="text-school-amber text-sm font-medium tracking-widest uppercase">Our Story</span>
              </div>
              <h2 className="section-heading mb-4">
                A Stepping Stone for Thousands
              </h2>
              <div className="amber-divider" />
              <p className="text-muted-foreground leading-relaxed mt-5 mb-4">
                Located in the vibrant neighborhood of Kankarbagh, Doon's Public School has been a stepping stone
                for thousands of students. We built this school with one goal: to create an environment where
                students feel safe to ask questions, make mistakes, and learn how to lead.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Today, Doon's Public School stands as a testament to the power of dedicated teaching, strong
                community values, and an unwavering belief in the potential of every student in Patna and beyond.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-school-amber/20 rounded-sm -z-10" />
              <img
                src="/assets/generated/about-image.dim_800x500.png"
                alt="Doon's Public School"
                className="w-full rounded-sm shadow-card-hover object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-school-indigo/10 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-school-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="section-heading">Our Mission</h2>
            <div className="amber-divider mx-auto" />
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-card overflow-hidden">
              <div className="h-2 bg-school-indigo" />
              <CardContent className="p-10 text-center">
                <GraduationCap className="w-12 h-12 text-school-amber mx-auto mb-5" />
                <p className="text-school-indigo font-serif text-xl md:text-2xl font-semibold leading-relaxed">
                  "To empower every student with the knowledge, character, and confidence to succeed in a changing world."
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-school-indigo">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">Our Core Values</h2>
            <div className="w-16 h-1 bg-school-amber rounded-full mx-auto" />
            <p className="text-white/70 max-w-xl mx-auto mt-4">
              These four values guide everything we do at Doon's Public School.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {coreValues.map((v) => (
              <div
                key={v.title}
                className="bg-white/10 border border-white/20 rounded-sm p-6 card-hover text-center"
              >
                <div className="w-14 h-14 rounded-full bg-school-amber/20 flex items-center justify-center mb-4 mx-auto">
                  <v.icon className="w-7 h-7 text-school-amber" />
                </div>
                <h3 className="font-serif text-xl font-bold text-white mb-2">{v.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">Message from the Principal</h2>
            <div className="amber-divider mx-auto" />
          </div>
          <div className="max-w-3xl mx-auto">
            <Card className="border-0 shadow-card-hover overflow-hidden">
              <div className="h-2 bg-school-amber" />
              <CardContent className="p-10">
                <Quote className="w-10 h-10 text-school-amber mb-6" />
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    Welcome, students! High school is one of the most exciting chapters of your life. It is a time
                    to figure out who you are and what you want to achieve.
                  </p>
                  <p>
                    Here at Doon's, our doors are always open to you. Our dedicated teachers and staff are here to
                    guide you, challenge you, and cheer you on. Whether your passion lies in mathematics, literature,
                    or on the sports field, we are here to help you turn your potential into reality.
                  </p>
                  <p className="font-semibold text-school-indigo">
                    Make the most of your time here!
                  </p>
                </div>
                <div className="mt-8 flex items-center gap-4 pt-6 border-t border-border">
                  <div className="w-14 h-14 rounded-full bg-school-indigo flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg font-serif">P</span>
                  </div>
                  <div>
                    <p className="font-serif font-bold text-school-indigo">The Principal</p>
                    <p className="text-muted-foreground text-sm">Doon's Public School, Patna</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
