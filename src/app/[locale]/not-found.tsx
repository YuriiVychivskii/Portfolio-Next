import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';

export default function NotFound() {
	return (
		<section className='pb-24 pt-36'>
			<div className='min-h-full px-4 sm:px-6 sm:py-24 md:grid md:place-items-center'>
				<div className='mx-auto max-w-max'>
					<main className='sm:flex'>
						<p className='text-4xl font-bold tracking-tight text-muted-foreground sm:text-5xl'>
							404
						</p>
						<div className='sm:ml-6'>
							<h1 className='text-3xl font-bold tracking-tight sm:text-5xl'>
								Page not found
							</h1>
							<p className='mt-1 text-base text-muted-foreground'>
								Please check the URL in the address barr and try again.
							</p>
							<div className='mt-10 flex space-x-3'>
								<Link
									href='/'
									className='inline-flex items-center gap-3 text-muted-foreground'
								>
									<ArrowLeftIcon className='h-5 w-5' />
									<span>Go back home</span>
								</Link>
							</div>
						</div>
					</main>
				</div>
			</div>
		</section>
	);
}
