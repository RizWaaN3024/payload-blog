import { CollectionConfig } from "payload";


export const Categories: CollectionConfig = {
    slug: 'categories',
    admin: {
        useAsTitle: 'name',
    },
    access: {
        read: () => true,
    },
    fields: [
        {
            name: 'name',
            type: 'text',
            required: true
        },
        {
            name: 'slug',
            type: 'text',
            hooks: {
                beforeValidate: [
                    ({ data }) => {
                        return data?.name?.toLowerCase().replace(/ /g, '-') ?? '';
                    }
                ]
            }
        },
        {
            name: 'description',
            type: 'textarea'
        }
    ]
}