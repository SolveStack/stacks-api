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
 * @example http://localhost:PORT/v1/stacks
 */

router.get('/:id', StackComponent.findOne);

/**
 * @export {express.Router}
 */
export default router;