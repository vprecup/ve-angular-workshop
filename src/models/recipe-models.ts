interface IRecipe {
  recipeId: number;
  name: string;
  price: number;
  time: number;
  image: string;
  recipeIngredients: IRecipeIngredient[];
  recipeInstructions: IRecipeInstruction[];
}

interface IRecipeInstruction {
  recipeInstructionId: number;
  instructionText: string;
}

interface IRecipeIngredient {
  recipeIngredientId?: number;
  ingredient?: IIngredient;
  amount?: null | number;
  amountType?: null | string;
}

interface IIngredient {
  ingredientId: number;
  name: string;
  Type: string;
}