import { z } from 'zod';

export const ContactFormSchema = z.object({
	name: z
		.string()
		.min(1, { message: 'requiredName' })
		.min(2, { message: 'requiredChar' }),
	email: z
		.string()
		.min(1, { message: 'requiredEmail' })
		.email('Invalid email.'),
	message: z.string().min(1, { message: 'requiredMessage' }),
});

export const NewsletterFormSchema = z.object({
	email: z.string().email('Invalid email.'),
});
