import { Connection } from 'mongoose';
import { DonSchema } from './schemas/don.schemas';

export const DonProviders = [
  {
    provide: 'DON_MODEL',
    useFactory: (connection: Connection) => connection.model('Don', DonSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];  