interface EmailTemplateProps {
	name: string;
	email: string;
	message: string;
}

export const ContactFormEmail: React.FC<Readonly<EmailTemplateProps>> = ({
	name,
	email,
	message,
}) => (
	<div>
		<h1>Contact form submission</h1>
		<p>
			From <strong>{name}</strong> at {email}
		</p>

		<h2>Message:</h2>
		<p>{message}</p>
	</div>
);
