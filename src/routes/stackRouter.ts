import { StackComponent } from '../components';
import { Router } from 'express';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

// Get List of Stacks
router.get('/', StackComponent.findAll);

// Find Stack by ID
router.get('/:id', StackComponent.findOne)


/**
 * @export {express.Router}
 */
export default router;