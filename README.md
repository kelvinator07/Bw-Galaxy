# BWGalaxy Angular Spring Project

## SET UP INSTRUCTIONS

### This web app can be deployed in two ways.. 1. Single Deployment(Bundled) 2. Separate Deployments(Frontend & Backend)

### For Separate Deployment

1. Open Project In Your Favorite IDE Preferably Intellij Ultimate Version.

2. Create Database in PostgreSQL(PG Admin) with name `bwgalaxy`.

3. Run Spring Backend as a Spring Boot App or using command `mvn spring-boot:run`.

4. Navigate to Frontend Directory `src/main/frontendd` using your terminal and Run `npm install` to download node packages.

5. Run Angular Frontend using `ng serve` and Navigate to `http://localhost:4200/` to view web application.


### For Single Deployment

1. Open Project In Your Favorite IDE Preferably Intellij Ultimate Version.

2. Create Database in PostgreSQL(PG Admin) with name `bwgalaxy`.

3. Navigate to Frontend Directory `src/main/frontendd` using your terminal and Run `npm install` to download node packages.

4. Then Run `npm run deploy` command in Frontend directory.

5. Run Spring Backend as a Spring Boot App or using command `mvn spring-boot:run`.

6. Navigate to `http://localhost:9090/` to view web application.