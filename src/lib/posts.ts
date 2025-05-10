import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

const rootDirectory = path.join(process.cwd(), 'content', 'posts');

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

export async function getPostsBySlug(slug: string): Promise<Post | null> {
	try {
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

export async function getPosts(limit?: number): Promise<PostMetadata[]> {
	const files = fs.readdirSync(rootDirectory);

	const posts = await Promise.all(
		files.map(async file => await getPostMetadata(file))
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

export async function getPostMetadata(filepath: string): Promise<PostMetadata> {
	const slug = filepath.replace(/\.mdx$/, '');
	const filePath = path.join(rootDirectory, filepath);
	const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
	const { data } = matter(fileContent);

	const metadata: PostMetadata = { ...data, slug };

	return metadata;
}
