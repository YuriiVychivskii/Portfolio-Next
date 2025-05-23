import Footer from '@/components/footer';
import Header from '@/components/header';
import Providers from '@/components/providers';
import { cn } from '@/lib/utils';
import type { Metadata } from 'next';
import { Inter, Playfair_Display } from 'next/font/google';
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

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang='en' suppressHydrationWarning>
			<body
				className={cn(
					'flex min-h-screen font-sans antialiased',
					inter.variable,
					playfair.variable,
					'__text_mode_READY__'
				)}
			>
				<Providers>
					<Header />
					<main className='grow'>{children}</main>
					<Footer />
				</Providers>
			</body>
		</html>
	);
}
