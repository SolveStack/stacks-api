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


// router.get('/', StackComponent.findAll);

/**
 * @export {express.Router}
 */
export default router;