'use server';

import { Resend } from 'resend';
import { z } from 'zod';

import { ContactFormEmail } from '@/components/contact-form-email';
import { ContactFormSchema } from './schemas';

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

		console.log('emailData>>', emailData);
		console.log('error>>', error);

		if (!emailData || error) {
			throw new Error('Failed to send email');
		}

		return { success: true };
	} catch (error) {
		return { error };
	}
}
