# Database Queries

### Display the ProductName and CategoryName for all products in the database. Shows 76 records.

select p.productname, c.categoryname
from products as p
join categories as c on p.categoryid = c.categoryid

### Display the OrderID and ShipperName for all orders placed before January 9, 1997. Shows 161 records.

SELECT OrderId, ShipperName from Orders as O
JOIN Shippers as S
on O.ShipperId = S.ShipperId WHERE O.OrderDate > 1997-1-09;

### Display all ProductNames and Quantities placed on order 10251. Sort by ProductName. Shows 3 records.

SELECT ProductNames, Quantities WHERE OrderId = 10251
JOIN Products ON OrderDetails.ProductId = Products.ProductID FROM OrderDetails;

### Display the OrderID, CustomerName and the employee's LastName for every order. All columns should be labeled clearly. Displays 196 records.

SELECT OrderId, CustomerName, LastName from Orders as O

### (Stretch) Displays CategoryName and a new column called Count that shows how many products are in each category. Shows 9 records.

### (Stretch) Display OrderID and a column called ItemCount that shows the total number of products placed on the order. Shows 196 records.
