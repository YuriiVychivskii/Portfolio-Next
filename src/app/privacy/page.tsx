import Link from 'next/link';

export default function PrivacyPolicyPage() {
	return (
		<section className='pb-24 pt-24'>
			<main className='max-w-3xl mx-auto py-12 px-4'>
				<h1 className='text-3xl font-bold mb-6'>Privacy Policy</h1>

				<p className='mb-4'>
					This Privacy Policy describes how we collect, use, and protect your
					personal information when you use our website.
				</p>

				<h2 className='text-2xl font-semibold mt-6 mb-2'>
					1. Information We Collect
				</h2>
				<p className='mb-4'>
					We may collect the following personal information:
				</p>
				<ul className='list-disc list-inside mb-4'>
					<li>Your email address (when you subscribe to updates)</li>
					<li>Authentication information if you sign in with Google</li>
					<li>
						Usage data (e.g., page visits, device info) via analytics tools
					</li>
				</ul>

				<h2 className='text-2xl font-semibold mt-6 mb-2'>
					2. How We Use Your Information
				</h2>
				<p className='mb-4'>We use your personal data to:</p>
				<ul className='list-disc list-inside mb-4'>
					<li>Send you updates and announcements about the project</li>
					<li>Authenticate your identity (if you sign in)</li>
					<li>Improve the performance and user experience of the site</li>
				</ul>

				<h2 className='text-2xl font-semibold mt-6 mb-2'>
					3. Email Communications
				</h2>
				<p className='mb-4'>
					When you subscribe to our newsletter, we will send you occasional
					emails with updates. You can unsubscribe at any time by contacting us
					at{' '}
					<a href='mailto:work@yurii-vychivskii.com' className='underline'>
						work@yurii-vychivskii.com
					</a>
					.
				</p>

				<h2 className='text-2xl font-semibold mt-6 mb-2'>
					4. Third-Party Services
				</h2>
				<p className='mb-4'>
					We use the following third-party services that may collect or process
					your data:
				</p>
				<ul className='list-disc list-inside mb-4'>
					<li>
						<strong>Resend</strong> – for sending transactional or subscription
						emails
					</li>
				</ul>

				<h2 className='text-2xl font-semibold mt-6 mb-2'>5. Data Security</h2>
				<p className='mb-4'>
					We implement reasonable security measures to protect your personal
					data. However, no online service is 100% secure.
				</p>

				<h2 className='text-2xl font-semibold mt-6 mb-2'>6. Your Rights</h2>
				<p className='mb-4'>You have the right to:</p>
				<ul className='list-disc list-inside mb-4'>
					<li>Access the personal data we hold about you</li>
					<li>Request correction or deletion of your data</li>
					<li>Withdraw consent to data processing at any time</li>
				</ul>

				<h2 className='text-2xl font-semibold mt-6 mb-2'>7. Contact</h2>
				<p className='mb-4'>
					If you have any questions or requests related to your data, please
					contact us at{' '}
					<Link href='/contact' className='font-bold'>
						Contact form
					</Link>{' '}
					or{' '}
					<Link href='mailto:work@yurii-vychivskii.com' className='underline'>
						work@yurii-vychivskii.com
					</Link>
					.
				</p>

				<p className='text-sm text-gray-500 mt-8'>Last updated: May 22, 2025</p>
			</main>
		</section>
	);
}
