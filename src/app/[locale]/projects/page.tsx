import Projects from '@/components/projects';
import { getProjects } from '@/lib/projects';
import { getTranslations } from 'next-intl/server';

export default async function ProjectsPage({
	params,
}: {
	params: { locale: string };
}) {
	const { locale } = await params;
	const projects = await getProjects(locale);
	const showProjects = !!projects.length;
	const t = await getTranslations('Main');

	return (
		<section className='pb-24 pt-40'>
			<div className='container max-w-3xl'>
				<h1 className='title mb-12'>{t('projects')}</h1>

				{showProjects ? (
					<Projects projects={projects} locale={locale} />
				) : (
					<div className='mt-8'>Project list is empty...</div>
				)}
			</div>
		</section>
	);
}
