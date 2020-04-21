import { Request, Response, NextFunction } from 'express';
import {
  postDay,
  getDays,
  removeDayById,
  updateDay
} from '../services/day';

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const day = await postDay(req.body);
    return res.status(201).json(day);
  } catch (err) {
    return next(err);
  }
}

export async function findAll(req: Request, res: Response, next: NextFunction) {
  try {
    const days = await getDays();
    return res.status(200).json(days);
  } catch (err) {
    return next(err);
  }
}

export async function deleteById(req: Request, res: Response, next: NextFunction) {
  try {
    const day = await removeDayById(req.params.id);
    return res.status(204).json(day);
  } catch (err) {
    return next(err);
  }
}

export async function patch(req: Request, res: Response, next: NextFunction) {
  try {
    const day = await updateDay(req.params.id, req.body);
    return res.status(200).json(day);
  } catch (err) {
    return next(err);
  }
}
