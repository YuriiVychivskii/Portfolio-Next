'use client';

import { subscribe } from '@/lib/actions';
import { NewsletterFormSchema } from '@/lib/schemas';
import { zodResolver } from '@hookform/resolvers/zod';
import Link from 'next/link';
import { SubmitHandler, useForm } from 'react-hook-form';
import { toast } from 'sonner';
import { z } from 'zod';
import { Button } from './ui/button';
import { Card, CardContent } from './ui/card';
import { Input } from './ui/input';

type Inputs = z.infer<typeof NewsletterFormSchema>;

export default function NewsLetterForm() {
	const {
		register,
		handleSubmit,
		reset,
		formState: { errors, isSubmitting },
	} = useForm<Inputs>({
		resolver: zodResolver(NewsletterFormSchema),
		defaultValues: {
			email: '',
		},
	});

	const processForm: SubmitHandler<Inputs> = async data => {
		const result = await subscribe(data);

		if (result?.error) {
			toast.error('An error occurred! Please try again.');
			return;
		}

		toast.success('Subscribed successfully!');
	};

	return (
		<section>
			<Card className='rounded-lg border-0 dark:border'>
				<CardContent className='flex flex-col gap-8 pt-6 md:flex-row md:justify-center'>
					<div>
						<h2 className='text-2xl font-bold'>Subscribe to my newsletter</h2>
						<p className='text-muted-foreground'>
							Get updates on my work and projects.
						</p>
					</div>

					<form
						onSubmit={handleSubmit(processForm)}
						className='flex flex-col items-start gap-3'
					>
						<div className='w-full'>
							<Input
								type='email'
								id='email'
								autoComplete='email'
								className='w-full'
								{...register('email')}
							/>

							{errors && (
								<p className='ml-1 mt-2 text-sm text-rose-400 '>
									{errors.email?.message}
								</p>
							)}
						</div>

						<div className='w-full'>
							<Button
								type='submit'
								disabled={isSubmitting}
								className='w-full disabled:opacity-50'
							>
								{isSubmitting ? 'Submitting...' : 'Subscribe'}
							</Button>
						</div>
						<div>
							<p className='text-xs text-muted-foreground'>
								We care about your data. Read our{' '}
								<Link href='/privacy' className='font-bold'>
									privacy&nbsp;policy.
								</Link>
							</p>
						</div>
					</form>
				</CardContent>
			</Card>
		</section>
	);
}
