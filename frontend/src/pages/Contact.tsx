import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const officeHours = [
  { day: 'Monday – Saturday', hours: '8:00 AM – 3:00 PM' },
  { day: 'Sunday', hours: 'Closed' },
];

export default function Contact() {
  return (
    <div>
      {/* Page Header */}
      <section className="bg-school-indigo py-20 relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-school-amber translate-x-1/2 -translate-y-1/2" />
        </div>
        <div className="container mx-auto px-6 relative">
          <div className="flex items-center gap-2 mb-3">
            <div className="w-6 h-0.5 bg-school-amber" />
            <span className="text-school-amber text-sm font-medium tracking-widest uppercase">Contact</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            We're Here to Help.
          </h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
            Have a question about admissions, subject choices, or school events? Drop us a message or visit us on campus!
          </p>
        </div>
      </section>

      {/* Contact Content */}
      <section className="py-20 bg-school-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10">
            {/* Contact Info */}
            <div className="lg:col-span-2 space-y-6">
              <div>
                <h2 className="section-heading text-2xl mb-2">Visit Us</h2>
                <div className="amber-divider" />
              </div>

              <div className="space-y-5">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-school-indigo flex items-center justify-center flex-shrink-0">
                    <MapPin className="w-5 h-5 text-school-amber" />
                  </div>
                  <div>
                    <p className="font-semibold text-school-indigo text-sm mb-0.5">Address</p>
                    <p className="text-muted-foreground text-sm">
                      Doon's Public School, Chitragupt Nagar, Kankarbagh, Patna - 20
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-school-indigo flex items-center justify-center flex-shrink-0">
                    <Phone className="w-5 h-5 text-school-amber" />
                  </div>
                  <div>
                    <p className="font-semibold text-school-indigo text-sm mb-0.5">Phone</p>
                    <p className="text-muted-foreground text-sm">[Insert Phone Number]</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-school-indigo flex items-center justify-center flex-shrink-0">
                    <Mail className="w-5 h-5 text-school-amber" />
                  </div>
                  <div>
                    <p className="font-semibold text-school-indigo text-sm mb-0.5">Email</p>
                    <p className="text-muted-foreground text-sm">[Insert Email Address]</p>
                  </div>
                </div>
              </div>

              {/* Office Hours */}
              <div className="bg-white rounded-sm shadow-card p-6 mt-6">
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-school-amber" />
                  <h3 className="font-serif font-semibold text-school-indigo">Office Hours</h3>
                </div>
                <div className="space-y-2">
                  {officeHours.map((oh) => (
                    <div key={oh.day} className="flex justify-between text-sm">
                      <span className="text-muted-foreground">{oh.day}</span>
                      <span className="font-medium text-school-indigo">{oh.hours}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-school-indigo/10 rounded-sm overflow-hidden h-48 flex items-center justify-center border border-school-indigo/20">
                <div className="text-center text-school-indigo">
                  <MapPin className="w-8 h-8 mx-auto mb-2 text-school-indigo/50" />
                  <p className="text-sm font-medium">Chitragupt Nagar, Kankarbagh</p>
                  <p className="text-xs text-muted-foreground mt-1">Patna - 20</p>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-3">
              <div className="mb-6">
                <h2 className="section-heading text-2xl mb-2">Send Us a Message</h2>
                <div className="amber-divider" />
                <p className="text-muted-foreground text-sm mt-3">
                  Fill out the form below and a member of our team will get back to you shortly.
                </p>
              </div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
