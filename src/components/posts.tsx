import { PostMetadata } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import Link from 'next/link';

export default function Posts({ posts }: { posts: PostMetadata[] }) {
	console.log(posts);

	return (
		<ul className='flex flex-col gap-8'>
			{posts.map(post => (
				<li key={post.slug}>
					<Link
						href={`/posts/${post.slug}`}
						className='flex justify-between gap-x-4 gap-y-1'
					>
						<div className='max-w-lg'>
							<p className='text-lg font-semibold'>{post.title}</p>
							<p className='mt-1 line-clamp-2 text-sm font-light text-muted-foreground'>
								{post.summary}
							</p>
						</div>

						{post.publishedAt && (
							<p className='mt-1 text-sm font-light'>
								{formatDate(post.publishedAt)}
							</p>
						)}
					</Link>
				</li>
			))}
		</ul>
	);
}
