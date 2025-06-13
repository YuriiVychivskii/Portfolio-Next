'use client';

import { usePathname, useRouter } from '@/i18n/navigation';
import { useLocale } from 'next-intl';
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
		router.replace(pathname, { locale: switchLocale });
	};

	return (
		<Button size='sm' variant='ghost' onClick={handleClick} className='w-9 h-9'>
			{locale.toUpperCase()}
			<span className='sr-only'>Toggle language</span>
		</Button>
	);
}
