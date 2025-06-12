import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export type Post = {
	metadata: PostMetadata;
	content: string;
};

export type PostMetadata = {
	title?: string;
	summary?: string;
	image?: string;
	author?: string;
	publishedAt?: string;
	slug?: string;
};

function getRootDirectory(locale: string) {
	return path.join(process.cwd(), 'content', locale, 'posts');
}

export async function getPostsBySlug(
	locale: string,
	slug: string
): Promise<Post | null> {
	try {
		const rootDirectory = getRootDirectory(locale);
		const filePath = path.join(rootDirectory, `${slug}.mdx`);
		const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
		const { data, content } = matter(fileContent);

		const metadata: PostMetadata = { ...data, slug };

		return { metadata, content };
	} catch (error) {
		console.error(`Error reading post ${slug}:`, error);
		return null;
	}
}

export async function getPosts(
	locale: string,
	limit?: number
): Promise<PostMetadata[]> {
	const rootDirectory = getRootDirectory(locale);
	const files = fs.readdirSync(rootDirectory);

	const posts = await Promise.all(
		files.map(async file => await getPostMetadata(locale, file))
	);

	posts.sort((a, b) => {
		if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
			return 1;
		} else {
			return -1;
		}
	});

	if (limit) return posts.slice(0, limit);

	return posts;
}

export async function getPostMetadata(
	locale: string,
	filepath: string
): Promise<PostMetadata> {
	const rootDirectory = getRootDirectory(locale);
	const slug = filepath.replace(/\.mdx$/, '');
	const filePath = path.join(rootDirectory, filepath);
	const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
	const { data } = matter(fileContent);

	const metadata: PostMetadata = { ...data, slug };

	return metadata;
}
