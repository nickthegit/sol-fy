import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'legalDoc',
  title: 'Legal Doc',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    // slug
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
      // required
      validation: (Rule: {required: () => any}) => Rule.required(),
    }),
    // blockContent
    defineField({
      name: 'content',
      title: 'Content',
      type: 'blockContent',
    }),
  ],
  preview: {
    select: {
      title: 'title',
    },
  },
})
