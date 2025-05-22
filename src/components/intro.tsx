'use client';
import Image from 'next/image';

export default function Intro() {
	return (
		<section className='flex flex-col-revers items-center gap-x-10 gap-y-4 pb-24'>
			<div className='mt-2 flex-1 md:mt-0'>
				<h1 className='title no-underline'>Hey, I`m Yurii.</h1>
				<p className='mt-3 font-light text-muted-foreground'>
					I'm a Junior Frontend Developer based in Ivano-Frankivsk, Ukraine. I
					specialize in building modern, responsive web interfaces using React,
					Next.js, and TypeScript.
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
