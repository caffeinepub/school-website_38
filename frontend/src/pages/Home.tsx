import { Link } from '@tanstack/react-router';
import { ArrowRight, BookOpen, Users, Award, Star, Bell, Trophy, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useGetAllNews } from '@/hooks/useQueries';
import NewsCard from '@/components/NewsCard';

const stats = [
  { value: '1,000+', label: 'Students Enrolled' },
  { value: '60+', label: 'Expert Faculty' },
  { value: '98%', label: 'Board Exam Pass Rate' },
  { value: '25+', label: 'Years of Excellence' },
];

const features = [
  {
    icon: BookOpen,
    title: 'Academic Excellence',
    description: 'Rigorous curriculum designed to give students a strong foundation for board exams and beyond.',
  },
  {
    icon: Users,
    title: 'Vibrant Community',
    description: 'A diverse, inclusive community where every student is valued, supported, and encouraged to thrive.',
  },
  {
    icon: Award,
    title: 'Award-Winning Programs',
    description: 'Recognized programs in Science, Commerce, Humanities, sports, and extracurricular activities.',
  },
  {
    icon: Star,
    title: 'Holistic Development',
    description: 'Beyond academics — we nurture character, leadership, creativity, and lifelong learning skills.',
  },
];

const announcements = [
  {
    icon: Calendar,
    type: 'Upcoming Event',
    text: 'Annual Sports Meet Registration is Open!',
    color: 'text-school-amber',
    bg: 'bg-school-amber/10',
  },
  {
    icon: Bell,
    type: 'Notice',
    text: 'Term 1 Examination Schedules Released.',
    color: 'text-school-indigo',
    bg: 'bg-school-indigo/10',
  },
  {
    icon: Trophy,
    type: 'Highlight',
    text: 'Congratulations to the Debate Team for winning the City Championship!',
    color: 'text-emerald-700',
    bg: 'bg-emerald-50',
  },
];

const testimonials = [
  {
    quote: "Doon's gave me the confidence to lead. The teachers here don't just teach; they actually listen.",
    name: 'Rahul K.',
    role: 'Class 12',
  },
  {
    quote: "From the science labs to the football field, there's always something exciting happening here. I've found my best friends at this school.",
    name: 'Sneha P.',
    role: 'Class 10',
  },
];

