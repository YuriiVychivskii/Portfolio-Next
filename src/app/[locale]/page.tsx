import Intro from '@/components/intro';
import NewsLetterForm from '@/components/news-letter-form';
import RecentPosts from '@/components/recent-posts';
import RecentProjects from '@/components/recent-projects';

type Params = Promise<{ locale: string }>;

export default async function Home({ params }: { params: Params }) {
	const { locale } = await params;
	return (
		<section className='py-24'>
			<div className='container max-w-3xl'>
				<Intro />

				<RecentPosts locale={locale} />
				<RecentProjects locale={locale} />
				<NewsLetterForm />
			</div>
		</section>
	);
}
