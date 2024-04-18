require("dotenv").config();
require("../config/db");

const User = require("../models/User");
const Item = require("../models/item");
const Deal = require("../models/deal");

const allUsers = [
  {
    name: "John Doe",
    email: "john.doe@example.com",
    passwordHash: "e723a55c2e66a7756e7e7e8b9e27b6b0",
    role: "manager",
  },
  {
    name: "Jane Smith",
    email: "jane.smith@example.com",
    passwordHash: "f6c8e6e4e614e1a2e5e8e7e6e5e4e3e2e1",
    role: "clerk",
  },
  {
    name: "Bob Johnson",
    email: "bob.johnson@example.com",
    passwordHash: "d6c8e6e4e614e1a2e5e8e7e6e5e4e3e2e1",
    role: "clerk",
  },
  {
    name: "Alice Williams",
    email: "alice.williams@example.com",
    passwordHash: "c6c8e6e4e614e1a2e5e8e7e6e5e4e3e2e1",
    role: "manager",
  },
  {
    name: "Charlie Brown",
    email: "charlie.brown@example.com",
    passwordHash: "b6c8e6e4e614e1a2e5e8e7e6e5e4e3e2e1",
    role: "manager",
  },
  {
    name: "David Miller",
    email: "david.miller@example.com",
    passwordHash: "a6c8e6e4e614e1a2e5e8e7e6e5e4e3e2e1",
    role: "clerk",
  },
];

const seedUsers = async () => {
  await User.deleteMany({});

  const passwordHash =
    "$2b$10$kFQBMr9Z9ZDyL.Qm/4Xaf.VG/sI9URMLHHe1.rE69SeNCE07UAMQy"; // password: 12345678

  for (let user of allUsers) {
    const newUser = new User({
      ...user,
      passwordHash,
    });
    await newUser.save();
  }

  console.log("Users were successfully seeded");
};

const allItems = [
  {
    name: "iPhone 9",
    pricePerItem: 549,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/1/1.jpg",
    quantity: 94,
  },
  {
    name: "iPhone X",
    pricePerItem: 899,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/2/1.jpg",
    quantity: 34,
  },
  {
    name: "Samsung Universe 9",
    pricePerItem: 1249,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/3/1.jpg",
    quantity: 36,
  },
  {
    name: "OPPOF19",
    pricePerItem: 280,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/4/1.jpg",
    quantity: 123,
  },
  {
    name: "Huawei P30",
    pricePerItem: 499,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/5/1.jpg",
    quantity: 32,
  },
  {
    name: "MacBook Pro",
    pricePerItem: 1749,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/6/1.png",
    quantity: 83,
  },
  {
    name: "Samsung Galaxy Book",
    pricePerItem: 1499,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/7/1.jpg",
    quantity: 50,
  },
  {
    name: "Microsoft Surface Laptop 4",
    pricePerItem: 1499,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/8/1.jpg",
    quantity: 68,
  },
  {
    name: "Infinix INBOOK",
    pricePerItem: 1099,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/9/1.jpg",
    quantity: 96,
  },
  {
    name: "HP Pavilion 15-DK1056WM",
    pricePerItem: 1099,
    category: "Electronics",
    imageUrl: "https://cdn.dummyjson.com/product-images/10/1.jpeg",
    quantity: 89,
  },
  {
    name: "perfume Oil",
    pricePerItem: 13,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/11/1.jpg",
    quantity: 65,
  },
  {
    name: "Brown Perfume",
    pricePerItem: 40,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/12/1.jpg",
    quantity: 52,
  },
  {
    name: "Fog Scent Xpressio Perfume",
    pricePerItem: 13,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/13/1.webp",
    quantity: 61,
  },
  {
    name: "Non-Alcoholic Concentrated Perfume Oil",
    pricePerItem: 120,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/14/1.jpg",
    quantity: 114,
  },
  {
    name: "Eau De Perfume Spray",
    pricePerItem: 30,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/15/1.jpg",
    quantity: 105,
  },
  {
    name: "Hyaluronic Acid Serum",
    pricePerItem: 19,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/16/1.jpg",
    quantity: 110,
  },
  {
    name: "Tree Oil 30ml",
    pricePerItem: 12,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/17/1.jpg",
    quantity: 78,
  },
  {
    name: "Oil Free Moisturizer 100ml",
    pricePerItem: 40,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/18/1.jpg",
    quantity: 88,
  },
  {
    name: "Skin Beauty Serum.",
    pricePerItem: 46,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/19/1.jpg",
    quantity: 54,
  },
  {
    name: "Freckle Treatment Cream- 15gm",
    pricePerItem: 70,
    category: "Beauty & Personal Care",
    imageUrl: "https://cdn.dummyjson.com/product-images/20/1.jpg",
    quantity: 140,
  },
  {
    name: "- Daal Masoor 500 grams",
    pricePerItem: 20,
    category: "Groceries",
    imageUrl: "https://cdn.dummyjson.com/product-images/21/1.png",
    quantity: 133,
  },
  {
    name: "Elbow Macaroni - 400 gm",
    pricePerItem: 14,
    category: "Groceries",
    imageUrl: "https://cdn.dummyjson.com/product-images/22/1.jpg",
    quantity: 146,
  },
  {
    name: "Orange Essence Food Flavou",
    pricePerItem: 14,
    category: "Groceries",
    imageUrl: "https://cdn.dummyjson.com/product-images/23/1.jpg",
    quantity: 26,
  },
  {
    name: "cereals muesli fruit nuts",
    pricePerItem: 46,
    category: "Groceries",
    imageUrl: "https://cdn.dummyjson.com/product-images/24/1.jpg",
    quantity: 113,
  },
  {
    name: "Gulab Powder 50 Gram",
    pricePerItem: 70,
    category: "Groceries",
    imageUrl: "https://cdn.dummyjson.com/product-images/25/1.jpg",
    quantity: 47,
  },
];

