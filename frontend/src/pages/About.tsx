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
      <section className="bg-school-blue py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-school-red translate-x-1/2 -translate-y-1/2" />
          <div className="absolute bottom-0 left-0 w-64 h-64 rounded-full bg-white -translate-x-1/2 translate-y-1/2" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-0.5 bg-school-red" />
            <span className="text-school-red-light text-sm font-medium tracking-widest uppercase">About Us</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Our Story & Mission
          </h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
            Located in the vibrant neighborhood of Kankarbagh, Doon's Public School has been a stepping stone
            for hundreds of students on their journey to success.
          </p>
        </div>
      </section>

      {/* Our Story */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-0.5 bg-school-red" />
                <span className="text-school-red text-sm font-medium tracking-widest uppercase">Our Story</span>
              </div>
              <h2 className="section-heading mb-4">Building Futures Since 1999</h2>
              <div className="red-divider" />
              <p className="text-muted-foreground leading-relaxed mt-5 mb-4 text-base">
                Doon's Public School was founded with a simple but powerful belief: every child deserves a
                quality education that prepares them not just for exams, but for life. Since our founding,
                we have grown into one of Patna's most trusted educational institutions.
              </p>
              <p className="text-muted-foreground leading-relaxed text-base">
                Our school is more than a place of learning — it is a community where students discover their
                strengths, build lasting friendships, and develop the values that will guide them throughout
                their lives.
              </p>
            </div>
            <div className="relative">
              <div className="absolute -top-4 -right-4 w-24 h-24 bg-school-red/20 rounded-sm -z-10" />
              <img
                src="/assets/generated/about-image.dim_800x500.png"
                alt="Doon's Public School"
                className="w-full rounded-sm shadow-card-hover object-cover"
              />
              <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-school-blue/10 rounded-sm -z-10" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 bg-school-cream">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <div className="flex items-center justify-center gap-2 mb-3">
              <div className="w-6 h-0.5 bg-school-red" />
              <span className="text-school-red text-sm font-medium tracking-widest uppercase">Our Mission</span>
              <div className="w-6 h-0.5 bg-school-red" />
            </div>
            <h2 className="section-heading mb-4">What We Stand For</h2>
            <div className="red-divider mx-auto" />
            <p className="text-muted-foreground leading-relaxed mt-6 text-base">
              Our mission is to provide a nurturing, inclusive, and academically rigorous environment where
              every student can discover their potential, develop their character, and achieve their dreams.
              We are committed to excellence in education, innovation in teaching, and compassion in community.
            </p>
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="section-heading">Our Core Values</h2>
            <div className="red-divider mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
            {coreValues.map((value) => (
              <Card key={value.title} className="border-0 shadow-card card-hover overflow-hidden group">
                <div className="h-1.5 bg-school-blue group-hover:bg-school-red transition-colors duration-300" />
                <CardContent className="p-6 text-center">
                  <div className="w-14 h-14 rounded-full bg-school-blue/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-school-red/10 transition-colors duration-300">
                    <value.icon className="w-7 h-7 text-school-blue group-hover:text-school-red transition-colors duration-300" />
                  </div>
                  <h3 className="font-serif text-lg font-semibold text-school-blue mb-2">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Principal's Message */}
      <section className="py-20 bg-school-blue">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-10">
              <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
                A Message from Our Principal
              </h2>
              <div className="w-16 h-1 bg-school-red rounded-full mx-auto" />
            </div>
            <Card className="bg-white/10 border border-white/20 rounded-sm shadow-none">
              <CardContent className="p-10">
                <Quote className="w-10 h-10 text-school-red-light mb-6 opacity-80" />
                <p className="text-white/90 leading-relaxed mb-4 text-base italic">
                  "Welcome to Doon's Public School — a place where every student is seen, heard, and valued.
                  Our dedicated faculty and staff work tirelessly to create an environment where curiosity
                  thrives and potential is realized."
                </p>
                <p className="text-white/90 leading-relaxed mb-4 text-base italic">
                  "We believe that education is not just about passing exams — it is about building character,
                  developing resilience, and preparing young people to contribute meaningfully to society.
                  At Doon's, we are committed to walking alongside each student on that journey."
                </p>
                <p className="text-white/90 leading-relaxed mb-8 text-base italic">
                  "I invite you to explore our school, meet our teachers, and discover what makes Doon's
                  Public School a truly special place to learn and grow."
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-school-red/30 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-school-red-light" />
                  </div>
                  <div>
                    <p className="font-serif font-semibold text-white">The Principal</p>
                    <p className="text-white/60 text-sm">Doon's Public School, Patna</p>
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
