import { getProjectBySlug } from '@/lib/projects';
import { formatDate } from '@/lib/utils';
import { ArrowLeftIcon } from 'lucide-react';
import { getTranslations } from 'next-intl/server';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';

type Params = Promise<{ slug: string; locale: string }>;

export default async function Projects({ params }: { params: Params }) {
	const { slug, locale } = await params;
	const project = await getProjectBySlug(locale, slug);
	const t = await getTranslations('Main');

	if (!project) notFound();

	const { metadata, content } = project;
	const { title, image, author, publishedAt } = metadata;

	return (
		<section className='pb-24 pt-32'>
			<div className='container max-w-3xl'>
				<Link
					href='/projects'
					className='mb-8 inline-flex items-center gap-2 text-sm font-light '
				>
					<ArrowLeftIcon className='h-5 w-5' />
					<span>{t('backToProjects')}</span>
				</Link>

				{image && (
					<div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
						<Image
							src={image}
							alt={title || ''}
							className='object-cover'
							sizes='(min-width: 640px) 50vw, 100vw'
							fill
						></Image>
					</div>
				)}

				<header>
					<h1 className='title'>{title}</h1>
					<p className='mt-3 text-xs text-muted-foreground'>
						{author}/{formatDate(publishedAt ?? '', locale)}
					</p>
				</header>

				<main className='prose dark:prose-invert mt-16'>
					{<MDXRemote source={content} />}
				</main>
			</div>
		</section>
	);
}
