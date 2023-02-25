import {defineField, defineType} from 'sanity'
import ImageUpload from '../components/ImageUpload'

export default defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'product_name',
      title: 'Product Name',
      type: 'string',
    }),
    defineField({
      name: 'product_description',
      title: 'Product Description',
      type: 'text',
    }),
    defineField({
      name: 'product_price',
      title: 'Product Price',
      type: 'number',
    }),
    defineField({
      name: 'product_image',
      title: 'Product Image',
      type: 'image',
      components: {
        input: ImageUpload,
      },
    }),
    defineField({
      name: 'product_video',
      title: 'Product Video',
      type: 'file',
    }),
  ],
})
