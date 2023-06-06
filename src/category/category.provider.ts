import { Connection } from 'mongoose';
import { CategorySchema } from './schema/category.schema';

export const categoryProviders = [
  {
    provide: 'CATEGORY_MODEL',
    useFactory: (connection: Connection) => connection.model('Category', CategorySchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
