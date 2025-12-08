# -------- Stage 1: Build the Spring Boot application --------
FROM maven:3.8.7-openjdk-17 AS build

# Set working directory inside container
WORKDIR /app

# Copy pom.xml and download dependencies first (cache layer)
COPY pom.xml .
RUN mvn -e -B dependency:go-offline --no-transfer-progress

# Copy entire backend source
COPY . .

# Build the project (skip tests for faster build)
RUN mvn clean package -DskipTests

# -------- Stage 2: Run the Spring Boot application --------
FROM openjdk:17-jdk-slim

WORKDIR /app

# Copy the JAR file from the build stage
COPY --from=build /app/target/*.jar app.jar

# Expose default port
EXPOSE 8080

# Start the Spring Boot application
ENTRYPOINT ["java", "-jar", "app.jar"]
