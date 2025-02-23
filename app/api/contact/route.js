import formData from 'form-data';
import Mailgun from 'mailgun.js';
import { NextResponse } from 'next/server';

const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: 'api',
  key: process.env.MAILGUN_API_KEY,
});

function getEmailTemplate(data) {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>New Website Inquiry</title>
        <style>
            body, table, td, div, p, a {
                -webkit-text-size-adjust: 100%;
                -ms-text-size-adjust: 100%;
                margin: 0;
                padding: 0;
                font-family: Arial, sans-serif;
            }
            @media screen and (max-width: 600px) {
                .container {
                    width: 100% !important;
                }
                .content {
                    padding: 20px !important;
                }
                .logo {
                    width: 200px !important;
                    height: auto !important;
                }
            }
        </style>
    </head>
    <body style="margin: 0; padding: 0; background-color: #f4f4f4;">
        <table role="presentation" cellpadding="0" cellspacing="0" width="100%" style="background-color: #f4f4f4;">
            <tr>
                <td align="center" style="padding: 40px 0;">
                    <table role="presentation" class="container" cellpadding="0" cellspacing="0" width="600" style="background-color: #ffffff; border-radius: 8px; overflow: hidden;">
                        <tr>
                            <td align="center" style="padding: 40px 0;">
                                <img src="/placeholder.svg?height=60&width=200" alt="Company Logo" class="logo" style="display: block; width: 200px;">
                            </td>
                        </tr>
                        <tr>
                            <td align="center" style="padding: 0 40px;">
                                <h1 style="color: #0099ff; font-size: 32px; margin: 0;">Congratulations</h1>
                                <p style="color: #333333; font-size: 18px; margin: 20px 0;">You have a new inquiry from your website</p>
                            </td>
                        </tr>
                        <tr>
                            <td class="content" style="padding: 40px;">
                                <p style="margin: 0 0 5px 0; color: #666666; font-size: 14px;">Name</p>
                                <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px;">${data.name}</p>
                                
                                <p style="margin: 0 0 5px 0; color: #666666; font-size: 14px;">Email</p>
                                <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px;">${data.email}</p>
                                
                                <p style="margin: 0 0 5px 0; color: #666666; font-size: 14px;">Phone</p>
                                <p style="margin: 0 0 20px 0; color: #333333; font-size: 16px;">${data.phone}</p>
                                
                                <p style="margin: 0 0 5px 0; color: #666666; font-size: 14px;">Message</p>
                                <p style="margin: 0; color: #333333; font-size: 16px;">${data.message}</p>
                            </td>
                        </tr>
                        <tr>
                            <td style="padding: 20px; background-color: #f8f8f8; text-align: center; font-size: 12px; color: #666666;">
                                <p style="margin: 0;">Copyright © ${new Date().getFullYear()} Your Company Name. All rights reserved.</p>
                            </td>
                        </tr>
                    </table>
                </td>
            </tr>
        </table>
    </body>
    </html>
  `;
}

export async function POST(req) {
  try {
    // Validate request
    if (!req.body) {
      return NextResponse.json({ message: 'Missing request body' }, { status: 400 });
    }

    // Parse the request body
    const { name, email, phone, message } = await req.json();

    // Validate required fields
    if (!name || !email || !phone || !message) {
      return NextResponse.json({ message: 'Missing required fields' }, { status: 400 });
    }

    // Create email content
    const htmlContent = getEmailTemplate({ name, email, phone, message });
    const textContent = `
      Name: ${name}
      Email: ${email}
      Phone: ${phone}
      Message: ${message}
    `;

    // Send email using Mailgun
    const msg = await mg.messages.create(process.env.MAILGUN_DOMAIN, {
      from: 'SJFast <mailgun@mail.sjfast.com>',
      to: ['eric@sjfast.com'],
      subject: 'Website Lead from The Blue Ladder Group',
      text: textContent,
      html: htmlContent,
    });

    return NextResponse.json({
      message: 'Email sent successfully',
      response: msg,
    });
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      {
        message: 'Error sending email',
        error: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 },
    );
  }
}
