import { Link } from '@/i18n/navigation';
import { getPosts } from '@/lib/posts';
import { getTranslations } from 'next-intl/server';
import Posts from './posts';

export default async function RecentPosts({ locale }: { locale: string }) {
	const post = await getPosts(locale, 4);
	const t = await getTranslations('RecentPosts');

	return (
		<section className='pb-24'>
			<h2 className='title mb-2'>{t('title')}</h2>
			<Posts posts={post} locale={locale} />

			<Link
				href='/posts'
				className='mt-8 inline-flex items-center gap-2 text-muted-foreground'
			>
				<span>{t('all')}</span>
			</Link>
		</section>
	);
}
