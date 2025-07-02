---
id: table-creation
title: Table Creation
sidebar_label: Table Creation
sidebar_position: 2
tags: [html, web-development, document-structure,]
description: In this tutorial, you will learn about the structure of an HTML document and how to create a basic HTML document.
---

# 📗 Table Creation

Welcome to the **Selecting Data** module! This foundational learning path is designed to help you master the basics of querying data, particularly focusing on how to retrieve specific information from databases effectively.

### 📘 Creating SQL Table

In SQL, when creating a table, each column must have a data type that defines what kind of data it can hold. Common data types include:
> `INTEGER` – whole numbers
> `REAL` – decimal (floating-point) numbers
> `TEXT` – strings of characters


>Other types like `BLOB` and `NULL` exist but are not covered in this tutorial.


## 🛠️ Example: Creating a Table

### Lesson Overview

Let’s create a simple table named Directory, which holds the floor number and company name.

>This CREATE TABLE statement defines a new table called Directory with two columns:

>`floor` — stores the floor number as an `INTEGER`

>`company` — stores the company name as `TEXT`
    :::info
<Tabs>

<TabItem value="SQL Code" label="SQL Code">
  
  ```sql title="Creating SQL Tables & db. "

CREATE TABLE Directory (
  floor INTEGER,
  company TEXT
);
    ```
    </TabItem>
    
    <TabItem value="how-git-works" label="Output">
Query OK, table created successfully.
    </TabItem>
</Tabs>


:::



:::tip
✅ Tip: SQL keywords like CREATE TABLE, INTEGER, and TEXT are not case-sensitive, but using uppercase for SQL keywords improves readability.

:::

### 🧾 Inserting Data into a Table

    :::info
    Once a table structure is created using CREATE TABLE, the next step is to insert data into it. You can insert as many rows as you want, at any time.

    We’ll continue with the Directory table from earlier. Let’s insert a couple of company records.
<Tabs>


<TabItem value="SQL Code" label="SQL Code">
  
  ```sql title="Creating SQL Tables. "
CREATE TABLE Directory (
  floor INTEGER,
  company TEXT
);

INSERT INTO Directory (floor, company)
VALUES (1, 'Acme Inc.');

INSERT INTO Directory (floor, company)
VALUES (2, 'Homeflix');

    ```

    </TabItem>
    
    <TabItem value="how-git-works" label="Output">
| floor | company   |
|-------|-----------|
| 1     | Acme Inc. |
| 2     | Homeflix  |

    </TabItem>
</Tabs>


:::

:::tip
✅ Tip: Always match the order of columns in your INSERT INTO statement with the order of values inside VALUES().

🚫 Avoiding Duplicate Table Creation
When running a CREATE TABLE command, trying to create a table that already exists will usually result in an error. To avoid this, we can use the IF NOT EXISTS clause.
  ```sql title="Creating SQL Tables. 
CREATE TABLE IF NOT EXISTS Directory (
  floor INTEGER,
  company TEXT
);
```
:::


# ✅ What You Have Learned

In this module, you learned the fundamentals of creating tables in SQL, including:

- **Defining Table Structure**  
  How to use the `CREATE TABLE` statement to define a new table and specify columns with appropriate data types.

- **Common Data Types**  
  The purpose of data types like `INTEGER` for numbers and `TEXT` for strings.

- **Inserting Data**  
  How to add rows to a table using the `INSERT INTO` statement.

- **Preventing Duplicate Tables**  
  Using `IF NOT EXISTS` with `CREATE TABLE` to avoid errors if the table already exists.

- **Best Practices**  
  Writing SQL keywords in uppercase for readability and matching column order in `INSERT INTO` statements.


---

## 📝 Quiz: Test Your Knowledge

#### 1. How can you ensure a table is only created if it doesn't already exist, to avoid errors?
<details>
  <summary>Answer</summary>
  <ul>
    <li>By adding <code>IF NOT EXISTS</code> to the <code>CREATE TABLE</code> statement:</li>
  </ul>

  ```sql
  CREATE TABLE IF NOT EXISTS Directory (
    floor INTEGER,
    company TEXT
  );
  ```
</details>
#### 2. Complete the column definition for the `Tickets` table creation syntax with the appropriate column data types.
  ```sql
  CREATE TABLE Tickets (
    qty _____,
    email _____
  );
  ```
<details>
  <summary>Answer</summary>
  <ul>
    <li>Specify <code>qty</code> as <code>INTEGER</code> and <code>email</code> as <code>TEXT</code>:</li>
  </ul>

  ```sql
  CREATE TABLE Tickets (
    qty INTEGER,
    email TEXT
  );
  ```
</details>

---