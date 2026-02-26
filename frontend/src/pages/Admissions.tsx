import { Link } from '@tanstack/react-router';
import { MessageSquare, MapPin, FileText, Users, Download, ArrowRight, CheckCircle } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';

const steps = [
  {
    number: '01',
    icon: MessageSquare,
    title: 'Say Hello',
    description: 'Fill out our online inquiry form or visit our campus in Kankarbagh. We\'d love to hear from you and answer any questions you may have.',
  },
  {
    number: '02',
    icon: MapPin,
    title: 'Take a Tour',
    description: 'Come see our classrooms, labs, and sports facilities for yourself. Experience the Doon\'s environment firsthand.',
  },
  {
    number: '03',
    icon: FileText,
    title: 'Submit Your Application',
    description: 'Turn in your academic records and completed application forms. Our admissions team will guide you through every step.',
  },
  {
    number: '04',
    icon: Users,
    title: 'Meet & Greet',
    description: 'A brief interaction with our faculty so we can get to know you better! This is a friendly conversation, not a formal exam.',
  },
];

const requirements = [
  'Previous academic records / report cards',
  'Transfer certificate (if applicable)',
  'Date of birth certificate',
  'Passport-size photographs',
  'Completed admission form',
];

export default function Admissions() {
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
            <span className="text-school-amber text-sm font-medium tracking-widest uppercase">Admissions</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            Ready to Join the Doon's Family?
          </h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
            We are always looking for curious, driven, and enthusiastic students to join our campus.
            Whether you are transitioning into high school or transferring from another city, we make
            the admission process as smooth as possible.
          </p>
        </div>
      </section>

      {/* Application Journey */}
      <section className="py-20 bg-school-cream">
        <div className="container mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="section-heading">Your Application Journey</h2>
            <div className="amber-divider mx-auto" />
            <p className="text-muted-foreground max-w-xl mx-auto mt-4">
              We've made the admission process simple and welcoming. Here's what to expect:
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mb-12">
            {steps.map((step) => (
              <Card key={step.number} className="border-0 shadow-card overflow-hidden group card-hover">
                <div className="h-1.5 bg-school-amber" />
                <CardContent className="p-7">
                  <div className="flex items-start justify-between mb-5">
                    <div className="w-12 h-12 rounded-full bg-school-indigo/10 flex items-center justify-center">
                      <step.icon className="w-6 h-6 text-school-indigo" />
                    </div>
                    <span className="font-serif text-4xl font-bold text-school-amber/30 leading-none">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="font-serif text-lg font-bold text-school-indigo mb-3">{step.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{step.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* CTA */}
          <div className="text-center">
            <Button
              size="lg"
              className="bg-school-amber text-school-indigo-dark hover:bg-school-amber-light font-bold px-10 rounded-sm"
              onClick={() => {
                // Trigger download of admission form placeholder
                const link = document.createElement('a');
                link.href = '#';
                link.download = 'Doons_Public_School_Admission_Form.pdf';
                link.click();
              }}
            >
              <Download className="mr-2 w-5 h-5" />
              Download Admission Form
            </Button>
          </div>
        </div>
      </section>

      {/* Requirements */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-heading">Documents Required</h2>
              <div className="amber-divider mx-auto" />
            </div>
            <Card className="border-0 shadow-card overflow-hidden">
              <div className="h-2 bg-school-indigo" />
              <CardContent className="p-8">
                <ul className="space-y-4">
                  {requirements.map((req) => (
                    <li key={req} className="flex items-center gap-3">
                      <CheckCircle className="w-5 h-5 text-school-amber flex-shrink-0" />
                      <span className="text-muted-foreground">{req}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-school-indigo">
        <div className="container mx-auto px-6 text-center">
          <h2 className="font-serif text-3xl md:text-4xl font-bold text-white mb-4">
            Have Questions About Admissions?
          </h2>
          <p className="text-white/75 max-w-xl mx-auto mb-8">
            Our admissions team is here to help. Reach out to us and we'll guide you through the process.
          </p>
          <Link to="/contact">
            <Button
              size="lg"
              className="bg-school-amber text-school-indigo-dark hover:bg-school-amber-light font-bold px-10 rounded-sm"
            >
              Contact Admissions
              <ArrowRight className="ml-2 w-5 h-5" />
            </Button>
          </Link>
        </div>
      </section>
    </div>
  );
}
