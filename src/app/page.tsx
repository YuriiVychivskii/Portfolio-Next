import Intro from '@/components/intro';
import NewsLetterForm from '@/components/news-letter-form';
import RecentPosts from '@/components/recent-posts';
import RecentProjects from '@/components/recent-projects';

export default function Home() {
	return (
		<section className='py-24'>
			<div className='container max-w-3xl'>
				<Intro />

				<RecentPosts />
				<RecentProjects />
				<NewsLetterForm />
			</div>
		</section>
	);
}
