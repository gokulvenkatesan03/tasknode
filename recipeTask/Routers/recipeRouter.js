const express = require('express');
const {
    createRecipe,
    getAllRecipes,
    getRecipeById,
    updateRecipe,
    deleteRecipe,
} = require('../Controllers/recipeController');

const router = express.Router();

router.get("/getdata",getAllRecipes);
router.get("/getdata/:id",getRecipeById);
router.post("/create",createRecipe);
router.put("/update/:id",updateRecipe);
router.delete("/delete/:id",deleteRecipe);

module.exports = router;
