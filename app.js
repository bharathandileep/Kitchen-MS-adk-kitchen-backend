const express = require('express');
const bodyParser = require('body-parser');
const connectDB = require('./db');
require('dotenv').config();  // Load environment variables from .env file
const cors = require('cors');

const restaurantRoutes = require('./router/restaurantRouter');
const inventoryRoutes = require('./router/inventoryRouter');
const inventoryOrdersRoutes = require('./router/inventoryOrdersRouter');
const suppliersRoutes = require('./router/suppliersRouter');
const inventoryOrderItemsRoutes = require('./router/inventoryOrderItemRouter');
const menuRoutes = require('./router/menuRouter');
const menuItemsRoutes = require('./router/menuItemsRouter');
const ordersRoutes = require('./router/orderRouter');
const orderItemsRoutes = require('./router/orderItemsRouter');
const foodCategoriesRoutes = require('./router/foodCategoryRouter');
const foodMenuTypeRoutes = require('./router/foodMenuTypeRouter');
const kitchenRoleRoutes = require('./router/kitchenRoleRouter');
const kitchenStaffRoutes = require('./router/kitchenStaffRouter');
const companyRoutes = require('./router/AssociateRouter');

const app = express();
// Enable CORS for all routes
app.use(cors());

const port = process.env.PORT || 5000;

// Connect to the database
connectDB();

// Middleware
app.use(bodyParser.json());

// Routes
app.use('/api/restaurant', restaurantRoutes);
app.use('/api/inventory', inventoryRoutes);
app.use('/api/inventoryOrders', inventoryOrdersRoutes);
app.use('/api/suppliers', suppliersRoutes);
app.use('/api/inventoryOrderItems', inventoryOrderItemsRoutes);
app.use('/api/menu', menuRoutes);
app.use('/api/menuitems', menuItemsRoutes);
app.use('/api/orders', ordersRoutes);
app.use('/api/ordersitems', orderItemsRoutes);
app.use('/api/foodcategory', foodCategoriesRoutes);
app.use('/api/foodmenutype', foodMenuTypeRoutes);
app.use('/api/kitchenrole', kitchenRoleRoutes);
app.use('/api/kitchenstaff', kitchenStaffRoutes);
app.use('/api/company',companyRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

