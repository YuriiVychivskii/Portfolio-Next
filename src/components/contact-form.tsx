'use client';

import { Link } from '@/i18n/navigation';
import { sendEmail } from '@/lib/actions';
import { ContactFormSchema } from '@/lib/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import { useTranslations } from 'next-intl';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';

type Inputs = z.infer<typeof ContactFormSchema>;

export default function ContactForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<Inputs>({
		resolver: zodResolver(ContactFormSchema),
		defaultValues: {
			name: '',
			email: '',
			message: '',
		},
	});

	const tSchema = useTranslations('Schema');
	const t = useTranslations('ContactForm');

	const processForm: SubmitHandler<Inputs> = async data => {
		const result = await sendEmail(data);

		if (result?.error) {
			toast.error(t('errorMessage'));
			return;
		}

		toast.success(t('successMessage'));
		reset();
	};

	return (
		<section className='relative isolate'>
			<div className='relative'>
				<form
					onSubmit={handleSubmit(processForm)}
					className='mt-16 lg:flex-auto'
				>
					<div className='grid grid-cols-1 gap-6 sm:grid-cols-2'>
						<div>
							<Input
								id='name'
								type='text'
								placeholder={t('name')}
								autoComplete='given-name'
								{...register('name')}
							/>

							{errors.name?.message && (
								<p className='ml-1 mt-2 text-sm text-rose-400'>
									{tSchema(errors.name.message)}
								</p>
							)}
						</div>

						<div>
							<Input
								id='email'
								type='text'
								placeholder='Email'
								autoComplete='email'
								{...register('email')}
							/>

							{errors.email?.message && (
								<p className='ml-1 mt-2 text-sm text-rose-400'>
									{tSchema(errors.email.message)}
								</p>
							)}
						</div>
					</div>

					<div className='mt-6'>
						<Textarea
							id='textarea'
							rows={4}
							placeholder={t('message')}
							{...register('message')}
						/>

						{errors.message?.message && (
							<p className='ml-1 mt-2 text-sm text-rose-400'>
								{tSchema(errors.message.message)}
							</p>
						)}
					</div>

					<div className='mt-6'>
						<Button
							type='submit'
							disabled={isSubmitting}
							className='w-full disabled:opacity-50'
						>
							{isSubmitting ? t('submitting') : t('contact')}
						</Button>
					</div>

					<p className='mt-4 text-muted-foreground text-xs'>
						{t('privacyText')}{' '}
						<Link href='/privacy' className='font-bold'>
							{t('privacyLink')}
						</Link>
					</p>
				</form>
			</div>
		</section>
	);
}
