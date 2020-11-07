import { Router } from 'express';
import { StackComponent } from '../components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

router.get('/', StackComponent.findAll);

router.get('/:id', StackComponent.findOne);

router.post('/', StackComponent.create);

export default router;
