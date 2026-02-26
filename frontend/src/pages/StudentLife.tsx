import { Link } from '@tanstack/react-router';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const activities = [
  {
    emoji: '⚽',
    title: 'Sports',
    description: 'Join the cricket, football, or basketball teams and represent Doon\'s at district and state levels. Build teamwork, discipline, and a competitive spirit.',
    tags: ['Cricket', 'Football', 'Basketball', 'Athletics'],
    color: 'bg-emerald-50 border-emerald-200',
    tagColor: 'bg-emerald-100 text-emerald-700',
  },
  {
    emoji: '🎨',
    title: 'Arts & Culture',
    description: 'Participate in our annual fest, join the drama club, or showcase your artistic skills. Express yourself and discover your creative potential.',
    tags: ['Annual Fest', 'Drama Club', 'Visual Arts', 'Music'],
    color: 'bg-amber-50 border-amber-200',
    tagColor: 'bg-amber-100 text-amber-700',
  },
  {
    emoji: '💻',
    title: 'Tech & Coding Club',
    description: 'Learn to build apps, websites, and dive into the world of robotics. Collaborate with fellow tech enthusiasts and bring your ideas to life.',
    tags: ['App Development', 'Web Design', 'Robotics', 'AI & ML'],
    color: 'bg-blue-50 border-blue-200',
    tagColor: 'bg-blue-100 text-blue-700',
  },
  {
    emoji: '🗣️',
    title: 'Debate & Model UN',
    description: 'Find your voice and learn how to argue your points effectively. Develop public speaking skills and master the art of argumentation.',
    tags: ['Debate', 'Model UN', 'Public Speaking', 'Leadership'],
    color: 'bg-purple-50 border-purple-200',
    tagColor: 'bg-purple-100 text-purple-700',
  },
];

export default function StudentLife() {
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
            <span className="text-school-amber text-sm font-medium tracking-widest uppercase">Student Life</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Beyond the Classroom.
          </h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
            Your school life should be unforgettable. At Doon's Public School, your talents outside of
            academics matter just as much as your grades.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading mb-4">Get Involved</h2>
            <div className="amber-divider mx-auto" />
            <p className="text-muted-foreground leading-relaxed mt-6 text-base">
              From the cricket field to the debate stage, from the art room to the coding lab — there's a place
              for every passion at Doon's Public School. Explore our clubs, teams, and activities and find where
              you belong.
            </p>
          </div>
        </div>
      </section>

      {/* Activities Grid */}
      <section className="py-10 pb-20 bg-school-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {activities.map((activity) => (
              <Card
                key={activity.title}
                className={`border ${activity.color} shadow-card card-hover overflow-hidden`}
              >
                <CardContent className="p-8">
                  <div className="text-5xl mb-5">{activity.emoji}</div>
                  <h3 className="font-serif text-2xl font-bold text-school-indigo mb-3">{activity.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-5">{activity.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {activity.tags.map((tag) => (
                      <span
                        key={tag}
                        className={`text-xs font-medium px-3 py-1 rounded-full ${activity.tagColor}`}
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 bg-school-amber">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-school-indigo-dark mb-4">
            Ready to Find Your Passion?
          </h2>
          <p className="text-school-indigo-dark/80 max-w-xl mx-auto mb-8">
            Join Doon's Public School and discover a world of opportunities waiting for you — both inside and outside the classroom.
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
                Ask Us Anything
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
