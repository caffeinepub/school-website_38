import { FlaskConical, Palette, BookOpen, ChevronRight } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import DepartmentCard from '@/components/DepartmentCard';

const departments = [
  {
    icon: FlaskConical,
    title: 'Science & Tech',
    description: 'Fully equipped physics, chemistry, biology, and computer labs for hands-on learning and experimentation.',
    courses: ['Physics', 'Chemistry', 'Biology', 'Computer Science', 'Mathematics', 'Environmental Science'],
    color: 'bg-emerald-50 border-emerald-200',
    iconColor: 'text-emerald-700',
    iconBg: 'bg-emerald-100',
  },
  {
    icon: Palette,
    title: 'Humanities & Commerce',
    description: 'Building critical thinkers and future entrepreneurs through comprehensive arts and commerce programs.',
    courses: ['History', 'Economics', 'Business Studies', 'Accountancy', 'Political Science', 'Sociology'],
    color: 'bg-school-red/5 border-school-red/20',
    iconColor: 'text-school-red',
    iconBg: 'bg-school-red/10',
  },
  {
    icon: BookOpen,
    title: 'Exam Prep',
    description: 'Special guidance and doubt-clearing sessions to help students ace board exams with confidence.',
    courses: ['Board Exam Strategy', 'Doubt-Clearing Sessions', 'Mock Tests', 'Revision Classes', 'Study Skills', 'Time Management'],
    color: 'bg-school-blue/5 border-school-blue/20',
    iconColor: 'text-school-blue',
    iconBg: 'bg-school-blue/10',
  },
];

const highlights = [
  { label: 'Focus Areas', value: '3' },
  { label: 'Subjects Offered', value: '20+' },
  { label: 'Lab Facilities', value: '5' },
  { label: 'Board Exam Pass Rate', value: '98%' },
];

export default function Academics() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-school-blue py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-school-red translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-0.5 bg-school-red" />
            <span className="text-school-red-light text-sm font-medium tracking-widest uppercase">Academics</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Learn, Challenge, Grow.
          </h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
            We know that board exams and academics are crucial, which is why our curriculum is designed to give
            you a strong foundation. But we also believe in making learning interactive.
          </p>
        </div>
      </section>

      {/* Highlights */}
      <section className="bg-school-red py-10">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {highlights.map((h) => (
              <div key={h.label}>
                <div className="font-serif text-3xl md:text-4xl font-bold text-white mb-1">
                  {h.value}
                </div>
                <div className="text-white/80 text-sm font-medium">{h.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* About the Curriculum */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="section-heading mb-4">Interactive, Real-World Learning</h2>
            <div className="red-divider mx-auto" />
            <p className="text-muted-foreground leading-relaxed mt-6 mb-4 text-base">
              You won't just be memorizing facts; you'll be running experiments in the lab, engaging in classroom
              debates, and working on projects that solve real-world problems.
            </p>
            <p className="text-muted-foreground leading-relaxed text-base">
              Our teachers are mentors who guide students to think critically, question boldly, and act with purpose.
              We combine rigorous academic standards with project-based learning and real-world application.
            </p>
          </div>
        </div>
      </section>

      {/* Focus Areas */}
      <section className="py-20 bg-school-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="section-heading">Our Focus Areas</h2>
            <div className="red-divider mx-auto" />
            <p className="text-muted-foreground max-w-2xl mx-auto mt-4">
              Each focus area is led by expert educators committed to delivering an engaging,
              rigorous, and relevant learning experience.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {departments.map((dept) => (
              <DepartmentCard key={dept.title} {...dept} />
            ))}
          </div>
        </div>
      </section>

      {/* Academic Philosophy */}
      <section className="py-20 bg-school-blue">
        <div className="container mx-auto px-6">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-3">
              Our Academic Approach
            </h2>
            <div className="w-16 h-1 bg-school-red rounded-full mx-auto" />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            {[
              { title: 'Hands-On Labs', desc: 'Fully equipped physics, chemistry, biology, and computer labs where students learn by doing.' },
              { title: 'Classroom Debates', desc: 'Engaging discussions and debates that sharpen critical thinking and communication skills.' },
              { title: 'Board Exam Guidance', desc: 'Dedicated doubt-clearing sessions and mock tests to ensure every student is exam-ready.' },
            ].map((prog) => (
              <div key={prog.title} className="bg-white/10 border border-white/20 rounded-sm p-6 card-hover">
                <ChevronRight className="w-5 h-5 text-school-red-light mb-3" />
                <h3 className="font-serif text-lg font-semibold text-white mb-2">{prog.title}</h3>
                <p className="text-white/75 text-sm leading-relaxed">{prog.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
