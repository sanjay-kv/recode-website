---
id: selecting-data
title: Selecting Data
sidebar_label: Selecting Data
sidebar_position: 1
tags: [GitHub, GitHub-development, document-structure, GitHub repo,]
description: In this tutorial, you will learn about the how to create a GitHub repo by Online GUI interface. 
---

# 📘 Selecting Data

Welcome to the **Selecting Data** module! This foundational learning path is designed to help you master the basics of querying data, particularly focusing on how to retrieve specific information from databases effectively.

## ✅ What You'll Learn

This module covers four essential topics in data selection:

- **Rows and Columns**  
  Learn how to access specific rows and columns in a dataset or table, the building blocks of any query.

- **Select Data**  
  Understand the basic `SELECT` statement to retrieve data from a database.

- **Select Multiple Columns**  
  Retrieve more than one column at a time in your queries to get the information you need all at once.

- **Select Distinct Values**  
  Use `DISTINCT` to eliminate duplicate records and identify unique entries within your dataset.

## 📚 Why It Matters

Grasping these concepts is crucial whether you're starting in:
- Data Analytics
- Data Science
- Software Engineering
- Database Management

They form the basis for more advanced SQL operations like filtering, sorting, joins, and aggregation.

---


<AdsComponent />


### 📘 Understanding Table Rows in a Database

In this tutorial, you'll learn how to interpret and use rows in a database table. Tables are essential to storing structured data, and each **row** in a table represents a unique **item or record**.

## 🧠 Key Concept

> Each row of a table represents a new item.

For example, consider a table named `Friends`. Below is how a simple table might look:

| id | name            | username         |
|----|-----------------|------------------|
| 1  | John Doe        | @johndoe         |
| 2  | Jane Smith      | @janesmith       |
| 3  | Bob Johnson     | @bobjohnson      |
| 4  | Alice Williams  | @alicewilliams   |
| 5  | Michael Brown   | @michaelbrown    |
| 6  | Emily Davis     | @emilydavis      |
| 7  | Chris Martinez  | @chrismartinez   |
| 8  | Jessica Lee     | @jessicalee      |
| 9  | David Anderson  | @davidanderson   |

## 🧾 Example

The **first row** of this table contains:
- `id`: **1**
- `name`: **John Doe**
- `username`: **@johndoe**

Each of the remaining rows represents a different friend, with unique ID, name, and username values.

---

✅ This is your first step in understanding how data is structured in relational databases. Once you master rows, you're on your way to writing powerful SQL queries!




<AdsComponent />

# 📗 Understanding Table Columns in a Database

In this section of the tutorial, we'll explore the structure of **columns** in a table. Columns are crucial because they define the **attributes** of the data stored in each row.

## 🧠 Key Concept

> Each column of a table represents a specific attribute of the data, such as `id`, `name`, or `username`.

These columns define the **type of information** stored for each item in the table.

## 📊 Example Table

Let's look again at the `Friends` table:

| id | name            | username         |
|----|-----------------|------------------|
| 1  | John Doe        | @johndoe         |
| 2  | Jane Smith      | @janesmith       |
| 3  | Bob Johnson     | @bobjohnson      |
| 4  | Alice Williams  | @alicewilliams   |
| 5  | Michael Brown   | @michaelbrown    |
| 6  | Emily Davis     | @emilydavis      |
| 7  | Chris Martinez  | @chrismartinez   |
| 8  | Jessica Lee     | @jessicalee      |
| 9  | David Anderson  | @davidanderson   |

Each **column** tells you a different kind of information:
- `id`: Unique number assigned to each person
- `name`: Full name of the friend
- `user

# 📘 Querying a Table with `FROM`

Now that you understand how **rows** and **columns** work in a database table, it's time to learn how to **query** the table to retrieve specific data.

## 🧠 Key Concept

> To query data from a table, use the `FROM` clause followed by the **table's name**.

This tells the database **which table** to pull data from.

---

## 🧾 Example Table: `Users`

| id | name              | email                   |
|----|-------------------|--------------------------|
| 1  | Tony Stark        | ironman@avengers.com     |
| 2  | Bruce Wayne       | batman@gotham.com        |
| 3  | Leia Organa       | princess@rebellion.org   |
| 4  | Hermione Granger  | hermione@hogwarts.edu    |
| 5  | Frodo Baggins     | frodo@sh


When requesting data with SQL staments like SELECT, we say that we are making a query.
From helps in select the name col from
While not necessary but its a good practice to finish the sql queries with;

# 🔄 Selecting Multiple Columns in SQL

So far, you’ve learned how to select a single column from a table. But what if you want to see **more than one piece of information** for each user?

## 🧠 Key Concept

> You can select **multiple columns** by separating them with a comma `,` in your `SELECT` statement.

---

## 🧾 Example Table: `Users`

| id | name              | email                    |
|----|-------------------|---------------------------|
| 1  | Tony Stark        | ironman@avengers.com      |
| 2  | Bruce Wayne       | batman@gotham.com         |
| 3  | Leia Organa       | princess@rebellion.org    |
| 4  | Hermione Granger  | hermione@hogwarts.edu     |
| 5  | Frodo Baggins     | frodo@shire.me            |

---

## ✅ Sample Query

If we want to select both the **name** and **email** of each user, we use:

```sql
SELECT name, email
FROM users;
```
# 🧹 Selecting Unique Values with `DISTINCT`

Sometimes your table might contain **duplicate values**, and you only want to see each unique value **once** in your result.

That’s where the `DISTINCT` keyword comes in!

---

## 🧾 Example Table: `subscribers`

| name | email             | country  |
|------|-------------------|----------|
| Sam  | sam17@mail.com    | England  |
| Remy | rem@mail.com      | France   |
| Luis | luis_99@mail.com  | France   |
| Kim  | kim2@mail.com     | England  |

---

## ❓ The Problem

If we run this query:

```sql
SELECT DISTINCT country
FROM subscribers;
```


## Conclusion

In this tutorial, you learned about the syntax and structure of HTML. HTML syntax consists of elements, tags, and attributes that define the structure and content of a web page. An HTML document follows a basic structure with elements like `<!DOCTYPE html>`, `<html>`, `<head>`, `<title>`, `<meta>`, and `<body>`. Understanding HTML syntax and structure is essential for creating web pages and applications.
