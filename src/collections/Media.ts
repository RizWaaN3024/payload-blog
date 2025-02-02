import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
	slug: 'media',
	access: {
		read: () => true,
	},
	upload: {
		staticDir: '../public/media',
		staticURL: '/media',
		imageSizes: [
			{
				name: 'thumbnail',
				width: 400,
				height: 300,
				position: 'centre'
			},
			{
				name: 'featured',
				width: 1200,
				height: 600,
				position: 'centre'
			}
		]

	},
	fields: [
		{
			name: 'alt',
			type: 'text',
			required: true,
		},
	],
}
