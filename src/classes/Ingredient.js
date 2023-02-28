class Ingredient {
  constructor(data) {
    this.id = data.id;
    this.quantity = {'amount': data.quantity.amount, 'unit': data.quantity.unit}
    this.name;
    this.costInCents;
  }

  returnIngredientName(array, num) {
    const findName = array.find((ingredient) => ingredient.id === num);
    if (findName === undefined) {
      return 'Error';
    } else {
      this.name = findName.name;
      return this.name;
    }
  }

  returnIngredientCost(array, num) {
    const findCost = array.find(ingred => ingred.id === num);
    if (findCost === undefined) {
      return 'Error';
    } else {
      this.costInCents = findCost.estimatedCostInCents;
      return this.costInCents;
    }
  }
}
export default Ingredient;