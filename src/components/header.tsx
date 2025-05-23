'use client';
import Image from 'next/image';
import Link from 'next/link';
import ToggleLocale from './toggle-locale';
import ToggleTheme from './toggle-theme';

export default function Header() {
	return (
		<header className='fixed inset-x-0 top-0 z-50 bg-background/75 py-6 backdrop-blur-sm'>
			<nav className='container flex max-w-3xl items-center justify-between'>
				<div>
					<Link href='/' className='font-serif text-2xl font-bold'>
						<Image src='/images/logo.png' alt='' width={30} height={30} />
					</Link>
				</div>

				<ul className='flex items-center gap-6 text-sm font-light text-muted-foreground'>
					<li className='transition-colors hover:text-foreground'>
						<Link href='/posts'>Posts</Link>
					</li>
					<li className='transition-colors hover:text-foreground'>
						<Link href='/projects'>Projects</Link>
					</li>
					<li className='transition-colors hover:text-foreground'>
						<Link href='/contact'>Contact</Link>
					</li>
				</ul>

				<div className='flex items-center'>
					<ToggleTheme />
					<ToggleLocale />
				</div>
			</nav>
		</header>
	);
}
