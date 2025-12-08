# -------- Stage 1: Build the Spring Boot application --------
FROM eclipse-temurin:17-jdk AS build

WORKDIR /app

# Copy pom.xml and download dependencies
COPY pom.xml .
RUN ./mvnw dependency:go-offline || true

# Copy backend code
COPY . .

# Ensure mvnw is executable
RUN chmod +x mvnw

# Build the project
RUN ./mvnw clean package -DskipTests

# -------- Stage 2: Run the Spring Boot application --------
FROM eclipse-temurin:17-jre

WORKDIR /app

COPY --from=build /app/target/*.jar app.jar

EXPOSE 8080

ENTRYPOINT ["java", "-jar", "app.jar"]
