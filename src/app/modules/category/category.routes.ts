import { Router } from 'express';
import { CategoryController } from './category.controller';

const router = Router();

// GET /api/categories - Get all categories
router.get('/', CategoryController.getAllCategories);

// TODO: Add more category routes as needed
// router.post('/', validateRequest(CategoryValidation.createCategoryValidationSchema), CategoryController.createCategory);
// router.get('/:id', CategoryController.getCategoryById);
// router.put('/:id', validateRequest(CategoryValidation.updateCategoryValidationSchema), CategoryController.updateCategory);
// router.delete('/:id', CategoryController.deleteCategory);

export const CategoryRoutes = router;
