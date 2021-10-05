# Day 13 (Backend)

## Project Planning

```
/api/users
/api/login - return token - will be stored in frontend through state
/api/products
/api/products&tag=<tag name>
```

## Protected routes
header - Authorization : Bearer <token>

```
get user - /api/users/:userId/profile 
get cart - /api/users/:userId/cart - GET
Add to cart - /api/users/:userId/cart - POST
get all order - /api/users/:userId/order - GET
get single order - /api/users/:userId/order/:orderId - GET
create an order - /api/users/:userID/order - POST
Payment gateway - /api/users/:userId/payment - POST
Credit card updation - /api/users/:userId/creditcard 
```
