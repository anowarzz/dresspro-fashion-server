import { Router } from 'express';
import { ProductTypeController } from './productTypes.controller';

const router = Router();

// GET /api/v1/productTypes - Get all product types
router.get('/', ProductTypeController.getAllProductTypes);
// router.post('/', validateRequest(ProductTypeValidation.createProductTypeValidationSchema), ProductTypeController.createProductType);
// router.get('/:id', ProductTypeController.getProductTypeById);
// router.put('/:id', validateRequest(ProductTypeValidation.updateProductTypeValidationSchema), ProductTypeController.updateProductType);
// router.delete('/:id', ProductTypeController.deleteProductType);

export const ProductTypeRoutes = router;
