import { Router } from 'express';
import { CategoryRoutes } from '../modules/category/category.routes';
import { ProductTypeRoutes } from '../modules/productTypes/productTypes.routes';

const router = Router();

router.use('/api/v1/categories', CategoryRoutes);
router.use('/api/v1/product-types', ProductTypeRoutes);

export default router;
