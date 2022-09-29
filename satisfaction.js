/**
 * Given an array of fast food restaurants, return a new sorted
 * array in descending order by:
 *
 *   1. customerService
 *   2. foodVariety
 *   3. valueForMoney
 *   4. timeToMake
 *   5. taste
 *   6. name (in lexicographical order, case-insensitive)
 *
 * For example, if two restaurant have the same customerService
 * and foodVariety, the one with a higher valueForMoney will be
 * in front (nearer to the start of the returned array).
 *
 * If all numerical fields are equal and the name is compared,
 * "hungry Jacks" will be before "KFC" because "h" is before "K".
 *
 * WARNING: You should NOT modify the order of the original array.
 *
 * @param {
 *   Array<{
 *     name: string,
 *     customerService: number,
 *     foodVariety: number,
 *     valueForMoney: number,
 *     timeToMake: number,
 *     taste: number
 *   }>
 * } fastFoodArray with information about fast food restaurants,
 * which should not be modified.
 * @returns array with the same items, sorted by the key-order given.
 */
function sortedFastFood(fastFoodArray) {

  let arr = fastFoodArray.sort((a, b) => {
    if (a.customerService > b.customerService) return -1;
    else if (a.customerService < b.customerService) return 1;

    if (a.foodVariety > b.foodVariety) return -1;
    else if (a.foodVariety < b.foodVariety) return 1;

    if (a.valueForMoney > b.valueForMoney) return -1;
    else if (a.valueForMoney < b.valueForMoney) return 1;

    if (a.timeToMake > b.timeToMake) return -1;
    else if (a.timeToMake < b.timeToMake) return 1;

    if (a.taste > b.taste) return -1;
    else if (a.taste < b.taste) return 1;

    if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
    else if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
  });

  return arr;

}


/**
 * Given an array of fast food restaurants, return a new sorted
 * array ranked by the overall satisfaction.
 *
 * The satisfaction of a restaurant is the average score between
 * customerService, foodVariety, valueForMoney, timeToMake and taste.
 *
 * You do not need to round the satisfaction value.
 *
 * If two restaurants have the same satisfaction, the names
 * are compared in lexigraphical order (case-insensitive).
 * For example, "hungry Jacks" will appear before "KFC" because
 * "h" is before "K".
 *
 * WARNING: you should NOT modify the order of the original array.
 *
 * @param {
 *   Array<{
 *     name: string,
 *     customerService: number,
 *     foodVariety: number,
 *     valueForMoney: number,
 *     timeToMake: number,
 *     taste: number
 *  }>
 * } fastFoodArray with information about fast food restaurants,
 * which should not be modified.
 * @returns {
 *   Array<{
 *     restaurantName: string,
 *     satisfaction: number,
 *   }>
 * } a new sorted array based on satisfaction. The restaurantName
 * will be the same as the original name given.
 */
function sortedSatisfaction(fastFoodArray) {
  let arr = []
  for (const i in fastFoodArray) {
    const obj = {
      name: fastFoodArray[i].name,
      satisfaction: (fastFoodArray[i].customerService + fastFoodArray[i].foodVariety + fastFoodArray[i].valueForMoney +
        fastFoodArray[i].timeToMake + fastFoodArray[i].taste) / 5,
    }
    arr.push(obj);
  }
  arr = arr.sort((a, b) => {
    if (a.satisfaction > b.satisfaction) return -1;
    else if (a.satisfaction < b.satisfaction) return 1;

    if (a.name.toUpperCase() < b.name.toUpperCase()) return -1;
    else if (a.name.toUpperCase() > b.name.toUpperCase()) return 1;
  })

  return arr;
}

// ========================================================================= //

/**
 * Execute the file with:
 *     $ node satisfaction.js
 *
 * Feel free to modify the below to test your functions.
 */
const fastFoods = [
  {
    name: 'Second fastFood, third satisfaction (4.6)',
    customerService: 4,
    foodVariety: 5,
    valueForMoney: 5,
    timeToMake: 4,
    taste: 4,
  },
  {
    // Same as above, but name starts with "f"
    // which is before "S" (case-insensitive)
    name: 'First fastFood, second satisfaction (4.6)',
    customerService: 5,
    foodVariety: 5,
    valueForMoney: 5,
    timeToMake: 4,
    taste: 4
  },
  {
    // Worse foodVariety, but better overall
    name: 'Third fastFood, first satisfaction (4.8)',
    customerService: 5,
    foodVariety: 4,
    valueForMoney: 5,
    timeToMake: 5,
    taste: 5
  },
];
const t = [
  {
    name: 'KFC',
    customerService: 1,
    foodVariety: 1,
    valueForMoney: 1,
    timeToMake: 1,
    taste: 1,
  },
  {
    name: 'hungry jacks',
    customerService: 1,
    foodVariety: 1,
    valueForMoney: 1,
    timeToMake: 1,
    taste: 1,
  },
]
const f = [
  {
    name: 'tings',
    customerService: 1,
    foodVariety: 1,
    valueForMoney: 1,
    timeToMake: 1,
    taste: 1,
  },
  {
    name: 'able',
    customerService: 2,
    foodVariety: 2,
    valueForMoney: 2,
    timeToMake: 2,
    taste: 2,
  },
  {
    name: 'bsds',
    customerService: 5,
    foodVariety: 5,
    valueForMoney: 5,
    timeToMake: 5,
    taste: 5,
  },
  {
    name: 'cdasd',
    customerService: 4,
    foodVariety: 4,
    valueForMoney: 4,
    timeToMake: 4,
    taste: 4,
  },
  {
    name: 'ddwd',
    customerService: 3,
    foodVariety: 3,
    valueForMoney: 3,
    timeToMake: 3,
    taste: 3,
  },
  {
    name: 'aaaaa',
    customerService: 3,
    foodVariety: 3,
    valueForMoney: 3,
    timeToMake: 3,
    taste: 3,
  },
  {
    name: 'a',
    customerService: 5,
    foodVariety: 5,
    valueForMoney: 5,
    timeToMake: 5,
    taste: 5,
  },

]

const g = [
  {
    name: 'a',
    customerService: 5,
    foodVariety: 4,
    valueForMoney: 3,
    timeToMake: 2,
    taste: 5,
  },
  {
    name: 'a',
    customerService: 5,
    foodVariety: 4,
    valueForMoney: 5,
    timeToMake: 5,
    taste: 5,
  },


  {
    name: 'a',
    customerService: 5,
    foodVariety: 5,
    valueForMoney: 5,
    timeToMake: 5,
    taste: 5,
  },
  {
    name: 'a',
    customerService: 5,
    foodVariety: 4,
    valueForMoney: 3,
    timeToMake: 2,
    taste: 1,
  },
  {
    name: 'a',
    customerService: 5,
    foodVariety: 4,
    valueForMoney: 3,
    timeToMake: 5,
    taste: 5,
  },
  {
    name: 'b',
    customerService: 5,
    foodVariety: 5,
    valueForMoney: 5,
    timeToMake: 5,
    taste: 5,
  },

]
// Note: We are using console.log because arrays cannot be commpared with ===.
// There are better ways to test which we will explore in future weeks :).
//console.log('========================');
//console.log('1. Testing Fast Food');
//console.log('===========');
//console.log(sortedFastFood(fastFoods));
//console.log();
//
//console.log('========================');
//console.log('1a. Testing Fast Food');
//console.log('===========');
//console.log(sortedFastFood(t));
//console.log();
//
console.log('========================');
console.log('2. Testing Satisfaction');
console.log('===========');
console.log(sortedSatisfaction(g));
console.log();