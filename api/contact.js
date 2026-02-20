import nodemailer from 'nodemailer';
import createDevCors from '../server-utils/cors.js';

export default async function handler(req, res) {
    // Apply development-only CORS (server.js will apply it when proxying).
    if (process.env.NODE_ENV !== 'production') {
        const cors = createDevCors();
        let nextCalled = false;
        cors(req, res, () => {
            nextCalled = true;
        });
        if (!nextCalled && res.writableEnded) return; // middleware handled OPTIONS
    }

    if (req.method !== 'POST') {
        res.setHeader('Allow', ['POST']);
        return res.status(405).json({ error: 'Method not allowed' });
    }

    const { name, email, subject, message } = req.body || {};

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: 'Missing required fields' });
    }

    // SMTP configuration via environment variables
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? Number(process.env.SMTP_PORT) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPass = process.env.SMTP_PASS;
    const smtpSecure = process.env.SMTP_SECURE === 'true';
    const toEmail = process.env.TO_EMAIL || 'umarfarookj06@gmail.com';

    if (!smtpHost || !smtpUser || !smtpPass) {
        return res.status(500).json({ error: 'Mail server not configured. Set SMTP_HOST, SMTP_USER and SMTP_PASS in environment.' });
    }

    try {
        const transporter = nodemailer.createTransport({
            host: smtpHost,
            port: smtpPort,
            secure: smtpSecure,
            auth: {
                user: smtpUser,
                pass: smtpPass,
            },
        });

        const mailSubject = `Portfolio Contact: ${subject}`;
        const text = `New contact form submission:\n\nName: ${name}\nEmail: ${email}\nSubject: ${subject}\n\nMessage:\n${message}`;
        const html = `<p><strong>Name:</strong> ${name}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><strong>Subject:</strong> ${subject}</p>
      <hr />
      <p>${message.replace(/\n/g, '<br/>')}</p>`;

        const info = await transporter.sendMail({
            from: `${name} <${smtpUser}>`,
            to: toEmail,
            subject: mailSubject,
            text,
            html,
        });

        return res.status(200).json({ ok: true, messageId: info.messageId });
    } catch (err) {
        console.error('Mail send error:', err);
        return res.status(500).json({ error: 'Failed to send email' });
    }
}
