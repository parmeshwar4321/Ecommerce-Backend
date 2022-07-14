#  Backend for Ecommerce web-application

## API-Doc
* i have implemented following api's in this project
  
  * Auth APIs <br>
```POST /api/auth/register``` <br>
  Register a user (accept username, password, type of user - buyer/seller)
```POST /api/auth/login``` <br>
Let a previously registered user log in (e.g. retrieve authentication token)
 <br> <br>
   * APIs for buyers <br>
```GET /api/buyer/list-of-sellers``` <br>
Get a list of all sellers <br>
```GET /api/buyer/seller-catalog/:seller_id``` <br>
Get the catalog of a seller by seller_id <br>
```POST /api/buyer/create-order/:seller_id``` <br>
Send a list of items to create an order for seller with id = seller_id
 <br> <br>
  * APIs for sellers <br>
```POST /api/seller/create-catalog``` <br>
Send a list of items to create a catalog for a seller <br>
```GET /api/seller/orders``` <br>
Retrieve the list of orders received by a seller
