import express from 'express';
import { createRecipes, deleteRecipes, getAllRecipes,  getRecipesById, updateRecipes } from '../Controllers/recipeController.js';


const router = express.Router();

router.get("/getdata",getAllRecipes);
router.get("/getdata/:id",getRecipesById);
router.post("/create",createRecipes);
router.put("/update/:id",updateRecipes);
router.delete("/delete/:id",deleteRecipes);

export default router;
