'use client';

import { usePathname } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import { Button } from './ui/button';

export default function ToggleLocale() {
	const [mounted, setMounted] = useState(false);
	const router = useRouter();
	const pathname = usePathname();
	const locale = useLocale();

	useEffect(() => setMounted(true), []);

	if (!mounted) return null;

	const switchLocale = locale === 'en' ? 'ua' : 'en';

	const handleClick = () => {
		const newPath = `/${switchLocale}${pathname.substring(3)}`;
		router.replace(newPath);
	};

	return (
		<Button
			size='sm'
			variant='ghost'
			onClick={() => handleClick()}
			className='w-9 h-9'
		>
			{locale.toUpperCase()}

			<span className='sr-only'>Toggle language</span>
		</Button>
	);
}
