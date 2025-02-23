import { Mail, Phone, Clock, Linkedin } from 'lucide-react';
import type { Metadata } from 'next';

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import ContactForm from '@/components/ui/contact-form';

export const metadata: Metadata = {
  title: 'Contact The Blue Ladder Group | Get in Touch Today',
  description:
    'Reach out to us for expert CALGreen inspections and EOS solutions. Let’s discuss how we can help your construction business thrive sustainably.',
};

export default function Contact() {
  return (
    <div className="flex flex-col gap-20 py-20">
      {/* Header */}
      <section className="container">
        <div className="mx-auto max-w-[800px] space-y-8 text-center">
          <h1 className="text-4xl font-bold tracking-tighter">
            We&apos;re Here to Help You Succeed
          </h1>
          <p className="text-lg text-muted-foreground">
            Whether you&apos;re navigating CALGreen requirements or looking to optimize your
            business with EOS, our team is ready to assist. Reach out to start your journey toward
            sustainability and efficiency.
          </p>
        </div>
      </section>

      {/* Contact Form and Info */}
      <section className="container">
        <div className="mx-auto grid max-w-[1200px] gap-12 lg:grid-cols-2">
          {/* Form */}
          <ContactForm />

          {/* Contact Info */}
          <div className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>Reach Us Directly</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-center gap-2">
                  <Mail className="h-5 w-5 text-primary" />
                  <p>Faith@TheBlueLadderGrp.com</p>
                </div>
                <div className="flex items-center gap-2">
                  <Phone className="h-5 w-5 text-primary" />
                  <p>(408) 728-2287</p>
                </div>
                <div className="flex items-center gap-2">
                  <Clock className="h-5 w-5 text-primary" />
                  <p>Monday – Friday, 7 AM – 6 PM PST</p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Service Areas</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex items-start gap-2">
                  <p>
                    Supporting general contractors, architects, designers, and homeowners with
                    CALGreen and EOS services tailored to their needs across San Francisco Bay Area.
                  </p>
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Stay Connected</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-col gap-4">
                  <p>
                    Follow us on LinkedIn for updates on green construction innovations and business
                    strategies.
                  </p>
                  <div className="flex items-center gap-4">
                    <Linkedin className="hover:text-primary/80 h-6 w-6 cursor-pointer text-primary" />
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
