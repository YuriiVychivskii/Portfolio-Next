import Projects from '@/components/projects';
import { getProjects } from '@/lib/projects';

export default async function ProjectsPage() {
	const projects = await getProjects();

	return (
		<section className='pb-24 pt-40'>
			<div className='container max-w-3xl'>
				<div className='title mb-2'>Projects</div>

				<Projects projects={projects} />
			</div>
		</section>
	);
}
