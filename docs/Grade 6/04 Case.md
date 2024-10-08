# CASE Statements

### Introduction
The `CASE` statement in SQL is used to create conditional logic within SQL queries. It allows you to execute different sets of instructions based on certain conditions. This section will cover the syntax of `CASE` statements, their variations, and examples of how to use them.

### Simple CASE Statement
The simple `CASE` statement compares an expression to a set of simple expressions to determine the result.

```sql
CASE expression
    WHEN value1 THEN result1
    WHEN value2 THEN result2
    ...
    ELSE default_result
END;
```

* expression: The expression to evaluate.
* value1, value2, ...: The values to compare with the expression.
* result1, result2, ...: The results to return when a value matches the expression.
* default_result: The result to return if no value matches the expression.
  
**Example**

Classify employees based on their department:

```sql
SELECT employeeid, departmentid,
    CASE department_id
        WHEN 1 THEN 'Sales'
        WHEN 2 THEN 'Engineering'
        WHEN 3 THEN 'HR'
        ELSE 'Other'
    END AS departmentname
FROM employees;
```

### Searched CASE Statement
The searched `CASE` statement evaluates a set of Boolean expressions to determine the result.

```sql
CASE
    WHEN condition1 THEN result1
    WHEN condition2 THEN result2
    ...
    ELSE default_result
END;
```

* condition1, condition2, ...: The conditions to evaluate.
* result1, result2, ...: The results to return when a condition is true.
* default_result: The result to return if no condition is true.

**Example**

Categorize products based on their price:

```sql
SELECT productid, productname, price,
    CASE
        WHEN price < 10 THEN 'Cheap'
        WHEN price BETWEEN 10 AND 50 THEN 'Moderate'
        WHEN price > 50 THEN 'Expensive'
        ELSE 'Unknown'
    END AS price_category
FROM products;
```

### Using CASE in ORDER BY
You can use the `CASE` statement in the `ORDER BY` clause to customize the sorting order.

**Example**

Sort products by price category:

```sql
SELECT product_id, product_name, price
FROM products
ORDER BY
    CASE
        WHEN price < 10 THEN 1
        WHEN price BETWEEN 10 AND 50 THEN 2
        WHEN price > 50 THEN 3
        ELSE 4
    END;
```

### Practice Exercises

* Select `all` `employess` if the `salary` is more then `100,000` then return the `salary` else give a `null` value.
* Select all `products` that have a `corresponding order`, if they have an `order` return `sold` else return `to be reviewed` 
  

---