'use client';

import { useTranslations } from 'next-intl';
import Image from 'next/image';

export default function Intro() {
	const t = useTranslations('Intro');

	return (
		<section className='flex flex-col-revers items-center gap-x-10 gap-y-4 pb-24'>
			<div className='mt-2 flex-1 md:mt-0'>
				<h1 className='title no-underline'>{t('title')}</h1>
				<p className='mt-3 font-light text-muted-foreground'>{t('content')}</p>
			</div>

			<div className='relative'>
				<Image
					className='flex-1 w-auto h-auto rounded-lg grayscale'
					src='/images/author.png'
					alt='Yurii Vychivskii'
					width={175}
					height={175}
					priority
				/>
			</div>
		</section>
	);
}
