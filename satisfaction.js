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
 * If the all other fields are equal and the name is compared,
 * "hungry Jacks" will be before "KFC" because "h" is before "K".
 *
 * WARNING: You should NOT modify the order of the original array.
 *
 * @param {
 *   Array<{
 *      name: string,
 *      customerService: number,
 *      foodVariety: number,
 *      valueForMoney: number,
 *      timeToMake: number,
 *      taste: number
 *   }>
 * } fastFoodArray with information about fast food restaurants,
 * which should not be modified.
 * @returns array with the same items, sorted by the key-order given.
 */
function sortedFastFood(fastFoodArray) {
  const sortedArray = [];
  for (const key in fastFoodArray) {
    sortedArray[key] = fastFoodArray[key];
  }
  let key = 'customerService';
  sortInteger(sortedArray, key);
  key = 'foodVariety';
  sortInteger(sortedArray, key);
  key = 'valueForMoney';
  sortInteger(sortedArray, key);
  key = 'timeToMake';
  sortInteger(sortedArray, key);
  key = 'taste';
  sortInteger(sortedArray, key);
  sortName(sortedArray);

  return sortedArray;
}

// helper function to sort integers
function sortInteger(array, key) {
  array.sort((a, b) => {
    return b.key - a.key;
  });
}

// helper function to sort name
function sortName(array) {
  array.sort((a, b) => {
    let x = a.name.toUpperCase();
    let y = b.name.toUpperCase();
    if (x == y) {
      return 0;
    }
    if (x > y) {
      return 1;
    }
    if (x < y) {
    } return -1;
  });
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
  const sortedArray = [];
  for (const key in fastFoodArray) {
    let sum = (fastFoodArray[key].customerService + fastFoodArray[key].foodVariety +
              fastFoodArray[key].valueForMoney + fastFoodArray[key].timeToMake + 
              fastFoodArray[key].taste);
    let average = sum / 5;

    sortedArray[key] = {
      restaurantName: fastFoodArray[key].name,
      satisfaction: average
    }
  }

  let key = 'satisfaction';
  sortInteger(sortedArray, key);
  sortRestaurantName(sortedArray);

  return sortedArray;
}

// helper function to sort restaurantName
function sortRestaurantName(array) {
  array.sort((a, b) => {
    let x = a.restaurantName.toUpperCase();
    let y = b.restaurantName.toUpperCase();
    if (x == y) {
      return 0;
    }
    if (x > y) {
      return 1;
    }
    if (x < y) {
    } return -1;
  });
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
    customerService: 5,
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

// Note: We are using console.log because arrays cannot be commpared with ===.
// There are better ways to test which we will explore in future weeks :).
console.log('========================');
console.log('1. Testing Fast Food');
console.log('===========');
console.log(sortedFastFood(fastFoods));
console.log();

console.log('========================');
console.log('2. Testing Satisfaction');
console.log('===========');
console.log(sortedSatisfaction(fastFoods));
console.log();
