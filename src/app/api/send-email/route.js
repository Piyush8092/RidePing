import nodemailer from "nodemailer";
import { NextResponse } from "next/server";
import { siteConfig } from "@/config/site";

export async function POST(req) {
  try {
    const formData = await req.formData();

    const schoolName = formData.get("schoolName");
    const email = formData.get("email");
    const mobile = formData.get("mobile");
    const message = formData.get("message");

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    // ADMIN EMAIL
    await transporter.sendMail({
      from: `"ERP Team" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO,
      replyTo: email,
      subject: `New School Enquiry - ${schoolName}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <h2>New School ERP Enquiry</h2>
          
          <p><strong>School Name:</strong> ${schoolName}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Mobile:</strong> ${mobile}</p>
          
          <hr style="margin: 16px 0;" />
          
          <p><strong>Message:</strong></p>
          <p>${message || "No message provided"}</p>

          <hr style="margin: 16px 0;" />

          <p style="font-size: 12px; color: #666;">
            This enquiry was submitted via your RidePing landing page.
          </p>
        </div>
      `,
    });

    // USER EMAIL
    await transporter.sendMail({
      from: `"RidePing" <${process.env.EMAIL_USER}>`,
      to: email,
      subject: "We received your request for RidePing",
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6;">
          <p>Dear ${schoolName},</p>

          <p>
            Thank you for your interest in our School ERP solution. We have received your request successfully.
          </p>

          <p>
            Our team will review your requirements and contact you within <strong>24 hours</strong> via email or phone to assist you further and schedule a demo if needed.
          </p>

          <p>
            If your request is urgent, you may reach us directly at <strong>${siteConfig.contact.displayPhone}</strong>.
          </p>

          <br />

          <p>Best regards,</p>
          <p><strong>RidePing Team</strong></p>
        </div>
      `,
    });

    return NextResponse.json({ message: "Message sent successfully" }, { status: 200 });
  } catch (error) {
    console.error("Contact mail error:", error);

    return NextResponse.json({ message: "Failed to send message" }, { status: 500 });
  }
}
