'use client';

import { MoonIcon, SunIcon } from 'lucide-react';
import { useTheme } from 'next-themes';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

export default function ToggleTheme() {
	const { setTheme, resolvedTheme } = useTheme();
	const [mounted, setMounted] = useState(false);

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	return (
		<Button
			size='sm'
			variant='ghost'
			onClick={() => setTheme(resolvedTheme === 'dark' ? 'light' : 'dark')}
			className='w-9 h-9'
		>
			{resolvedTheme === 'dark' ? (
				<SunIcon className='size-4 text-orange-300' />
			) : (
				<MoonIcon className='size-4 text-sky-950' />
			)}

			<span className='sr-only'>Toggle theme</span>
		</Button>
	);
}
