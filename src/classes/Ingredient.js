class Ingredient {
  constructor(data) {
    this.id = data.id;
    this.name;
    this.quantity = {
      'amount': data.quantity.amount, 'unit': data.quantity.unit
    }
    this.costInCents;
  };

  returnIngredientName(array, num) {
    const findName = array.find(ingredient => ingredient.id === num);
    if (findName === undefined) {
      console.log('error in ingred name')
      return 'Error';
    } else {
      this.name = findName.name;
      return this.name;
    }
  };

  returnIngredientCost(array, num) {
    const findCost = array.find(ingredient => ingredient.id === num);
    if (findCost === undefined) {
      console.log('error in ingred cost')
      return 'Error';
    } else {
      this.costInCents = findCost.estimatedCostInCents
      return this.costInCents;
    };
  };
};
export default Ingredient;