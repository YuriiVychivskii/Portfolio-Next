'use client';

import { PostMetadata } from '@/lib/posts';
import { RotateCcw } from 'lucide-react';
import { useLocale, useTranslations } from 'next-intl';
import { useState } from 'react';
import Posts from './posts';
import { Button } from './ui/button';
import { Input } from './ui/input';

export default function PostsWithSearch({ posts }: { posts: PostMetadata[] }) {
	const [query, setQuery] = useState('');
	const filtered = posts.filter(post =>
		post.title?.toLowerCase().includes(query)
	);
	const locale = useLocale();
	const isFiltered = query.length > 0;
	const resetFilters = () => setQuery('');
	const t = useTranslations('PostsWithSearch');

	return (
		<div>
			<div className='mb-12 flex items-center gap-5'>
				<Input
					type='text'
					placeholder={t('placeholder')}
					value={query}
					onChange={e => setQuery(e.target.value)}
					className='h-9 w-full sm:w-1/2'
				/>
				{isFiltered && (
					<Button
						size='sm'
						variant='secondary'
						onClick={resetFilters}
						className='h-8 px-2 lg:px-3'
					>
						{t('reset')}
						<RotateCcw className='ml-2 h-4 w-4' />
					</Button>
				)}
			</div>

			<Posts posts={filtered} locale={locale} />
		</div>
	);
}
