// Imports
import express from 'express';
import Product from '../models/ProductModel.js';
import data from '../data.js';
import User from '../models/userModel.js';

const seedRouter = express.Router();

seedRouter.get('/', async (req, res) => {
  await Product.deleteMany({});
  const createdProducts = await Product.insertMany(data.products);
  res.status(201).send(createdProducts);
});

seedRouter.get('/', async (req, res) => {
  await User.deleteMany({});
  const createdUsers = await User.insertMany(data.products);
  res.status(201).send(createdUsers);
});

export default seedRouter;
