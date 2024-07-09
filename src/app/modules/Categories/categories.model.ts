import { model, Schema } from 'mongoose';
import TCategories from './categories.interfact';

const categorieSchema = new Schema<TCategories>({
  name: {
    type: String,
    required: true,
    lowercase: true,
    trim: true,
  },
  image: {
    type: String,
    required: true,
    trim: true,
  },
});

const categorie = model<TCategories>('categorie', categorieSchema);

export default categorie;
