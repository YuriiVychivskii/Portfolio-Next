import fs from 'fs';
import matter from 'gray-matter';
import path from 'path';

export type Project = {
	metadata: ProjectMetadata;
	content: string;
};

export type ProjectMetadata = {
	title?: string;
	summary?: string;
	image?: string;
	author?: string;
	publishedAt?: string;
	slug?: string;
};

function getRootDirectory(locale: string) {
	return path.join(process.cwd(), 'content', locale as string, 'projects');
}

export async function getProjectBySlug(
	locale: string,
	slug: string
): Promise<Project | null> {
	try {
		const rootDirectory = getRootDirectory(locale);
		const filePath = path.join(rootDirectory, `${slug}.mdx`);
		const fileContent = fs.readFileSync(filePath, { encoding: 'utf-8' });
		const { data, content } = matter(fileContent);

		const metadata: ProjectMetadata = { ...data, slug };

		return { metadata, content };
	} catch (error) {
		console.error(`Error reading post ${slug}:`, error);
		return null;
	}
}

export async function getProjects(
	locale: string,
	limit?: number
): Promise<ProjectMetadata[]> {
	const rootDirectory = getRootDirectory(locale);
	const files = fs.readdirSync(rootDirectory);

	const projects = await Promise.all(
		files.map(async file => await getProjectMetadata(locale, file))
	);

	projects.sort((a, b) => {
		if (new Date(a.publishedAt ?? '') < new Date(b.publishedAt ?? '')) {
			return 1;
		} else {
			return -1;
		}
	});

	if (limit) return projects.slice(0, limit);

	return projects;
}

export async function getProjectMetadata(
	locale: string,
	filepath: string
): Promise<ProjectMetadata> {
	const rootDirectory = getRootDirectory(locale);
	const slug = filepath.replace(/\.mdx$/, '');
	const filePath = path.join(rootDirectory, filepath);
	const fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });
	const { data } = matter(fileContent);

	const metadata: ProjectMetadata = { ...data, slug };

	return metadata;
}
