import { Schema, model } from 'mongoose';

export interface IDay {
  _id: string;
  title: string;
  content: string;
  dateCreated: Date;
  dateUpdated: Date;
  author: string;
}

const daySchema: Schema = new Schema(
  {
    title: String,
    content: String,
    author: String
  },
  {
    timestamps: true
  }
);

export const Day = model('Day', daySchema);