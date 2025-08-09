const fs = require("fs").promises;

async function processProducts() {
  try {
    const data = await fs.readFile("Task_1/data.json", "utf-8");
    const products = JSON.parse(data).products;

    console.log(" All Product Names:");
    products.forEach((p) => console.log(p.name));
    const totalPrice = products.reduce((sum, p) => sum + p.price, 0);
    console.log(" Total Price of All Products:", totalPrice);

    const mostExpensive = products.reduce(
      (max, p) => (p.price > max.price ? p : max),
      products[0]
    );
    console.log(
      " Most Expensive Product:",
      mostExpensive.name,
      "-",
      mostExpensive.price
    );

    const inStockProducts = products.filter((p) => p.inStock);
    console.log(" Products In Stock:");
    inStockProducts.forEach((p) => console.log(p.name));

    const categories = [...new Set(products.map((p) => p.category))];
    console.log(" All Categories:", categories);
  } catch (error) {
    console.error("Error reading or processing file:", error.message);
  }
}

processProducts();
