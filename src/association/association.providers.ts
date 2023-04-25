import { Connection } from 'mongoose';
import { AssociationSchema } from './schemas/association.schemas';

export const AssociationProviders = [
  {
    provide: 'ASSOCIATION_MODEL',
    useFactory: (connection: Connection) => connection.model('Association', AssociationSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];  