export default function Home() {
  const { data: newsItems, isLoading: newsLoading } = useGetAllNews();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0">
          <img
            src="/assets/generated/hero-banner.dim_1440x600.png"
            alt="Doon's Public School Campus"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-school-indigo-dark/70" />
        </div>
        <div className="container mx-auto px-6 relative z-10 py-24">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-0.5 bg-school-amber" />
              <span className="text-school-amber text-sm font-medium tracking-widest uppercase">
                Kankarbagh, Patna
              </span>
            </div>
            <h1 className="font-serif text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              Welcome to Doon's Public School!
            </h1>
            <p className="text-white/85 text-lg md:text-xl leading-relaxed mb-8 max-w-2xl">
              Discover your passion, build your skills, and shape your future right here in the heart of Patna.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/student-life">
                <Button
                  size="lg"
                  className="bg-school-amber text-school-indigo-dark hover:bg-school-amber-light font-bold px-8 rounded-sm"
                >
                  Explore Campus Life
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
              </Link>
              <Link to="/admissions">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white text-white hover:bg-white hover:text-school-indigo-dark font-bold px-8 rounded-sm"
                >
                  Apply Today
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-school-amber py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <div className="font-serif text-3xl md:text-4xl font-bold text-school-indigo-dark mb-1">
                  {stat.value}
                </div>
                <div className="text-school-indigo-dark/80 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About Us Snapshot */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-0.5 bg-school-amber" />
                <span className="text-school-amber text-sm font-medium tracking-widest uppercase">About Us</span>
              </div>
              <h2 className="section-heading mb-4">More Than Just Textbooks</h2>
              <div className="amber-divider" />
              <p className="text-muted-foreground leading-relaxed mt-5 mb-6 text-base">
                At Doon's Public School, we believe high school is more than just textbooks. We are a community
                dedicated to helping you discover what you're good at, supporting you through challenges, and
                preparing you for whatever comes next.
              </p>
              <div className="grid grid-cols-2 gap-4 mb-8">
                {features.map((f) => (
                  <div key={f.title} className="flex items-start gap-3">
                    <div className="w-9 h-9 rounded-full bg-school-indigo/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <f.icon className="w-4 h-4 text-school-indigo" />
                    </div>
                    <div>
                      <h4 className="font-semibold text-school-indigo text-sm mb-0.5">{f.title}</h4>
                      <p className="text-muted-foreground text-xs leading-relaxed">{f.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              <Link to="/about">
                <Button className="bg-school-indigo text-white hover:bg-school-indigo/90 rounded-sm font-semibold">
                  Learn More About Us
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
              </Link>
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

      {/* News & Announcements */}
      <section className="py-20 bg-school-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="section-heading">News & Announcements</h2>
            <div className="amber-divider mx-auto" />
            <p className="text-muted-foreground max-w-xl mx-auto mt-4">
              Stay up to date with the latest happenings at Doon's Public School.
            </p>
          </div>

          {/* Placeholder Announcements */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-10">
            {announcements.map((a) => (
              <div key={a.type} className={`${a.bg} rounded-sm p-5 border border-transparent`}>
                <div className="flex items-center gap-2 mb-2">
                  <a.icon className={`w-4 h-4 ${a.color}`} />
                  <span className={`text-xs font-bold uppercase tracking-wider ${a.color}`}>{a.type}</span>
                </div>
                <p className="text-school-indigo-dark font-medium text-sm leading-relaxed">{a.text}</p>
              </div>
            ))}
          </div>

          {/* Latest News from Backend */}
          {newsLoading ? (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-white rounded-sm shadow-card h-64 animate-pulse" />
              ))}
            </div>
          ) : newsItems && newsItems.length > 0 ? (
            <>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {newsItems.slice(0, 3).map((item) => (
                  <NewsCard key={String(item.id)} item={item} />
                ))}
              </div>
              <div className="text-center mt-8">
                <Link to="/news">
                  <Button variant="outline" className="border-school-indigo text-school-indigo hover:bg-school-indigo hover:text-white rounded-sm font-semibold">
                    View All News
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </Link>
              </div>
            </>
          ) : null}
        </div>
      </section>

      {/* Student Testimonials */}
      <section className="py-20 bg-school-indigo">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
              What Our Students Say
            </h2>
            <div className="w-16 h-1 bg-school-amber rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            {testimonials.map((t) => (
              <Card key={t.name} className="bg-white/10 border border-white/20 rounded-sm shadow-none">
                <CardContent className="p-8">
                  <div className="text-school-amber text-4xl font-serif leading-none mb-4">"</div>
                  <p className="text-white/90 leading-relaxed mb-6 italic">
                    {t.quote}
                  </p>
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-full bg-school-amber/30 flex items-center justify-center">
                      <span className="text-school-amber font-bold text-sm">{t.name.charAt(0)}</span>
                    </div>
                    <div>
                      <p className="font-semibold text-white text-sm">{t.name}</p>
                      <p className="text-white/60 text-xs">{t.role}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 bg-school-amber">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-school-indigo-dark mb-4">
            Ready to Join the Doon's Family?
          </h2>
          <p className="text-school-indigo-dark/80 max-w-xl mx-auto mb-8 text-base">
            Take the first step towards an exceptional education. Apply today and become part of our vibrant community.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link to="/admissions">
              <Button
                size="lg"
                className="bg-school-indigo text-white hover:bg-school-indigo/90 font-bold px-10 rounded-sm"
              >
                Apply Today
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                size="lg"
                variant="outline"
                className="border-school-indigo-dark text-school-indigo-dark hover:bg-school-indigo-dark hover:text-white font-bold px-10 rounded-sm"
              >
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
