import Link from 'next/link';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { CheckCircle } from 'lucide-react';
import { PageHero } from '@/components/page-hero';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About The Blue Ladder Group | CALGreen & EOS Experts',
  description:
    'Learn about Faith Mackarness, a certified CALGreen Inspector and EOS expert with 20+ years of experience in sustainable construction and business optimization.',
};

const certifications = [
  {
    title: 'CGBP Certified',
    description: 'Certified green building professional since 2008.',
    image: '/build-it-green.png',
  },
  {
    title: 'ICC Certified',
    description: 'CALGreen Certified Plans Examiner and site inspector.',
    image: '/icc-certified.png',
  },
  {
    title: 'EOS Expert',
    description: 'Certified EOS Integrator and Masterclass Graduate',
    image: '/eos-graduate.png',
  },
  {
    title: 'Licensed Contractor',
    description: 'Obtained CSLB - B License, 2010',
    image: '/cslb.png',
  },
];

export default function About() {
  return (
    <div className="flex flex-col">
      <PageHero
        title="Faith Mackarness: A Leader in Green Construction"
        description="Third-generation builder committed to sustainable construction and business excellence."
        image="/about.jpg"
        imageAlt="Sustainable construction project"
        ctaButton={{
          text: 'Schedule a Consultation',
          href: '/contact',
        }}
      />

      {/* Background */}
      <section className="py-20">
        <div className="container">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            <div className="space-y-6">
              <h2 className="architectural-title text-3xl font-bold">
                A Journey in Sustainable Building
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground">
                <p>
                  Faith began her &lsquo;Green&rsquo; journey with the first Living Machine project
                  in Taos, New Mexico, working alongside the now, Worrell Waters Technologies. She
                  drew immense inspiration from Tom Worrell and Michael Reynolds - the visionary
                  inventor and founder of EarthShip Biotecture. These two brilliant minds sparked
                  Faith&apos;s passion for sustainable living. Her academic pursuit of alternative
                  building methods at the University of New Mexico further ignited her desire to
                  live off-grid and apply her knowledge in real-world settings. From the remote
                  mesas of New Mexico to the rugged northern Cascade Mountains of Washington, Faith
                  thrived in off-grid environments. Her determination was further strengthened
                  through her role as a Timber Stand Surveyor for the USDA Forest Service, where she
                  conducted field surveys, counted spotted owls, and battled the occasional forest
                  fire.
                </p>
                <p>
                  After settling down in her home state of California in 2000, Faith has continued
                  to fuel her passion for knowledge and commitment to sustainable living. Throughout
                  her career, her primary goals have been to work alongside her children and promote
                  green practices. This May, her daughter will graduate from the Interior Design
                  program at WVMC, marking a milestone in the Mackarness family&apos;s legacy. With
                  this achievement, the fourth generation of the Mackarness clan will be firmly
                  rooted in the building industry, dedicated to advancing environmentally conscious
                  and sustainable building practices.
                </p>
              </div>
              <blockquote className="border-l-4 border-primary pl-4 text-xl italic">
                &quot;Where homeowners and contractors often feel frustrated by tier confusion,
                mandatory electives, and constant updates, I thrive on the challenges of CALGreen
                Code. For me, these hurdles are exciting opportunities to bring clarity and
                solutions to our clients.&quot;
              </blockquote>
            </div>
            <div className="relative h-64 overflow-hidden rounded-lg lg:h-[600px]">
              <Image
                src="/faith-5.jpeg"
                alt="Faith Mackarness at work"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Certifications */}
      <section className="bg-muted py-20">
        <div className="container mx-auto px-4">
          <h2 className="mb-12 text-center text-3xl font-bold">Certifications and Expertise</h2>
          <div className="grid grid-cols-2 gap-8 lg:grid-cols-4">
            {certifications.map((cert, index) => (
              <div key={index} className="relative overflow-hidden rounded-lg bg-white shadow">
                <div className="absolute left-0 top-0 h-full w-1 bg-primary" />
                <div className="space-y-4 p-6">
                  <div className="mx-auto flex h-32 w-32 items-center justify-center">
                    <Image
                      src={cert.image}
                      alt={`${cert.title} certification`}
                      width={100}
                      height={100}
                      className="object-contain"
                      style={{ maxWidth: '100px', maxHeight: '100px' }}
                    />
                  </div>
                  <h3 className="text-center text-lg font-bold">{cert.title}</h3>
                  <p className="text-center text-sm text-muted-foreground">{cert.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission and Values 
      <section className="py-20">
        <div className="container">
          <div className="max-w-[800px] mx-auto text-center space-y-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold architectural-title">
                Building a Sustainable Future, One Step at a Time
              </h2>
              <p className="text-lg text-muted-foreground">
                At The Blue Ladder Group, we believe in making sustainable building practices accessible and efficient for everyone.
              </p>
            </div>
            <div className="grid sm:grid-cols-3 gap-8">
              {[
                {
                  title: "Simplifying Compliance",
                  description: "Making CALGreen requirements clear and achievable"
                },
                {
                  title: "Business Excellence",
                  description: "Helping construction businesses scale with EOS"
                },
                {
                  title: "Innovation",
                  description: "Fostering sustainable and efficient practices"
                }
              ].map((value, index) => (
                <div key={index} className="space-y-2">
                  <h3 className="font-bold">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>*/}

      {/* Differentiators */}
      <section className="py-20 text-secondary-foreground">
        <div className="container">
          <h2 className="architectural-title mb-12 text-center text-3xl font-bold">
            What Sets Us Apart
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: 'Direct Communication',
                description:
                  'Faith answers your calls faster than your mom texts back, and she’s got solutions so clear even your pet goldfish would get it.',
              },
              {
                title: 'Expert Network',
                description:
                  'We’ve got a Rolodex of ethical, qualified pros so big it could moonlight as the Yellow Pages—minus the outdated hairstyles.',
              },
              {
                title: 'Passionate Advocacy',
                description:
                  'We’re on a mission to make green building so accessible, even your neighbor’s cat could start a sustainable side hustle.',
              },
            ].map((point, index) => (
              <Card key={index} className="bg-background text-foreground">
                <CardContent className="space-y-4 p-6">
                  <div className="flex items-start gap-2">
                    <CheckCircle className="mt-1 h-5 w-5 text-primary" />
                    <div>
                      <h3 className="mb-2 font-bold">{point.title}</h3>
                      <p className="text-sm text-muted-foreground">{point.description}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-20">
        <Image
          src="/trees.jpeg"
          alt="Sustainable construction project"
          fill
          className="object-cover"
        />
        <div className="from-background/95 to-background/80 absolute inset-0 bg-opacity-10 bg-gradient-to-r bg-clip-padding backdrop-blur-sm backdrop-filter" />
        <div className="container relative">
          <div className="mx-auto max-w-[600px] space-y-8 text-center text-white">
            <h2 className="architectural-title text-3xl font-bold">Discover How We Can Help You</h2>
            <Button size="lg" asChild>
              <Link href="/contact">Contact Us Today</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
