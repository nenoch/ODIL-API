import { Application } from 'express';
import {
    create,
    findAll,
    deleteById,
    patch
} from '../controllers/day';

export class DayRoutes {
  public routes(app: Application): void {

    app.route('/days')
    .get(findAll)
    .post(create);

    app.route('/days/:id')
    .delete(deleteById)
    .patch(patch);
  }
}
