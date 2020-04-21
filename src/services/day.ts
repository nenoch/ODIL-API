import * as mongoose from 'mongoose';
import { Day, IDay } from '../models/day';

/**
 * @returns Promise
 * GET Day[]
 */
export async function getDays(): Promise<IDay[]> {
  return await Day.find().lean();
}

/**
 * @param {Object} dayData IDay payload
 * @returns Promise
 * POST Day
 * Create
 */
export async function postDay(dayData: IDay): Promise<IDay> {
  if (Object.keys(dayData).length === 0) throw 'the body of the request can not be empty';
  if (!dayData.content) throw 'the content can not be empty';

  const day = new Day({
    title: dayData.title || 'Untitled Day',
    content: dayData.content,
    author: dayData.author || 'Anon odiler'
  });

  day.save();
  return day.toObject();
}

/**
 * @returns Promise
 * DELETE Day
 */
export async function removeDayById(id: string): Promise<void> {
    if (!mongoose.Types.ObjectId.isValid(id)) throw 'Invalid ID';
    return await Day.findOneAndRemove({ _id: id }).lean();
}

/**
 * @param {string} id Day ID
 * @param {Object} patch partial IDay payload
 * @returns Promise
 * PATCH Day
 */
export async function updateDay(id: string, patch: Partial<IDay>): Promise<IDay> {
    if (!mongoose.Types.ObjectId.isValid(id)) throw 'Invalid ID';
    return await Day.findOneAndUpdate({ _id: id }, patch, { new: true }).lean();
}