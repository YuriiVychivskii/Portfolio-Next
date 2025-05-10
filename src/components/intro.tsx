'use client';
import Image from 'next/image';

export default function Intro() {
	return (
		<section className='flex flex-col-revers items-center gap-x-10 gap-y-4 '>
			<div className='mt-2 flex-1 md:mt-0'>
				<h1 className='title no-underline'>Hey, I`m Yurii.</h1>
				<p className='mt-3 font-light text-muted-foreground'>
					I'm a Junior Frontend Developer based in Ivano-Frankivsk, Ukraine. I
					specialize in building modern, responsive web interfaces using React,
					Next.js, and TypeScript. I have experience developing pet projects
					with authentication, external API integration, database interaction,
					and state management with Redux. I pay special attention to project
					structure, clean and maintainable code, and styling with SCSS or
					Tailwind CSS. I follow best practices such as SOLID, DRY, and KISS
					principles. I'm open to collaboration and constantly improving my
					skills.
				</p>
			</div>

			<div className='relative'>
				<Image
					className='flex-1 rounded-lg grayscale'
					src='/images/author.png'
					alt='Yurii Vychivskii'
					width={175}
					height={175}
					priority
				/>
			</div>
		</section>
	);
}
