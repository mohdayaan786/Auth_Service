
---

# **Authentication Service**  

## **Overview**  
The **Authentication Service** handles user authentication, authorization, and role-based access control. It ensures secure user registration, login, and verification using **JWT (JSON Web Tokens)** and **bcrypt** for password hashing.  

## **Key Features**  
✔ **User Authentication** – Secure login and registration with hashed passwords.  
✔ **Role-Based Access Control (RBAC)** – Assigns roles to users and manages permissions.  
✔ **Token-Based Authentication** – Uses JWT to secure API endpoints.  
✔ **Database Integration** – Stores user credentials, roles, and permissions.  

---

## **Tech Stack**  
- **Backend:** Node.js, Express.js  
- **Database:** MySQL  
- **Security:** bcrypt, JWT (JSON Web Token)  
- **ORM:** Sequelize  

---

## **Database Schema**  

### **1. Users Table**  
Stores user credentials and authentication details.  

| Field      | Type          | Null | Key  | Default | Extra          |
|-----------|--------------|------|------|---------|----------------|
| id        | int          | NO   | PRI  | NULL    | auto_increment |
| email     | varchar(255) | NO   | UNI  | NULL    |                |
| password  | varchar(255) | NO   |      | NULL    |                |
| createdAt | datetime     | NO   |      | NULL    |                |
| updatedAt | datetime     | NO   |      | NULL    |                |

---

### **2. Roles Table**  
Defines available user roles (e.g., Admin, User).  

| Field      | Type          | Null | Key  | Default | Extra          |
|-----------|--------------|------|------|---------|----------------|
| id        | int          | NO   | PRI  | NULL    | auto_increment |
| name      | varchar(255) | NO   |      | NULL    |                |
| createdAt | datetime     | NO   |      | NULL    |                |
| updatedAt | datetime     | NO   |      | NULL    |                |

---

### **3. User Roles Table**  
Maintains **many-to-many relationships** between users and roles.  

| Field      | Type      | Null | Key  | Default | Extra |
|-----------|----------|------|------|---------|-------|
| createdAt | datetime | NO   |      | NULL    |       |
| updatedAt | datetime | NO   |      | NULL    |       |
| RoleId    | int      | NO   | PRI  | NULL    |       |
| UserId    | int      | NO   | PRI  | NULL    |       |

---

## **Authentication Service Implementation**  

### **User Authentication Workflow**  
1. **User Signup** – Stores user credentials securely with **bcrypt hashing**.  
2. **User Login** – Verifies credentials and generates a **JWT token**.  
3. **Authentication Middleware** – Protects routes by verifying JWT tokens.  
4. **Role-Based Access Control (RBAC)** – Manages user roles for API access control.  

---

## **API Endpoints**  

| Method | Endpoint            | Description                     |
|--------|---------------------|---------------------------------|
| POST   | `/signUp`           | Registers a new user.          |
| POST   | `/signIn`           | Authenticates user and returns JWT. |
| GET    | `/isAuthenticated`  | Verifies if a user is authenticated. |
| GET    | `/isAdmin`          | Checks if the user has admin privileges. |
| DELETE | `/delete/:id`       | deletes the user with specific id. |


---

## **Security Features**  
✔ **Password Hashing** – Uses bcrypt to securely store passwords.  
✔ **JWT Authentication** – Securely authenticates users with signed tokens.  
✔ **Role-Based Access Control (RBAC)** – Restricts API access based on roles.  

---

## **Conclusion**  
This **Authentication Service** ensures secure and scalable authentication using industry best practices. It provides **user authentication, authorization, and role-based access control**, making it a crucial component in any microservices-based system. 🚀  

---