"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState, ChangeEvent, FormEvent } from "react";

interface FormData {
  name: string;
  email: string;
  phone_number: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone_number: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState<boolean>(false);
  const [success, setSuccess] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.id]: e.target.value,
    });
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSuccess("");

    try {
      const response = await fetch(
        process.env.NEXT_PUBLIC_APPROVAL_API_URL + '/api/submit',
        {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'X-API-Key': process.env.NEXT_PUBLIC_APPROVAL_API_KEY!,
          },
          body: JSON.stringify({
            formData: {
              name: formData.name,
              email: formData.email,
              phone_number: formData.phone_number,
              message: formData.message,
            }
          }),
        }
      );

      const result = await response.json();

      if (result.success) {
        setSuccess("Thank you for reaching out! We will get back to you soon.");
        setFormData({ name: "", email: "", phone_number: "", message: "" });
      } else {
        setSuccess("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setSuccess("An error occurred. Please try again later.");
    }
    setIsSubmitting(false);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Send Us a Message</CardTitle>
      </CardHeader>
      <CardContent>
        <form className="space-y-6" onSubmit={handleSubmit}>
          <div className="space-y-2">
            <label htmlFor="name" className="text-sm font-medium">Name</label>
            <Input id="name" name="name" value={formData.name} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <label htmlFor="email" className="text-sm font-medium">Email</label>
            <Input id="email" name="email" type="email" value={formData.email} onChange={handleChange} required />
          </div>
          <div className="space-y-2">
            <label htmlFor="phone_number" className="text-sm font-medium">Phone</label>
            <Input id="phone_number" name="phone_number" type="tel" value={formData.phone_number} onChange={handleChange} />
          </div>
          <div className="space-y-2">
            <label htmlFor="message" className="text-sm font-medium">Message</label>
            <Textarea id="message" name="message" value={formData.message} onChange={handleChange} required />
          </div>
          <Button type="submit" className="w-full" disabled={isSubmitting}>
            {isSubmitting ? "Submitting..." : "Submit Your Inquiry"}
          </Button>
        </form>
        {success && <p className="text-center mt-4">{success}</p>}
      </CardContent>
    </Card>
  );
}
