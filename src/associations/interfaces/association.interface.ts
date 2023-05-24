import { Document } from 'mongoose';

export interface Association extends Document {
  readonly rna: string;
  readonly name: string;
  readonly adress: string;
  readonly town: string;
  readonly postcode: number;
  readonly coordinate: string;
  readonly phone: number;
  readonly type: string;
}

//Cette interface Association décrit la structure des documents qui seront stockés dans la collection MongoDB associée à ce modèle.
//En étendant l'interface Document de Mongoose, cette interface Association inclut également des propriétés supplémentaires
// comme _id, createdAt, updatedAt et d'autres propriétés gérées par Mongoose.
//Cette interface permet de définir le schéma des données stockées dans la collection MongoDB et peut être utilisée avec Mongoose pour créer un modèle qui peut être utilisé pour 
//effectuer des opérations CRUD (Create, Read, Update, Delete) sur la collection MongoDB associée.

//L'utilisation de readonly empêche simplement la modification directe de la propriété dans le code, mais ne restreint 
//pas les modifications effectuées par le biais des méthodes de mise à jour de Mongoose.