const seedItems = async () => {
  await Item.deleteMany({});

  for (let item of allItems) {
    const newItem = new Item(item);
    await newItem.save();
  }

  console.log("Items were successfully seeded");
};

const allDeals = [
  {
    name: "Buy 1 get 1 free",
    applicableItems: ["1", "2", "3", "4", "5", "6"],
    type: "fixed",
    value: 100,
    startTimestamp: new Date(),
    endTimestamp: new Date() + 1000 * 60 * 60 * 24 * 7,
  },
  {
    name: "10% off on 2 items",
    applicableItems: ["1", "2"],
    type: "percentage",
    value: 10,
    startTimestamp: new Date(),
    endTimestamp: new Date() + 1000 * 60 * 60 * 24 * 7,
  },
  {
    name: "5% off on 1 item",
    applicableItems: ["3"],
    type: "percentage",
    value: 5,
    startTimestamp: new Date(),
    endTimestamp: new Date() + 1000 * 60 * 60 * 24 * 7,
  },
  {
    name: "20% off on 3 items",
    applicableItems: ["1", "2", "3"],
    type: "percentage",
    value: 20,
    startTimestamp: new Date(),
    endTimestamp: new Date() + 1000 * 60 * 60 * 24 * 7,
  },
  {
    name: "20% off on 34 items",
    applicableItems: ["1", "2", "3"],
    type: "percentage",
    value: 20,
    startTimestamp: new Date(),
    endTimestamp: new Date() + 1000 * 60 * 60 * 24 * 7,
  },
  {
    name: "20% off on 2 items",
    applicableItems: ["1", "2", "3"],
    type: "percentage",
    value: 20,
    startTimestamp: new Date(),
    endTimestamp: new Date() + 1000 * 60 * 60 * 24 * 7,
  },
];

const giveRandomIds = (items) => {
  const randomItems = items.sort(() => 0.5 - Math.random());
  return randomItems.slice(0, Math.floor(Math.random() * randomItems.length));
};

const seedDeals = async () => {
  await Deal.deleteMany({});

  const items = await Item.find();
  const itemIds = items.map((item) => item._id);

  for (let deal of allDeals) {
    const newDeal = new Deal({
      ...deal,
      applicableItems: giveRandomIds(itemIds),
    });

    await newDeal.save();
  }

  console.log("Deals were successfully seeded");
};

const main = async () => {
  console.log("Seeding started");

  await seedUsers();
  await seedItems();
  await seedDeals();

  console.log("Seeding was successful");
  process.exit();
};

main();
