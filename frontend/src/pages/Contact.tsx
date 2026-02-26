import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import ContactForm from '@/components/ContactForm';

const contactDetails = [
  {
    icon: Phone,
    label: 'Phone',
    value: '8541886552',
    sub: 'Monday – Saturday, 8AM – 3PM',
  },
  {
    icon: Mail,
    label: 'Email',
    value: '[Insert Email Address]',
    sub: 'We respond within 1–2 business days',
  },
  {
    icon: MapPin,
    label: 'Address',
    value: 'Chitragupt Nagar, Kankarbagh',
    sub: 'Patna - 20, Bihar',
  },
  {
    icon: Clock,
    label: 'Office Hours',
    value: 'Monday – Saturday',
    sub: '8:00 AM – 3:00 PM',
  },
];

export default function Contact() {
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
            <span className="text-school-red-light text-sm font-medium tracking-widest uppercase">Get in Touch</span>
          </div>
          <h1 className="font-serif text-4xl md:text-5xl font-bold text-white mb-4">
            We're Here to Help.
          </h1>
          <p className="text-white/80 max-w-2xl text-lg leading-relaxed">
            Have a question about admissions, academics, or school life? Reach out to us — we'd love to hear from you.
          </p>
        </div>
      </section>

      {/* Contact Info + Form */}
      <section className="py-20 bg-school-cream">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-14">
            {/* Info */}
            <div>
              <div className="flex items-center gap-2 mb-3">
                <div className="w-6 h-0.5 bg-school-red" />
                <span className="text-school-red text-sm font-medium tracking-widest uppercase">Contact Info</span>
              </div>
              <h2 className="section-heading mb-4">Reach Out to Us</h2>
              <div className="red-divider" />
              <p className="text-muted-foreground leading-relaxed mt-5 mb-8">
                Whether you're a prospective student, a parent, or a community member, we're always happy to connect.
              </p>
              <div className="space-y-5">
                {contactDetails.map((detail) => (
                  <div key={detail.label} className="flex items-start gap-4">
                    <div className="w-11 h-11 rounded-full bg-school-blue/10 flex items-center justify-center flex-shrink-0">
                      <detail.icon className="w-5 h-5 text-school-blue" />
                    </div>
                    <div>
                      <p className="text-xs font-semibold text-school-red uppercase tracking-wider mb-0.5">
                        {detail.label}
                      </p>
                      <p className="font-medium text-school-blue-dark">{detail.value}</p>
                      <p className="text-muted-foreground text-sm">{detail.sub}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Form */}
            <div>
              <ContactForm />
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
