import { names, provinces, products } from "./data.js";
// EXERCISE
/**
 * Logs each name in the names array.
 */
names.forEach((name) => console.log("Name:", name));

/**
 * Logs each province in the provinces array.
 */
provinces.forEach((province) => console.log("Province:", province));

/**
 * Logs each name with a matching province. Format: "name (province)"
 */
names.forEach((name, index) => {
  // Check if the index is valid for provinces array
  if (index < provinces.length) {
    console.log(`${name} (${provinces[index]})`);
  } else {
    console.log(`${name} (No matching province)`);
  }
});

/**
 *  Converts province names to uppercase.
 * @returns {string[]} Array of uppercase province names.
 * Logs each province name with UpperCase using the map method.
 */
const upperCaseProvinces = provinces.map((province) => {
  return province.toUpperCase();
});

console.log("Upper case provinces:", upperCaseProvinces);

/**
 *  Maps each name to its length.
 * @returns {number[]} Array of name lengths.
 * Logs the length of each name using the map method.
 */
// eslint-disable-next-line
const lengthofNames = names.map((name) => {
  return name.length;
});

//console.log("Length of names:", lengthofNames);

/**
 * @returns {string[]} Sorted province names.
 * Sorts the provinces alphabetically.
 */
// eslint-disable-next-line
const SortbyAlphaProvinces = provinces.sort();

//console.log("Provinces sorted alphabetically:", SortbyAlphaProvinces);

/**
 *  @returns {string[]} Array of provinces without "Cape".
 * Filters the provinces that includes Cape.
 */
const NoneCape = provinces.filter((province) => !province.includes("Cape"));
console.log("Provinces without Cape:", NoneCape);

/**
 * Logs each name in the names array.
 */
names.forEach((name) => console.log("Name:", name));

/**
 * @returns {boolean} True if at least one name contains 'S'
 * Create a boolean array indicating if each name contains the letter 'S'.
 */
const containsSArray = names.map((name) => {
  // Check if the name contains the letter 'S' (case-insensitive)
  return name.toUpperCase().includes("S");
});

/**
 * Log the boolean array.
 */
// console.log("Names containing 'S':", containsSArray);

/**
 * Check if any name contains the letter 'S'.
 */
//eslint-disable-next-line
const anyContainsS = containsSArray.some((containsS) => containsS);

/**
 * Log the result of whether any name contains 'S'.
 */
// console.log("Any name contains 'S':", anyContainsS);

/**
 * Create an object mapping names to their respective provinces.
 * // The reduce method is called on the names array.
// It takes an accumulator (acc) and the current name and index as arguments.
//The accumulator starts as an empty object ({}).
 */

// eslint-disable-next-line
const nameProvinceMapping = names.reduce((acc, name, index) => {
  // Check if the index is valid for provinces array
  if (index < provinces.length) {
    acc[name] = provinces[index]; // Map name to province
  } else {
    acc[name] = null; // Assign null if no matching province
  }
  return acc; // Return the accumulator for the next iteration
}, {});

/**
 * Log the name to province mapping object.
 */
// console.log("Name to Province Mapping:", nameProvinceMapping);

// ADVANCED EXERCISES

/**
 * iterate over the products array and log each product name
 *  Single console.log statement to log all product names
 *  products.map(({ product }) => product,Extracts only the product names from each object in the products array.
  .join(", ")Joins the product names into a single string, separated by commas.
 */
console.log("Products:", products.map(({ product }) => product).join(", "));

/**
         * Filter out products with names longer than 5 characters.
         * filter(({ product }) => product.length <= 5):
         *  This filters the products array to only include items where the product name length is 5 or less.
           map(({ product }) => product): Maps the filtered results to get just the product names.
          .join(", "): Joins the filtered product names into a string.
           @returns {string[]} Array of filtered product names.
         */
console.log(
  "FilteredProductNames:",
  products
    .filter(({ product }) => product.length <= 5)
    .map(({ product }) => product)
    .join(", ")
);

/**
 * Calculates the total price of valid products.
 * @returns {number} Total sum of product prices.
 */
console.log(
  "Total Price:",
  products
    .filter(({ price }) => price !== "" && price !== " " && price !== undefined) // Remove empty or invalid prices
    .map(({ price }) => Number(price)) // Convert to numbers
    .filter((price) => !isNaN(price)) // Remove NaN values
    .reduce((total, price) => total + price, 0) // Sum up all valid prices
);

/**
 * Concatenates all product names into a single string.
 * @returns {string} Concatenated product names.
 */
console.log(
  "Concatenated Product Names:",
  products.reduce((acc, { product }) => acc + product, "")
);

/**
 * Finds the highest and lowest priced products.
 * @returns {{highest: {product: string, price: number}, lowest: {product: string, price: number}}}
 */
console.log(
  products
    .filter(({ price }) => price !== "" && price !== " " && !isNaN(price))
    .map(({ product, price }) => ({ product, price: Number(price) }))
    .reduce(
      (acc, item) => ({
        highest: item.price > acc.highest.price ? item : acc.highest,
        lowest: item.price < acc.lowest.price ? item : acc.lowest,
      }),
      {
        highest: { product: "", price: -Infinity },
        lowest: { product: "", price: Infinity },
      }
    )
);

/**
 * Transforms the products array by renaming keys.
 * @param {{ product: string, price: string|number }[]} productsArray
 * @returns {{ name: string, cost: string|number }[]} Transformed array.
 */
const transformedProducts = products.reduce((acc, { product, price }) => {
  acc.push({ name: product, cost: price });
  return acc;
}, []);

console.log(transformedProducts);
