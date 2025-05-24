---
id: intro-sql
title: Introduction of SQL #Remember to keep this unique, as it maps with giscus discussions in the recodehive/support/general discussions
sidebar_label: Introduction of SQL #displays in sidebar
sidebar_position: 1
tags:
  [
    html,
    introduction of html,
    what is html,
    why learn html,
    how to use html,
    html syntax,
    html structure,
    html elements,
    html attributes,
  ]
description: In this tutorial, you will learn about SQL, its importance, what is SQL, why learn SQL, how to use SQL, steps to start using SQL, and more.
---

SQL **Structured Query Language** is a standard programming language used to manage and manipulate relational databases. It allows users to store, retrieve, update, and delete data in a structured format.
<AdsComponent />

:::note
Key Features of SQL:
Data Querying: Retrieve data from one or more tables using commands like **SELECT**.

Data Manipulation: Add, update, or delete records using **INSERT**, **UPDATE**, and **DELETE**.

Data Definition: Define database structures using **CREATE**, **ALTER**, and **DROP**.

Data Control: Control access and permissions with **GRANT** and **REVOKE**.
:::

## What is SQL?

SQL became a standard of the American National Standards Institute (ANSI) in 1986 and of the International Organization for Standardization (ISO) in 1987. SQL can execute queries against a database and retrieve data from it. It allows users to insert, update, and delete records in a database. Additionally, SQL can be used to create new databases and new tables within them. It also supports the creation of stored procedures, views, and the ability to set permissions on tables, procedures, and views.

:::info

1.  **International Organization for Standardization (ISO)**: The International Organization for Standardization (ISO) is an independent, non-governmental international organization that develops and publishes global standards to ensure quality, safety, efficiency, and interoperability of products, services, and systems.
2.  **American National Standards Institute (ANSI)**: The American National Standards Institute (ANSI) is a non-profit organization that oversees the development of voluntary consensus standards in the United States. It plays a key role in ensuring products, services, and systems in the U.S. are consistent, safe, and compatible.
3.  Basic SQL Commands::

        | Category | 	Command | 	Description |
        | --- | --------------- | -------------------- |
        | DQL (Query).  | SELECT | Retrieve data from tables |
        | DML (Manipulation)  | INSERT, UPDATE, DELETE | 	Modify table records |
        | DDL (Definition)  | 	CREATE, ALTER, DROP | Define or change structure |
        | DCL (Control)  | GRANT, REVOKE | 	Set permissions |
        | TCL (Transactions)  | 	COMMIT, ROLLBACK | 		Manage transactions |

4.  **Structure and Content**: In SQL, the structure refers to how data is organized in tables, and the content refers to the actual data stored within those tables.

    **For example, the following HTML code creates a simple web page:**

    <Tabs>
      <TabItem value="HTML">
       ```sql
       -- Create a table
        CREATE TABLE Students (
        ID INT,
        Name VARCHAR(50),
        Age INT
        );

      -- Insert a record
        INSERT INTO Students VALUES (1, 'Alice', 22);

      -- Query the table
        SELECT * FROM Students;

      -- Update a record
        UPDATE Students SET Age = 23 WHERE ID = 1;

      -- Delete a record
        DELETE FROM Students WHERE ID = 1;
       ```
       </TabItem>
       <TabItem value="Output">
       ```plaintext
       -- After creating the table and inserting a record:
       ID   Name    Age
       1    Alice   22

       -- After updating the record:
       ID   Name    Age
       1    Alice   23

       -- After deleting the record:
       (No rows returned)
       ```
       </TabItem>
    </Tabs>


5.  **Platform Independent?**: Yes and No — It Depends. The core SQL language (based on ANSI/ISO standards) is platform-independent, meaning the basic syntax and concepts—like SELECT, INSERT, UPDATE, and DELETE—are the same across different database systems. ❌ But, SQL Implementations Are Not Fully Platform Independent:
Different Database Management Systems (DBMS)—like MySQL, PostgreSQL, Oracle, SQL Server, and SQLite—extend SQL differently. They may:

Use different data types (VARCHAR vs TEXT, etc.)

Have custom functions and features

Handle stored procedures, triggers, and syntax differently

Offer different tools and performance optimizations

So, SQL code written for one system may not work exactly the same on another without adjustments.

:::

<AdsComponent />

## Why Learn SQL?

SQL is the standard language for managing and querying relational databases — the most common way data is stored in businesses. Whether it's MySQL, PostgreSQL, SQL Server, or SQLite, they all use SQL.

📊 2. Critical for Data-Driven Roles
SQL is a core skill for:

Data Analysts

Data Engineers

Data Scientists

Business Intelligence Professionals

Software Developers

Even marketers, product managers, and business analysts often use SQL to get insights from data.


<AdsComponent />


### Steps to start using HTML

**1. Set up your development environment**: Go to MySQL Downloads Page:
    - Visit MySQL Workbench Downloads.

**2. Download the Installer:**: To create your first HTML document, follow these steps:

    - Select the version compatible with your operating system (Windows, macOS, or Linux).
    - Click Download and follow the installation instructions.
    - https://dev.mysql.com/downloads/workbench/


<AdsComponent />

## Conclusion

Learning SQL empowers you to talk to data, unlock insights, and build data-driven solutions—making it one of the most valuable and versatile skills in the digital world.

<GiscusComments/>