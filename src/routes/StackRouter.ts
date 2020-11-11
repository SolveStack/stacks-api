import { Router } from 'express';
import { StackComponent } from '../components';

/**
 * @constant {express.Router}
 */
const router: Router = Router();

router.get('/', StackComponent.findAll);

/**
 * @export {express.Router}
 */
export default router;