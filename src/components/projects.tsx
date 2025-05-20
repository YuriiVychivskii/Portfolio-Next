import { ProjectMetadata } from '@/lib/projects';
import { formatDate } from '@/lib/utils';
import Image from 'next/image';
import Link from 'next/link';

export default function Projects({
	projects,
}: {
	projects: ProjectMetadata[];
}) {
	return (
		<ul className='grid grid-cols-1 gap-8 sm:grid-cols-2'>
			{projects.map(project => {
				return (
					<li key={project.slug} className='groupe relative'>
						<Link href={`/projects/${project.slug}`}>
							{project.image && (
								<div className='h-72 w-full overflow-hidden bg-muted sm:h-60'>
									<Image
										src={project.image}
										alt={project.title || ''}
										fill
										className='rounded-lg object-center object-cover transition-all duration-300'
									/>
								</div>
							)}

							<div className='absolute insert-x-o bottom-0 translate-y-2 px-6 py-6'>
								<h2 className='title line-clamp-1 text-xl no-underline'>
									{project.title}
								</h2>

								<p className='line-clamp-1 text-sm text-muted-foreground'>
									{project.summary}
								</p>

								<p className='text-xs font-light text-muted-foreground'>
									{formatDate(project.publishedAt ?? '')}
								</p>
							</div>
						</Link>
					</li>
				);
			})}
		</ul>
	);
}
