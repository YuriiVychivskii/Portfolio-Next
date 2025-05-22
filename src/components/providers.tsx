'use client';

import { ThemeProvider, useTheme } from 'next-themes';
import { Toaster } from './ui/sonner';

export default function Providers({ children }: { children: React.ReactNode }) {
	return (
		<ThemeProvider
			enableSystem
			attribute='class'
			defaultTheme='system'
			disableTransitionOnChange
		>
			{children}
			<ToasterProvider />
		</ThemeProvider>
	);
}

function ToasterProvider() {
	const { resolvedTheme } = useTheme();

	return (
		<Toaster
			closeButton
			position='top-right'
			theme={resolvedTheme === 'dark' ? 'dark' : 'light'}
		/>
	);
}
