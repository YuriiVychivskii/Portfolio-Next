import { getProjects } from '@/lib/projects';
import { getTranslations } from 'next-intl/server';
import Link from 'next/link';
import Projects from './projects';

export default async function RecentProjects({ locale }: { locale: string }) {
	const projects = await getProjects(locale, 2);
	const t = await getTranslations('RecentProjects');

	return (
		<section className='pb-24'>
			<h2 className='title mb-2'>{t('title')}</h2>
			<Projects projects={projects} locale={locale} />

			<Link
				href='/projects'
				className='mt-8 inline-flex items-center gap-2 text-muted-foreground'
			>
				<span>{t('all')}</span>
			</Link>
		</section>
	);
}
