// server/api/contact.post.ts

import { defineEventHandler, readBody } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {
  try {
    // 1) Read request body
    const { name, email, message } = await readBody(event)

    // 2) (Optional) Basic validation
    if (!name || !email || !message) {
      // Return an error object if missing any required fields
      return {
        success: false,
        error: 'All fields are required.'
      }
    }

    // 3) Create Nodemailer transporter using environment variables
    const transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      port: Number(process.env.MAIL_PORT),
      secure: true, // typically 'true' for port 465, 'false' for port 587
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS
      }
    })

    // 4) Prepare the email data
    const mailOptions = {
      from: `"${name}" <${email}>`,   // sender address
      to: 'your-real-email@example.com', // change to your own email
      subject: 'New Message from Contact Form',
      text: `
        Name: ${name}
        Email: ${email}
        Message:
        ${message}
      `
    }

    // 5) Send email
    await transporter.sendMail(mailOptions)

    // 6) Return success message
    return {
      success: true,
      message: 'Email sent successfully!'
    }

  } catch (error) {
    // If something fails, log the error and return an error response
    console.error(error)
    return {
      success: false,
      error: 'Failed to send email. Please try again later.'
    }
  }
})
