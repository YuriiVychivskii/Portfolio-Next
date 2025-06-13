import { Link } from '@/i18n/navigation';
import { ProjectMetadata } from '@/lib/projects';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';

export default function Projects({
	projects,
	locale,
}: {
	projects: ProjectMetadata[];
	locale: string;
}) {
	return (
		<ul className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
			{projects.map(project => {
				return (
					<li key={project.slug} className='group relative'>
						<Link href={`/projects/${project.slug}`}>
							{project.image && (
								<div className='relative rounded-lg h-72 w-full overflow-hidden bg-muted sm:h-60'>
									<Image
										src={project.image}
										alt={project.title || ''}
										sizes='(min-width: 640px) 50vw, 100vw'
										fill
										className='object-cover object-center transition-all duration-300 group-hover:brightness-50 rounded-lg'
									/>

									<div className='absolute inset-0 flex flex-col justify-end px-6 py-6 opacity-0 transition-opacity duration-300 group-hover:opacity-100'>
										<h2 className='title line-clamp-1 text-xl text-white'>
											{project.title}
										</h2>

										<p className='line-clamp-1 text-sm text-white/80'>
											{project.summary}
										</p>

										<p className='text-xs font-light text-white/60'>
											{formatDate(project.publishedAt ?? '', locale)}
										</p>
									</div>
								</div>
							)}
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
