'use client';

import { sendEmail } from '@/lib/actions';
import { ContactFormSchema } from '@/lib/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
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

	const processForm: SubmitHandler<Inputs> = async data => {
		const result = await sendEmail(data);

		if (result?.error) {
			toast.error('An error occurred! Please try again.');
			return;
		}

		toast.success('Message send successfully!');
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
								placeholder='Name'
								autoComplete='given-name'
								{...register('name')}
							/>

							{errors.name?.message && (
								<p className='ml-1 mt-2 text-sm text-rose-400'>
									{errors.name.message}
								</p>
							)}
						</div>

						<Input
							id='email'
							type='text'
							placeholder='Email'
							autoComplete='email'
							{...register('email')}
						/>

						{errors.email?.message && (
							<p className='ml-1 mt-2 text-sm text-rose-400'>
								{errors.email.message}
							</p>
						)}
					</div>
					<div className='mt-6'>
						<Textarea rows={4} placeholder='Message' {...register('message')} />

						{errors.message?.message && (
							<p className='ml-1 mt-2 text-sm text-rose-400'>
								{errors.message.message}
							</p>
						)}
					</div>

					<div className='mt-6'>
						<Button
							type='submit'
							disabled={isSubmitting}
							className='w-full disabled:opacity-50'
						>
							{isSubmitting ? 'Submitting...' : 'Contact Us'}
						</Button>
					</div>

					<p className='mt-4 text-muted-foreground text-xs'>
						By submitting this form, I agree to the{' '}
						<Link href='/privacy' className='font-bold'>
							privacy&nbsp;policy.
						</Link>
					</p>
				</form>
			</div>
		</section>
	);
}
