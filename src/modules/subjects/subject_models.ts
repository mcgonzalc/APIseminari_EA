import { Schema, model, Document } from 'mongoose';

export interface ISubject extends Document {
  name: string;
  teacher: string;
  alumni: Schema.Types.ObjectId[];
}

const SubjectSchema = new Schema<ISubject>({
  name: { type: String, required: true },
  teacher: { type: String, required: true },
  alumni: [{ 
    type: Schema.Types.ObjectId,
    ref: 'User',
    required: true 
  }]
});

export default model<ISubject>('Subject', SubjectSchema);