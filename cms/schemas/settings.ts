import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'settings',
  title: 'Settings',
  type: 'document',
  fields: [
    defineField({
      name: 'siteTitle',
      title: 'Site Title',
      type: 'string',
    }),
    // site description
    defineField({
      name: 'siteDescription',
      title: 'Site Description',
      type: 'text',
    }),
    // site logo
    defineField({
      name: 'siteLogo',
      title: 'Site Logo',
      type: 'image',
      options: {
        hotspot: true,
      },
      validation: (Rule: {required: () => any}) => Rule.required(),
    }),
    // sharing image
    defineField({
      name: 'sharingImage',
      title: 'Sharing Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      // required
      validation: (Rule: {required: () => any}) => Rule.required(),
    }),
    // instagram link
    defineField({
      name: 'instagramLink',
      title: 'Instagram Link',
      type: 'url',
    }),
    // email
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    // footer links, from legalDoc references
    defineField({
      name: 'footerLinks',
      title: 'Footer Links',
      type: 'array',
      of: [
        {
          type: 'reference',
          to: [{type: 'legalDoc'}],
        },
      ],
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
