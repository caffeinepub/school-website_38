# Specification

## Summary
**Goal:** Populate all pages of the Doon's Public School website with real school content across Homepage, About, Admissions, Academics, Student Life, and Contact pages.

**Planned changes:**
- Update `Home.tsx` with hero headline "Welcome to Doon's Public School!", sub-headline about Patna, two CTA buttons ("Explore Campus Life" and "Apply Today"), an About Us snapshot paragraph, three news/announcement items, and two student testimonial quotes
- Update `Layout.tsx` footer with school address (Chitragupt Nagar, Kankarbagh, Patna - 20), phone/email placeholders, and social media icons (Facebook, Instagram, Twitter/X, YouTube)
- Update `About.tsx` with "Our Story" section, mission statement, four core values (Curiosity, Respect, Integrity, Excellence), and a full Message from the Principal section
- Create new `Admissions.tsx` page with headline "Ready to Join the Doon's Family?", a 4-step application journey, and a "Download Admission Form" CTA button; add `/admissions` route and nav link
- Update `Academics.tsx` with headline "Learn, Challenge, Grow." and three focus area cards: Science & Tech, Humanities & Commerce, and Exam Prep
- Create new `StudentLife.tsx` page with headline "Beyond the Classroom." and four activity cards (Sports, Arts & Culture, Tech & Coding Club, Debate & Model UN); add `/student-life` route and nav link
- Update `Contact.tsx` with headline "We're Here to Help.", address, office hours (Mon–Sat, 8AM–3PM), and a contact form with Name, Current Class, Email, and Your Question fields with a "Send Message" button
- Add "Admissions" and "Student Life" links to the navigation bar in `Layout.tsx`

**User-visible outcome:** Visitors can navigate a fully content-populated school website with real information on every page, two new pages (Admissions and Student Life) accessible from the nav bar, and a complete footer with contact details.
