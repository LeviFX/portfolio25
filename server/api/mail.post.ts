// server/api/contact.post.ts

import { defineEventHandler, readBody } from 'h3'
import nodemailer from 'nodemailer'

export default defineEventHandler(async (event) => {

  const config = useRuntimeConfig(event);

  try {
    const { message, name, email } = await readBody(event)

    // Very basic check if empty validation
    if (!message || !name || !email) {
      // Return an error object if missing any required fields
      return {
        success: false,
        error: 'Please fill in all fields.'
      }
    }

    // Nodemailer transporter
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: config.mailUser,
        pass: config.mailPass,
      }
    })

    const mailOptions = {
      from: config.mailUser,   // From sender account to prevent Gmail spam intervention
      to: config.mailPersonal,
      subject: 'Portfolio contact form',
      text: `
        Name: ${name}
        Email: ${email}
        Message:
        ${message}
      `
    }

    await transporter.sendMail(mailOptions)

    return {
      success: true,
      message: 'Email sent successfully!'
    }

  } catch (error) {
    console.error(error)
    return {
      success: false,
      error: 'Failed to send email. Please try again later.'
    }
  }
})
