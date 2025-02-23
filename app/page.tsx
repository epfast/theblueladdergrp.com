import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle, ArrowRight } from 'lucide-react';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'CALGreen Expert & EOS Solutions | The Blue Ladder Group',
  description:
    'Expert CALGreen inspections and EOS solutions for construction businesses. Streamline operations and achieve sustainability with The Blue Ladder Group.',
};

const testimonials = [
  {
    quote:
      "Faith's quiet brilliance, her sense of calm and helpful nature made an immediate difference when she joined our team. Her knowledge base is deep in best practices for both residential construction and accounting. Her skills in management quickly took us to the next level. Plus, she's funny and a fabulous listener.",
    author: 'Ginny Schaefer',
    role: 'Estimator',
  },
  {
    quote:
      "As one of the founding owners of MCB, a multimillion-dollar general building corporation, I want to give a huge shout-out to Faith for the invaluable construction, business knowledge and expertise she brought to help our company grow. MCB was built on the EOS operating system, and we were fully committed to its complete implementation. Faith served as our EOS Integrator, leading both our weekly Leadership meetings as well as our Production L-10's. What truly makes Faith an all-star is her ability to strike the perfect balance between joyful enthusiasm and the meticulous task management and accountability required in a busy construction company. She brings energy and inspiration through the many challenges of day-to-day operations. It takes a serious driver to ensure that every issue is addressed, and that is what Faith is, a driver. She is an incredible asset to any team!",
    author: 'Tom Collins',
    role: 'General Contractor',
  },
  {
    quote:
      'Faith is the consummate EOS Integrator: strategic thinker, financial wizard, organized, able to keep a pulse on all aspects of the business. Hiring her as a fractional Integrator can make a huge impact on how you run your business. Make the call!',
    author: 'Emily Ransone',
    role: 'Certified EOS Implementer® at EOS Worldwide',
  },
  {
    quote:
      "I appreciate Faith's forward-thinking and matter-of-fact approach when evaluating construction projects and executive decisions. Her energy and insight are refreshing and come from her extensive background working through complicated code issues throughout her career. She is a futuristic thinker, as well as a strong supporter of the CALGreen community and industry!",
    author: 'Larry Cochran',
    role: 'Project Manager',
  },
];

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section
        className="relative flex min-h-[800px] items-center"
        style={{ height: 'calc(100vh - 110px)' }}
      >
        <Image
          src="/living-room-vertical-green-wall.jpeg"
          alt="Sustainable building project"
          fill
          className="object-cover object-bottom"
          priority
        />
        <div className="absolute inset-0 bg-opacity-10 bg-gradient-to-r from-green-900/60 to-green-800/60 bg-clip-padding backdrop-blur-sm backdrop-filter" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl space-y-8 text-center text-white">
            <h1 className="architectural-title text-4xl font-light md:text-6xl lg:text-7xl">
              Elevating Construction Through Sustainability
            </h1>
            <p className="text-xl font-light md:text-2xl">
              Expert CALGreen Inspections and Plans Examiners, EOS Integrator Services, and
              Sustainable Building Practices.
            </p>
            <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
              <Button size="lg" asChild>
                <Link href="mailto:Faith@TheBlueLadderGrp.com">Get Started Today</Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/services">Explore Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="relative -mt-20 pb-20">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-3">
            {[
              {
                title: 'CALGreen Expert',
                description:
                  'Certified ICC CALGreen Inspector/Plans Examiner with over 20 years of experience in Commercial and Residential Construction.',
                image: '/calgreen.png',
              },
              {
                title: 'Sustainable Building',
                description:
                  'Expert guidance in green building practices as a CGBP, Certified Green Building Professional since 2008.',
                image: '/faith.jpg',
              },
              {
                title: 'Entrepreneurial Operating System (EOS)',
                description:
                  'Transform your construction business with proven operational excellence strategies',
                image: '/eos.png',
              },
            ].map((feature, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-48">
                  <Image
                    src={feature.image}
                    alt={feature.title}
                    fill
                    className="object-fit object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <h3 className="mb-2 text-xl font-bold">{feature.title}</h3>
                  <p className="text-md text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="bg-muted py-20">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="relative h-[400px] lg:h-[700px]">
              <Image
                src="/faith-4.jpg"
                alt="Faith Mackarness"
                fill
                className="rounded-lg object-cover object-bottom"
              />
            </div>
            <div className="space-y-6">
              <h2 className="architectural-title text-3xl font-bold md:text-4xl">
                Meet Your Trusted CALGreen and EOS Partner
              </h2>
              <p className="text-lg text-muted-foreground">
                Faith Mackarness brings over 20 years of construction expertise, blending technical
                knowledge with a passion for sustainable building and operational efficiency.
              </p>
              <div className="grid gap-4">
                {[
                  'Certified Green Building Professional for 16+ years',
                  'ICC Certified Plans Examiner and Inspector',
                  'EOS Masterclass Graduate and Certified Integrator',
                  'Licensed General Contractor since 2010',
                ].map((point, index) => (
                  <div key={index} className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                    <p>{point}</p>
                  </div>
                ))}
              </div>
              <Button className="mt-4" size="lg" asChild>
                <Link href="/about">Learn More About Us</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="container">
          <div className="mx-auto mb-12 max-w-[800px] text-center">
            <h2 className="architectural-title mb-4 text-3xl font-bold md:text-4xl">
              Tailored Solutions for Construction Professionals
            </h2>
            <p className="text-lg text-muted-foreground">
              Comprehensive services to help you achieve sustainability and operational excellence
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2">
            {[
              {
                title: 'CALGreen Services',
                description: "Expert guidance through California's green building standards",
                features: [
                  'CALGreen Inspections',
                  'Plans Examination',
                  'Construction Waste Management',
                  'Green Halo System Support',
                ],
                image: '/2022-calgreen-code.png',
              },
              {
                title: 'Fractional EOS Integrator',
                description: 'Transform your construction business operations',
                features: [
                  'Business Process Optimization',
                  'Team Alignment',
                  'Strategic Planning',
                  'Performance Metrics',
                ],
                image: '/eos-2.png',
              },
            ].map((service, index) => (
              <Card key={index} className="overflow-hidden">
                <div className="relative h-32 lg:h-64">
                  <Image src={service.image} alt={service.title} fill className="object-cover" />
                </div>
                <CardContent className="p-8">
                  <h3 className="mb-4 text-2xl font-bold">{service.title}</h3>
                  <p className="mb-6 text-muted-foreground">{service.description}</p>
                  <ul className="space-y-2">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-center gap-2">
                        <ArrowRight className="h-4 w-4 text-primary" />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* New Section: CALGreen Code Expertise */}
      <section className="bg-muted py-20">
        <div className="container">
          <h2 className="architectural-title mb-12 text-center text-3xl font-bold md:text-4xl">
            Your CALGreen Code Specialists
          </h2>
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-6">
              <p className="text-lg">
                As ICC Certified CALGreen Special Inspectors / Plans Examiners, we are experts in
                the California Green Building Standards Code. Our in-depth knowledge helps you:
              </p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Understand and navigate complex CALGreen requirements</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Reduce costs associated with your CALGreen permit</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Ensure professional and economical permit documents</span>
                </li>
                <li className="flex items-center gap-2">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Streamline the inspection and commissioning process</span>
                </li>
              </ul>
              <Button asChild>
                <Link href="/services#calgreen">Learn More About CALGreen Services</Link>
              </Button>
            </div>
            <div className="relative h-64 lg:h-[400px]">
              <Image
                src="/2022-codes.png"
                alt="CALGreen Code Book"
                fill
                className="rounded-lg object-cover object-top"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="bg-white py-20 text-secondary-foreground">
        <div className="container px-4 md:px-6">
          <h2 className="architectural-title mb-12 text-center text-3xl font-bold md:text-4xl">
            What Our Clients Say
          </h2>
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Left column */}
            <div className="grid gap-8">
              {[testimonials[1], testimonials[2]].map((testimonial, index) => (
                <Card key={index} className="bg-background text-foreground">
                  <CardContent className="flex h-full flex-col justify-between p-6">
                    <p className="flex-grow italic">{testimonial.quote}</p>
                    <div className="mt-4">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Right column */}
            <div className="grid gap-8">
              {[testimonials[0], testimonials[3]].map((testimonial, index) => (
                <Card key={index} className="bg-background text-foreground">
                  <CardContent className="flex h-full flex-col justify-between p-6">
                    <p className="flex-grow italic">{testimonial.quote}</p>
                    <div className="mt-4">
                      <p className="font-semibold">{testimonial.author}</p>
                      <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20">
        <Image src="/trees.jpeg" alt="Sustainable construction" fill className="object-cover" />
        <div className="from-background/95 to-background/80 absolute inset-0 bg-opacity-10 bg-gradient-to-r bg-clip-padding backdrop-blur-sm backdrop-filter" />
        <div className="container relative">
          <div className="mx-auto max-w-3xl space-y-8 text-center">
            <h2 className="text-3xl font-bold text-white md:text-4xl">
              Let&apos;s Build a Sustainable Future Together
            </h2>
            <p className="text-lg text-white">
              Contact us today to schedule a consultation for CALGreen services or EOS solutions.
            </p>
            <Button variant="outline" size="lg" asChild>
              <Link href="/contact">Schedule a Consultation</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
