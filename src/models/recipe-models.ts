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
  ingredient?: IIngredient;
  amount?: null | number;
  amountType?: null | string;
}

export interface IIngredient {
  ingredientId: number;
  name: string;
  Type: string;
}