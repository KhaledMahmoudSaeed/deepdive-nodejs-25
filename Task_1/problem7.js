// 1. Create an Array of Product Objects
const products = [
  { name: "Headphones", ratings: [4, 5, 4], popular: false },
  { name: "Phone Case", ratings: [3, 3.5, 4], popular: false },
  { name: "Smartwatch", ratings: [5, 4.5, 4.75], popular: false },
];

// 2. Write a Function to Calculate the Average Rating
function calculateAverage(ratings) {
  const sum = ratings.reduce((total, rating) => total + rating, 0);
  return sum / ratings.length;
}

// 3. Filter Popular Products (4.0 or above) and calculate averages
const productsWithAverages = products.map((product) => {
  const average = calculateAverage(product.ratings);
  const isPopular = average >= 4.0;

  return {
    ...product,
    average: average,
    popular: isPopular,
  };
});

// 4. Sort Products by Average Rating (Descending)
const sortedProducts = productsWithAverages.sort(
  (a, b) => b.average - a.average
);

// 5. Print Results
console.log("Product Ratings:");
sortedProducts.forEach((product) => {
  console.log(
    `${product.name}: Average = ${product.average.toFixed(2)}, Popular = ${
      product.popular
    }`
  );
});

// Get popular products names
const popularProducts = sortedProducts
  .filter((product) => product.popular)
  .map((product) => product.name);

console.log(
  `\nPopular Products: [${popularProducts
    .map((name) => `"${name}"`)
    .join(", ")}]`
);
