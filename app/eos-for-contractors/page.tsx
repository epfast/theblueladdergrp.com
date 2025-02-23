import { CheckCircle } from 'lucide-react';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';

import { PageHero } from '@/components/page-hero';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export const metadata: Metadata = {
  title: 'EOS for Construction Businesses | Optimize & Grow',
  description:
    'Transform your construction business with EOS. Streamline processes, align your team, and achieve long-term success with expert implementation.',
};

export default function EOSForContractors() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="EOS Solutions for General Contractors"
        description="Transform your construction business with the Entrepreneurial Operating System"
        image="/eos-hero.jpg"
        imageAlt="Construction site"
        ctaButton={{
          text: 'Schedule a Consultation',
          href: '/contact',
        }}
      />

      {/* What is EOS? */}
      <section className="container py-20">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="space-y-6">
            <h2 className="architectural-title text-3xl font-bold">What is EOS?</h2>
            <p className="text-lg text-muted-foreground">
              The Entrepreneurial Operating System (EOS) is a complete set of simple concepts and
              practical tools that has helped thousands of entrepreneurs get what they want from
              their businesses.
            </p>
            <ul className="space-y-2">
              {[
                'Align your team with a shared vision and clear goals',
                'Ensure the right people are in the right seats for success',
                'Use data-driven metrics to track progress and performance',
                'Solve issues permanently through a structured process',
                'Document and follow core processes consistently',
                'Gain traction with disciplined execution and accountability',
              ].map((point, index) => (
                <li key={index} className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="relative h-[400px]">
            <Image
              src="/what-is-eos.png"
              alt="EOS Components"
              fill
              className="rounded-lg object-contain"
            />
          </div>
        </div>
      </section>

      {/* EOS Services */}
      <section className="bg-muted py-20" id="eos">
        <div className="container">
          <div className="space-y-12">
            <h2 className="text-center text-3xl font-bold tracking-tighter">
              Streamline and Scale Your Construction Business
            </h2>
            <div className="grid gap-8 md:grid-cols-2">
              {[
                {
                  title: 'Process Optimization',
                  description:
                    'We analyze your current workflows and streamline operations, reducing inefficiencies and freeing your team to focus on critical tasks.',
                },
                {
                  title: 'Team Building and Alignment',
                  description:
                    'With EOS principles, we align your team to work toward shared goals, ensuring the right people are in the right roles.',
                },
                {
                  title: 'Cultural Transformation',
                  description:
                    'Build a company culture of clarity, accountability, and excitement. Let your team thrive in an environment designed for success.',
                },
                {
                  title: 'Long-Term Strategy Implementation',
                  description:
                    'Partner with us to define a vision and implement scalable strategies for sustainable growth.',
                },
              ].map((service, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p>{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* EOS for Construction 
      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="text-3xl font-bold architectural-title text-center mb-12">
            How EOS Benefits General Contractors
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: "Improved Project Management",
                description: "Streamline your processes and ensure every project is completed on time and within budget."
              },
              {
                title: "Enhanced Team Communication",
                description: "Break down silos between office and field teams, fostering better collaboration."
              },
              {
                title: "Clear Growth Strategy",
                description: "Define and achieve your long-term vision while managing day-to-day operations effectively."
              },
              {
                title: "Increased Profitability",
                description: "Identify and focus on your most profitable projects and clients."
              },
              {
                title: "Better Risk Management",
                description: "Anticipate and mitigate potential issues before they become major problems."
              },
              {
                title: "Scalable Systems",
                description: "Build repeatable processes that allow your business to grow without chaos."
              }
            ].map((benefit, index) => (
              <Card key={index}>
                <CardHeader>
                  <CardTitle>{benefit.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p>{benefit.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* Our EOS Implementation Process
      <section className="container py-20">
        <h2 className="text-3xl font-bold architectural-title text-center mb-12">
          Our EOS Implementation Process
        </h2>
        <div className="space-y-12">
          {[
            {
              title: "1. Focus Day™",
              description: "A full-day session to learn and implement the foundational tools of EOS.",
              points: [
                "Introduce key EOS tools",
                "Establish your company's core values and focus",
                "Create your first 90-day plan"
              ]
            },
            {
              title: "2. Vision Building™ Days",
              description: "Two full-day sessions to align your leadership team and create a clear vision for your company.",
              points: [
                "Define your 10-Year Target™",
                "Create your 3-Year Picture™",
                "Set your 1-Year Plan"
              ]
            },
            {
              title: "3. Quarterly Pulsing™",
              description: "Regular sessions to keep your team on track and solve issues.",
              points: [
                "Review and update your vision",
                "Set priorities for the next 90 days",
                "Solve key issues holding your company back"
              ]
            },
            {
              title: "4. Annual Planning",
              description: "A two-day session to reflect on the past year and plan for the next.",
              points: [
                "Celebrate wins and learn from challenges",
                "Update your 3-Year Picture™ and 1-Year Plan",
                "Set company and individual goals for the year ahead"
              ]
            }
          ].map((step, index) => (
            <div key={index} className="grid md:grid-cols-2 gap-8 items-start">
              <div>
                <h3 className="text-2xl font-bold mb-4">{step.title}</h3>
                <p className="text-lg text-muted-foreground mb-4">{step.description}</p>
                <ul className="space-y-2">
                  {step.points.map((point, idx) => (
                    <li key={idx} className="flex items-center gap-2">
                      <ArrowRight className="h-4 w-4 text-primary" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative h-[300px]">
                <Image
                  src={`https://placehold.co/600x400?text=${encodeURIComponent(step.title)}`}
                  alt={`EOS ${step.title} illustration`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            </div>
          ))}
        </div>
      </section> */}

      {/* Testimonials 
      <section className="bg-muted text-secondary-foreground py-20">
        <div className="container">
          <h2 className="text-3xl font-bold architectural-title text-center mb-12">
            What General Contractors Say About EOS
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                quote: "Implementing EOS has transformed our business. We're more organized, more focused, and more profitable than ever before.",
                author: "John Smith",
                role: "CEO, Smith Construction"
              },
              {
                quote: "EOS gave us the tools to scale our operations while maintaining quality. It's been a game-changer for our team.",
                author: "Sarah Johnson",
                role: "Operations Manager, Johnson Builders"
              },
              {
                quote: "The clarity and accountability EOS brings to our organization has improved every aspect of our business.",
                author: "Michael Chen",
                role: "Founder, Chen & Associates Construction"
              },
              {
                quote: "EOS helped us identify and solve long-standing issues in our company. Our team is now aligned and moving in the same direction.",
                author: "Emily Rodriguez",
                role: "Project Director, Rodriguez Construction Group"
              }
            ].map((testimonial, index) => (
              <Card key={index} className="bg-background text-foreground">
                <CardContent className="p-6 space-y-4">
                  <p className="italic text-lg">{testimonial.quote}</p>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section> */}

      {/* FAQs 
      <section className="container py-20">
        <h2 className="text-3xl font-bold architectural-title text-center mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              question: "How long does it take to implement EOS?",
              answer: "Typically, it takes about two years to fully implement EOS in your organization. However, many companies start seeing significant improvements within the first few months."
            },
            {
              question: "Is EOS only for large construction companies?",
              answer: "No, EOS can benefit construction companies of all sizes. It's particularly effective for businesses with 10 to 250 employees, but the principles can be applied to smaller and larger organizations as well."
            },
            {
              question: "How is EOS different from other business systems?",
              answer: "EOS is a comprehensive system that addresses all aspects of your business. It's simple, practical, and designed specifically for entrepreneurs and their leadership teams."
            },
            {
              question: "Do we need to hire a full-time EOS implementer?",
              answer: "No, you don't need to hire a full-time implementer. As a certified EOS Implementer, I work with your team on a regular basis to guide you through the implementation process and ensure you're getting the most out of the system."
            },
            {
              question: "Will EOS work with our existing systems and processes?",
              answer: "Yes, EOS is designed to work alongside your existing systems. It provides a framework for organizing and optimizing your processes, rather than replacing them entirely."
            },
            {
              question: "How does EOS help with project management in construction?",
              answer: "EOS helps improve project management by clarifying roles and responsibilities, establishing clear communication channels, and providing tools for setting and achieving both short-term and long-term goals."
            }
          ].map((faq, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle>{faq.question}</CardTitle>
              </CardHeader>
              <CardContent>
                <p>{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section> */}

      {/* CTA */}
      <section className="bg-primary py-20 text-primary-foreground" id="contact">
        <div className="container space-y-8 text-center">
          <h2 className="architectural-title text-3xl font-bold">
            Ready to Transform Your Construction Business?
          </h2>
          <p className="mx-auto max-w-[600px] text-xl">
            Let&apos;s discuss how EOS can help you achieve your goals and take your company to the
            next level.
          </p>
          <Button size="lg" variant="secondary" asChild>
            <Link href="/contact">Schedule Your Free Consultation</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
