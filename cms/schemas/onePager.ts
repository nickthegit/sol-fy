import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'onePager',
  title: 'One Pager',
  type: 'document',
  fields: [
    defineField({
      name: 'heading1',
      title: 'Heading 1',
      type: 'string',
      // max 40 characters
      validation: (Rule: {max: (arg0: number) => any}) => Rule.max(40),
    }),
    defineField({
      name: 'heading2',
      title: 'Heading 2',
      type: 'string',
      // max 40 characters
      validation: (Rule: {max: (arg0: number) => any}) => Rule.max(40),
    }),
    defineField({
      name: 'heroImage',
      title: 'Hero Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'heroImageAlt',
          title: 'Hero Image Alt',
          type: 'string',
          description: 'Alt text for the hero image',
          // required
          validation: (Rule: {required: () => any}) => Rule.required(),
        },
      ],
      // required
      validation: (Rule: {required: () => any}) => Rule.required(),
    }),
    // intro
    defineField({
      name: 'introImage',
      title: 'Intro Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'introImageAlt',
          title: 'Intro Image Alt',
          type: 'string',
          description: 'Alt text for the intro image',
          // required
          validation: (Rule: {required: () => any}) => Rule.required(),
        },
      ],
      // required
      validation: (Rule: {required: () => any}) => Rule.required(),
    }),
    defineField({
      name: 'introTitle',
      title: 'Intro Title',
      type: 'string',
      // max 90 characters
      validation: (Rule: {max: (arg0: number) => any}) => Rule.max(90),
    }),
    defineField({
      name: 'introText',
      title: 'Intro Text',
      type: 'text',
      // max 340 characters
      validation: (Rule: {max: (arg0: number) => any}) => Rule.max(340),
    }),
    // gallery
    defineField({
      name: 'galleryImages',
      title: 'Gallery Images',
      type: 'array',
      of: [
        {
          type: 'image',
          options: {
            hotspot: true,
          },
        },
      ],
      options: {
        layout: 'grid',
      },
      // required
      validation: (Rule: {required: () => any}) => Rule.required(),
    }),
    // benefits
    defineField({
      name: 'benefits',
      title: 'Benefits',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'benefit',
              title: 'Benefit',
              type: 'array',
              of: [
                {
                  type: 'block',
                  styles: [{title: 'Normal', value: 'normal'}],
                  lists: [],
                },
              ],
              options: {
                layout: 'tags',
              },
              // required
              validation: (Rule: {required: () => any}) => Rule.required(),
            },
          ],
        },
      ],
      options: {
        layout: 'tags',
      },
      // required
      validation: (Rule: {required: () => any}) => Rule.required(),
    }),
    // footer statement
    defineField({
      name: 'footerStatement',
      title: 'Footer Statement',
      type: 'blockContent',
      // required
      validation: (Rule: {required: () => any}) => Rule.required(),
    }),
    // affiliates
    defineField({
      name: 'affiliateLogos',
      title: 'Affiliate Logos',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
    // logos
    defineField({
      name: 'logos',
      title: 'Logos',
      type: 'array',
      of: [
        {
          type: 'image',
        },
      ],
      options: {
        layout: 'grid',
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
