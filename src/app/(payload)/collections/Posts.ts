import { CollectionConfig } from "payload";


export const Posts: CollectionConfig = {
    slug: 'posts',
    admin: {
        useAsTitle: 'title',
        defaultColumns: ['title', 'status', 'publishedDate']
    },
    access: {
        read: () => true
    },
    fields: [
        {
            name: 'title',
            type: 'text',
            required: true
        },
        {
            name: 'slug',
            type: 'text',
            admin: {
                position: 'sidebar',
            },
            hooks: {
                beforeValidate: [
                    ({ data }) => {
                        return data?.title?.toLowerCase().replace(/ /g, '-') ?? '';
                    }
                ]
            }
        },
        {
            name: 'content',
            type: 'richText',
            required: true
        },
        {
            name: 'featuredImage',
            type: 'upload',
            relationTo: 'media',
            required: true
        },
        {
            name: 'status',
            type: 'select',
            options: [
                { value: 'draft', label: 'Draft' },
                { value: 'published', label: 'Published' }
            ],
            defaultValue: 'draft',
            admin: {
                position: 'sidebar'
            }
        },
        {
            name: 'categories',
            type: 'relationship',
            relationTo: 'categories',
            hasMany: true,
          },
    ]
}