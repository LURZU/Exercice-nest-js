import { Connection } from 'mongoose';
import { DonMaterielSchema } from './schemas/don_materiel.schemas';

export const DonMaterielProviders = [
  {
    provide: 'DONMATERIEL_MODEL',
    useFactory: (connection: Connection) => connection.model('don-materiel', DonMaterielSchema),
    inject: ['DATABASE_CONNECTION'],
  },
];
