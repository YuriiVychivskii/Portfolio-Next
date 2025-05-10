import { getPostsBySlug } from '@/lib/posts';
import { formatDate } from '@/lib/utils';
import { ArrowLeftIcon } from 'lucide-react';
import { MDXRemote } from 'next-mdx-remote/rsc';
import Image from 'next/image';
import Link from 'next/link';

export default async function Post({ params }: { params: { slug: string } }) {
	const { slug } = params;
	const post = await getPostsBySlug(slug);

	if (!post) return <div>Post not found</div>;

	const { metadata, content } = post;
	const { title, image, author, publishedAt } = metadata;

	return (
		<section className='pb-24 pt-32'>
			<div className='container max-w-3xl'>
				<Link
					href='/posts'
					className='mb-8 inline-flex items-center gap-2 text-sm font-light '
				>
					<ArrowLeftIcon className='h-5 w-5' />
					<span>Back to posts</span>
				</Link>

				{image && (
					<div className='relative mb-6 h-96 w-full overflow-hidden rounded-lg'>
						<Image
							src={image}
							alt={title || ''}
							className='object-cover'
							fill
						></Image>
					</div>
				)}

				<header>
					<h1 className='title'>{title}</h1>
					<p className='mt-3 text-xs text-muted-foreground'>
						{author}/{formatDate(publishedAt ?? '')}
					</p>
				</header>

				<main className='prose dark:prose-invert mt-16'>
					<MDXRemote source={content} />
				</main>
			</div>
		</section>
	);
}
