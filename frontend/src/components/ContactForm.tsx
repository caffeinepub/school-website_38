import { useState } from 'react';
import { CheckCircle, Loader2, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { useSubmitContactMessage } from '@/hooks/useQueries';

interface FormState {
  name: string;
  currentClass: string;
  email: string;
  question: string;
}

interface FormErrors {
  name?: string;
  currentClass?: string;
  email?: string;
  question?: string;
}

function validate(form: FormState): FormErrors {
  const errors: FormErrors = {};
  if (!form.name.trim()) errors.name = 'Name is required.';
  if (!form.currentClass.trim()) errors.currentClass = 'Current class is required.';
  if (!form.email.trim()) {
    errors.email = 'Email is required.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
    errors.email = 'Please enter a valid email address.';
  }
  if (!form.question.trim()) {
    errors.question = 'Your question is required.';
  } else if (form.question.trim().length < 10) {
    errors.question = 'Please provide more detail (at least 10 characters).';
  }
  return errors;
}

export default function ContactForm() {
  const [form, setForm] = useState<FormState>({ name: '', currentClass: '', email: '', question: '' });
  const [errors, setErrors] = useState<FormErrors>({});
  const [submitted, setSubmitted] = useState(false);

  const { mutate: submitMessage, isPending } = useSubmitContactMessage();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormErrors]) {
      setErrors((prev) => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }
    // Map form fields to backend: subject = currentClass, message = question
    submitMessage(
      {
        name: form.name,
        email: form.email,
        subject: `Class ${form.currentClass}`,
        message: form.question,
      },
      {
        onSuccess: () => {
          setSubmitted(true);
          setForm({ name: '', currentClass: '', email: '', question: '' });
          setErrors({});
        },
        onError: () => {
          setErrors({ question: 'Failed to send message. Please try again.' });
        },
      }
    );
  };

  if (submitted) {
    return (
      <div className="bg-white rounded-sm shadow-card p-10 text-center">
        <div className="w-16 h-16 rounded-full bg-school-indigo/10 flex items-center justify-center mx-auto mb-5">
          <CheckCircle className="w-8 h-8 text-school-indigo" />
        </div>
        <h3 className="font-serif text-2xl font-bold text-school-indigo mb-3">
          Message Sent!
        </h3>
        <p className="text-muted-foreground mb-6 max-w-sm mx-auto">
          Thank you for reaching out. A member of our team will get back to you shortly.
        </p>
        <Button
          onClick={() => setSubmitted(false)}
          className="bg-school-indigo text-white hover:bg-school-indigo/90 rounded-sm font-semibold"
        >
          Send Another Message
        </Button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-sm shadow-card p-8 space-y-5">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
        <div className="space-y-1.5">
          <Label htmlFor="name" className="text-school-indigo font-medium text-sm">
            Name <span className="text-destructive">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            value={form.name}
            onChange={handleChange}
            placeholder="Your full name"
            className={`rounded-sm ${errors.name ? 'border-destructive focus-visible:ring-destructive' : 'border-border'}`}
          />
          {errors.name && <p className="text-destructive text-xs">{errors.name}</p>}
        </div>
        <div className="space-y-1.5">
          <Label htmlFor="currentClass" className="text-school-indigo font-medium text-sm">
            Current Class <span className="text-destructive">*</span>
          </Label>
          <Input
            id="currentClass"
            name="currentClass"
            value={form.currentClass}
            onChange={handleChange}
            placeholder="e.g. Class 9, Class 11"
            className={`rounded-sm ${errors.currentClass ? 'border-destructive focus-visible:ring-destructive' : 'border-border'}`}
          />
          {errors.currentClass && <p className="text-destructive text-xs">{errors.currentClass}</p>}
        </div>
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="email" className="text-school-indigo font-medium text-sm">
          Email <span className="text-destructive">*</span>
        </Label>
        <Input
          id="email"
          name="email"
          type="email"
          value={form.email}
          onChange={handleChange}
          placeholder="your@email.com"
          className={`rounded-sm ${errors.email ? 'border-destructive focus-visible:ring-destructive' : 'border-border'}`}
        />
        {errors.email && <p className="text-destructive text-xs">{errors.email}</p>}
      </div>

      <div className="space-y-1.5">
        <Label htmlFor="question" className="text-school-indigo font-medium text-sm">
          Your Question <span className="text-destructive">*</span>
        </Label>
        <Textarea
          id="question"
          name="question"
          value={form.question}
          onChange={handleChange}
          placeholder="What would you like to know?"
          rows={6}
          className={`rounded-sm resize-none ${errors.question ? 'border-destructive focus-visible:ring-destructive' : 'border-border'}`}
        />
        {errors.question && <p className="text-destructive text-xs">{errors.question}</p>}
      </div>

      <Button
        type="submit"
        disabled={isPending}
        className="w-full bg-school-indigo text-white hover:bg-school-indigo/90 rounded-sm font-semibold py-5"
      >
        {isPending ? (
          <>
            <Loader2 className="mr-2 w-4 h-4 animate-spin" />
            Sending...
          </>
        ) : (
          <>
            <Send className="mr-2 w-4 h-4" />
            Send Message
          </>
        )}
      </Button>
    </form>
  );
}
