# Premier Insights

This is a backend CRUD application for managing Premier League player data, built with **Java Spring Boot** and **PostgreSQL**. It provides RESTful endpoints for creating, reading, updating, and deleting player data. The application also allows filtering players based on various attributes like team, name, position, and nation. 
## Technologies Used

- ![Java](https://img.shields.io/badge/Java-007396?style=for-the-badge&logo=java&logoColor=white)
- ![Spring Boot](https://img.shields.io/badge/Spring%20Boot-6DB33F?style=for-the-badge&logo=springboot&logoColor=white)
- ![PostgreSQL](https://img.shields.io/badge/PostgreSQL-4169E1?style=for-the-badge&logo=postgresql&logoColor=white)
- ![Maven](https://img.shields.io/badge/Maven-C71A36?style=for-the-badge&logo=apachemaven&logoColor=white)

## Features

- **Get Players**: Retrieve all players or filter by team, name, position, or nationality.
- **Add Player**: Add a new player to the database.
- **Update Player**: Modify player details.
- **Delete Player**: Remove a player from the database.

## API Endpoints

- **GET /api/v1/player**: Retrieve players (supports filters for team, name, position, nationality).
- **POST /api/v1/player**: Add a new player to the database.
- **PUT /api/v1/player**: Update player details.
- **DELETE /api/v1/player/{playerName}**: Delete a player by their name.

## Setup

### Prerequisites

- Java 17 or higher
- Maven 3.8 or higher
- PostgreSQL database running locally or remotely

### Installation

1. Clone the repository:

    ```bash
    git clone https://github.com/yourusername/premier-insights.git
    ```

2. Navigate to the project directory:

    ```bash
    cd premier-insights
    ```

3. Configure your PostgreSQL database connection by editing `src/main/resources/application.properties`:

    ```properties
    spring.datasource.url=jdbc:postgresql://localhost:5432/yourdb
    spring.datasource.username=yourusername
    spring.datasource.password=yourpassword
    spring.datasource.driver-class-name=org.postgresql.Driver
    spring.jpa.hibernate.ddl-auto=update
    spring.jpa.show-sql=true
    spring.jpa.properties.hibernate.dialect=org.hibernate.dialect.PostgreSQLDialect
    ```

4. Build and run the application:

    ```bash
    mvn spring-boot:run
    ```

5. The application should now be running at `http://localhost:8080`.

## Testing the API

You can use tools like Postman or curl to interact with the API.

- **GET** `http://localhost:8080/api/v1/player?team=Manchester%20United`
- **POST** `http://localhost:8080/api/v1/player`
  - Body:
    ```json
    {
      "name": "Cristiano Ronaldo",
      "team": "Manchester United",
      "pos": "Forward",
      "nation": "Portugal"
    }
    ```
- **PUT** `http://localhost:8080/api/v1/player`
  - Body:
    ```json
    {
      "name": "Cristiano Ronaldo",
      "team": "Al Nassr",
      "pos": "Forward",
      "nation": "Portugal"
    }
    ```
- **DELETE** `http://localhost:8080/api/v1/player/Cristiano%20Ronaldo`


