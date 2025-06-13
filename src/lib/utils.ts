import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
	return twMerge(clsx(inputs));
}

export function formatDate(date: string, locale: string) {
	const currentLocale = locale === 'ua' ? 'uk-UA' : 'en-US';
	return new Date(date).toLocaleDateString(currentLocale, {
		day: 'numeric',
		month: 'long',
		year: 'numeric',
	});
}
