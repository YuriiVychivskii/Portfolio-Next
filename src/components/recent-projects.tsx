import { getProjects } from '@/lib/projects';
import Link from 'next/link';
import Projects from './projects';

export default async function RecentProjects() {
	const projects = await getProjects(2);

	return (
		<section className='pb-24'>
			<h2 className='title mb-2'>Recent projects</h2>
			<Projects projects={projects} />

			<Link
				href='/projects'
				className='mt-8 inline-flex items-center gap-2 text-muted-foreground'
			>
				<span>All projects</span>
			</Link>
		</section>
	);
}
