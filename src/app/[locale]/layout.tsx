import Header from '@/components/header';
import Providers from '@/components/providers';
import { routing } from '@/i18n/routing';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { Inter, Playfair_Display } from 'next/font/google';
import { notFound } from 'next/navigation';
import './globals.css';

const inter = Inter({
	variable: '--font-sans',
	subsets: ['latin'],
});

const playfair = Playfair_Display({
	variable: '--font-serif',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Yurii Vychivskii',
	description: 'Portfolio',
	icons: '/images/logo.png',
};

export default async function LocaleLayout({
	children,
	params,
}: {
	children: React.ReactNode;
	params: Promise<{ locale: string }>;
}) {
	const { locale } = await params;
	if (!hasLocale(routing.locales, locale)) {
		notFound();
	}
	return (
		<html lang={locale} suppressHydrationWarning>
			<body
				className={cn(
					'flex min-h-screen font-sans antialiased',
					inter.variable,
					playfair.variable,
					'__text_mode_READY__'
				)}
			>
				<Providers>
					<NextIntlClientProvider>
						<Header />
						<main className='grow'>{children}</main>
					</NextIntlClientProvider>
				</Providers>
			</body>
		</html>
	);
}
