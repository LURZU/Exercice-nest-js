import { Connection } from 'mongoose';
import { AssociationSchema } from './schemas/association.schema';

export const associationsProviders = [
  {
    provide: 'ASSOCIATION_MODEL',
    useFactory: (connection: Connection) => connection.model('Association', AssociationSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
