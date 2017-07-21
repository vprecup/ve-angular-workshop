export interface IRecipe {
  recipeId: number;
  name: string;
  price: number;
  time: number;
  image: string;
  recipeIngredients: IRecipeIngredient[];
  recipeInstructions: IRecipeInstruction[];
}

export interface IRecipeInstruction {
  recipeInstructionId: number;
  instructionText: string;
}

export interface IRecipeIngredient {
  recipeIngredientId?: number;
  ingredient?: Ingredient;
  amount?: number;
  amountType?: string;
}

export interface Ingredient {
  ingredientId: number;
  name: string;
  Type: string;
}
