import { MDXRemote, MDXRemoteProps } from 'next-mdx-remote/rsc';
import { highlight } from 'sugar-high';

function Code({ children, ...props }: any) {
	let codeHTML = highlight(children);
	return <code dangerouslySetInnerHTML={{ __html: codeHTML }} {...props} />;
}

const components = {
	code: Code,
};

export default function MDXContent(
	props: React.JSX.IntrinsicAttributes & MDXRemoteProps
) {
	return (
		<MDXRemote
			{...props}
			components={{ ...components, ...(props.components || {}) }}
		/>
	);
}
