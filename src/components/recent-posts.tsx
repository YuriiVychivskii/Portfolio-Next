import { getPosts } from '@/lib/posts';
import Link from 'next/link';
import Posts from './posts';

export default async function RecentPosts() {
	const post = await getPosts(4);

	return (
		<section className='pb-24'>
			<h2 className='title mb-2'>Recent posts</h2>
			<Posts posts={post} />

			<Link
				href='/posts'
				className='mt-8 inline-flex items-center gap-2 text-muted-foreground'
			>
				<span>All posts</span>
			</Link>
		</section>
	);
}
