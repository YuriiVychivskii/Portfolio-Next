import PostsWithSearch from '@/components/posts-with-search';
import { getPosts } from '@/lib/posts';
import { getTranslations } from 'next-intl/server';

type Params = Promise<{ locale: string }>;

export default async function PostsPage({ params }: { params: Params }) {
	const { locale } = await params;
	const posts = await getPosts(locale);
	const t = await getTranslations('Main');

	return (
		<section className='pb-24 pt-40'>
			<div className='container max-w-3xl'>
				<h1 className='title mb-12'>{t('posts')}</h1>

				<PostsWithSearch posts={posts} />
			</div>
		</section>
	);
}
