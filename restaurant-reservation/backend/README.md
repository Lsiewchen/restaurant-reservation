# Restaurant Reservation Backend

## Table of Content

- [Description](#description)
- [Technology Used](#technology-used)
- [Requirement](#requirements)
- [Local Setup](#local-setup)

## Description

This backend service supports restaurant reservations and provides the following features:

- Browse restaurants by the 5 newest additions or by cuisine
- Search restaurants by name or cuisine type
- View detailed restaurant information, including menu, location, and operating hours
- Make a reservation
- View all reservations
- Cancel reservations

## Technology Used

- [Spring Boot](http://projects.spring.io/spring-boot/)

## Requirements

- [MariaDB version 11.4](https://mariadb.org/)
- [JDK 21](https://www.oracle.com/asean/java/technologies/downloads/)

## Local Setup

Run the following codes in the terminal to set up the project, create the
database/tables/data and start up the springboot application.

```

# Step 1: From the project root, navigate to the resources folder
cd src/main/resources

# Step 2: Update application.properties
# set `spring.datasource.username` to your MariaDB username
# set `spring.datasource.password` to your MariaDB password

# Step 3: Login to MariaDB
mariadb -u <USERNAME> -p

# Step 4: Create the database and tables
SOURCE restaurant_reservation_ddl.sql

# Step 5: Seed the database with initial data
SOURCE restaurant_reservation_dml.sql

# Step 6: Exit MariaDB
exit

# Step 7: Run the application
# Open the project in your IDE and run the application

```