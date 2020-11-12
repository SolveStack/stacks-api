import { Router } from 'express';
import { UserComponent, StackComponent } from '../components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

/** 
 * POST method route
 * @example http://localhost:PORT/v1/stacks
 */
router.post("/", StackComponent.create)

/**
 * GET method route 
 * @example http://localhost:PORT/v1/stacks
 */
router.get('/', StackComponent.findAll);

/**
 * GET method route 
 * @example http://localhost:PORT/v1/stacks:id
 */
router.get('/:id', StackComponent.findOne);

/**
 * PATCH method route 
 * @example http://localhost:PORT/v1/stacks
 */
router.patch('/', StackComponent.update);

/**
 * DELETE method route
 * @example  http://localhost:PORT/v1/stacks/:id
*/
router.delete('/:id', StackComponent.remove);

/**
 * @export {express.Router}
 */
export default router;