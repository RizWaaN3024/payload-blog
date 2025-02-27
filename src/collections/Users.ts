import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
	slug: 'users',
	auth: true,
	admin: {
		useAsTitle: 'email',
	},
	access: {
		read: () => true
	},

	fields: [

		{
			name: 'name',
			type: 'text'
		},

		{
			name: 'roles',
			type: 'select',
			hasMany: true,
			defaultValue: ['editor'],
			options: [
				{ label: 'Admin', value: 'admin' },
				{ label: 'Editor', value: 'editor' },
			]
		}
	],
}
