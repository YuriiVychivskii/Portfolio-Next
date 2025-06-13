'use server';

import { Resend } from 'resend';
import { z } from 'zod';

import { ContactFormEmail } from '@/components/contact-form-email';
import { ContactFormSchema, NewsletterFormSchema } from './schemas';

type ContactFormInputs = z.infer<typeof ContactFormSchema>;
const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail(data: ContactFormInputs) {
	const result = ContactFormSchema.safeParse(data);

	if (!result.success) {
		return { error: result.error.format() };
	}

	try {
		const { name, email, message } = result.data;

		const { data: emailData, error } = await resend.emails.send({
			from: 'Yurii Vychivskii <work@yurii-vychivskii.com>',
			to: ['work@yurii-vychivskii.com'],
			cc: [email],
			replyTo: email,
			subject: `New contact from ${name} (${email})`,
			text: `Name: ${name}\nEmail: ${email}\nMessage: ${message}`,
			react: await ContactFormEmail({ name, email, message }),
		});

		if (!emailData || error) {
			throw new Error('Failed to send email');
		}

		return { success: true };
	} catch (error) {
		return { error };
	}
}

export async function subscribe(data: { email: string }) {
	const { success, data: email } = NewsletterFormSchema.safeParse(data);

	if (!success || !email.email) {
		throw new Error('Failed to send email');
	}

	try {
		const { error } = await resend.emails.send({
			from: 'Yurii Vychivskii <work@yurii-vychivskii.com>',
			to: email.email,
			subject: 'You have subscribed to project updates!',
			html: `
				<h1>Thank you for subscribing!</h1>
				<p>We'll keep you informed about important updates and news.</p>
				`,
		});

		if (error) {
			return { error };
		}

		return { success: true };
	} catch (error) {
		return { error };
	}
}
