// import { headers as getHeaders } from 'next/headers.js'
import Image from 'next/image'
import { getPayload } from 'payload'
import React from 'react'
// import { fileURLToPath } from 'url'
import config from '@/payload.config';
import './globals.css';

export default async function HomePage() {
	const payloadConfig = await config
	const payload = await getPayload({ config: payloadConfig })
	const { docs: posts } = await payload.find({
		collection: 'posts',
		where: {
			status: {
				equals: 'published'
			}
		},
		depth: 2
	})
	// const fileURL = `vscode://file/${fileURLToPath(import.meta.url)}`
	return (
		<div className="container mx-auto px-4 py-8">
			<h1 className="text-4xl font-bold mb-8">Blog Posts</h1>
			<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
				{posts.map((post: any) => (
					<React.Fragment key={post?.id}>
						<h2 className="bg-red-500 text-red-600">{post?.title}</h2>
						<div className='relative h-10 w-10'>
							<Image
								src={post?.featuredImage?.url}
								// fill
								width={250}
								height={250}
								alt={post?.featuredImage?.alt}
								className='w-10 h-10 object-contain rounded-lg'
							/>
						</div>
					</React.Fragment>
				))}
			</div>
		</div>
	);
}
