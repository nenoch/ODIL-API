import { Request, Response, NextFunction } from 'express';

const dayService = require('../services/day.js');

export async function create(req: Request, res: Response, next: NextFunction) {
  try {
    const day = await dayService.postDay(req.body);
    return res.status(201).json(day);
  } catch (err) {
    return next(err);
  }
}

export async function findAll(req: Request, res: Response, next: NextFunction) {
  try {
    const days = await dayService.getDays();
    return res.status(200).json(days);
  } catch (err) {
    return next(err);
  }
}

export async function deleteById(req: Request, res: Response, next: NextFunction) {
  try {
    const day = await dayService.removeDayById(req.params.id);
    return res.status(204).json(day);
  } catch (err) {
    return next(err);
  }
}

export async function patch(req: Request, res: Response, next: NextFunction) {
  try {
    const day = await dayService.updateDay(req.params.id, req.body);
    return res.status(200).json(day);
  } catch (err) {
    return next(err);
  }
}
