import recipes from "../Model/recipesSchema.js";

//POST
export const createRecipes = async (req, res) => { 
    try {
      const newRecipe = new recipes(req.body);
      await newRecipe.save();
      res
        .status(200)
        .json({ message: "Recipes added Successfully", data: newRecipe });
    } catch (error) {
      res.status(500).json({ message: error.message });
    }
};

//GET Method
export const getAllRecipes = async (req, res) => {
  try {
    const getRecipes = await recipes.find();
    res
      .status(200)
      .json({ message: "Here are your delicious recipes!", data: getRecipes });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//GET BY ID Method
export const getRecipesById = async (req, res) => {
  try {
    const recipesId = req.params.id;
    const recipe = await recipes.findById(recipesId);
    if (!recipe) {
      return res.ststus(404).json({ message: "Recipes Not Found" });
    }
    res
      .status(200)
      .json({ meassage: "Your Recipes Retrived Successfully", data: recipe });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//PUT Method
export const updateRecipes = async (req, res) => {
  try {
    const recipesId = req.params.id;
    const { name, procedure, ingredients, duration } = req.body;
    const result = await recipes.findByIdAndUpdate(
      { _id: recipesId },
      { name, procedure, ingredients, duration },
      { new: true }
    );
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Recipes Not Found" });
    }
    // const product =await recipes.findById(recipesId);
    res.status(200).json({ message: "Recipes Updated", data: result });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

//Delete Method
export const deleteRecipes = async (req, res) => {
  try {
    const recipesId = req.params.id;
    const result = await recipes.findByIdAndDelete({ _id: recipesId });
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: "Recipes Not Found" });
    }
    const recipe = await recipes.find();
    res
      .status(200)
      .json({ message: "Recipe was Deleted Successfully", data: recipe });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};
