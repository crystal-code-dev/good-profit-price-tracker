# **Good Profit Price Tracker**

<img src="documentation/fetch-price-history-flow.png" alt="drawing" width="1000"/>

## **1. Overview**

Good Profit Price Tracker is a tool responsible for collecting, storing, and providing data on online product prices. This data is used to determine if a product is favorably priced compared to its price history. The backend is built using NestJS with TypeScript, providing a robust and scalable structure for API development.

## **2. Technologies Used**

### **2.1. NestJS**

- **Reason:** NestJS is chosen for its ability to create scalable and maintainable server-side applications. Its modular architecture and support for dependency injection help in managing the complexity of large applications and improve code organization and testability.

### **2.2. TypeScript**

- **Reason:** TypeScript adds static typing to JavaScript, which helps catch errors early during development and improves code quality. It integrates seamlessly with NestJS, providing enhanced maintainability and robustness.

### **2.3. Prisma**

- **Reason:** Prisma is a modern ORM that simplifies database interactions, allowing developers to write SQL queries more intuitively with TypeScript support. It enhances developer productivity and ensures data integrity.

### **2.4. PostgreSQL**

- **Reason:** PostgreSQL is a robust and highly scalable relational database. It offers advanced support for both structured and unstructured data, and being open-source, it is an excellent choice for applications of any scale.

### **2.5. Axios**

- **Reason:** Axios is used for making HTTP requests to external APIs or websites. It simplifies the process of handling asynchronous operations and supports promise-based requests, which is crucial for web scraping tasks.

### **2.6. Puppeteer**

- **Reason:** Puppeteer is a Node library that provides a high-level API to control Chrome or Chromium over the DevTools Protocol. It can be used to automate browser tasks, take screenshots, generate PDFs, and, crucially, scrape dynamic content from web pages that require JavaScript execution to render correctly.

### **2.7. Jest**

- **Reason:** Jest is employed for testing the application. It provides a comprehensive framework for unit and integration testing, compatible with TypeScript and NestJS. Its powerful mocking capabilities and ease of use make it an ideal choice for ensuring code reliability.

## **3. Architecture and Design Decisions**

### **3.1. Web Scraper**

- **Objective:** The web scraper’s role is to fetch and parse product data from various e-commerce websites. It is implemented as a separate service within its own module to adhere to NestJS’s modular structure and promote maintainability.

- **Decision:** The scraper service in the `scraper` module is designed to be easily extendable for additional websites. By isolating scraping logic in a dedicated module, the application maintains modularity and simplifies future updates and maintenance.

### **3.2. Database**

- **Model Design:** PostgreSQL is used for data storage, managed via Prisma. The Product model in Prisma includes fields for storing product information and an array of price records, each containing a timestamp and price. This design supports flexible storage of varying product attributes and detailed price history tracking.

- **Decision:** PostgreSQL’s relational model, combined with Prisma's schema management, allows for structured data storage, which is ideal for handling product data with varying attributes. Prisma facilitates schema definition and data operations, making it a good fit for the project’s requirements.

### **3.3. REST API**

- **Decision:** The RESTful API is designed to be straightforward and easy to use. Controllers manage HTTP requests and delegate business logic to services, ensuring a clean separation of concerns and simplifying testing and maintenance.

## **4. Next Steps**

- **Multi-Site Support:** Enhance the scraper service to handle additional e-commerce platforms by incorporating specific parsing logic for each site. This may involve defining new scraping strategies or adapting existing ones.

- **Authentication & Security:** Implement authentication mechanisms (e.g., JWT) to secure API endpoints and protect user data. Consider adding role-based access control (RBAC) to manage different levels of user permissions.

- **Price Analysis Logic:** Develop algorithms to analyze historical price data and identify when a product’s current price represents a significant saving. This could involve implementing comparison metrics, trend analysis, and user-configurable thresholds.

## **5. Setup and Execution**

### **5.1. Prerequisites**

- **Node.js:** Ensure Node.js version 14 or higher is installed.
- **PostgreSQL:** A running PostgreeSQL instance.
- **Nest CLI:** Install the NestJS CLI globally to facilitate project management.

### **5.2. Installation Steps**

1. **Clone the Repository:**

   ```bash
   git clone https://github.com/lopescode/good-profit-price-tracker.git
   cd good-profit-price-tracker
   ```

2. **Install Dependencies:**

   ```bash
   yarn
   ```

3. **Set UP Environment Variables**

   - Create a `.env` file in the root directory with the necessary environment variables, such as:

     ```bash
      DATABASE_URL="postgresql://postgres:root@localhost:5432/good-profit-price-tracker"
     ```

4. **Start the Development Server**

   ```bash
   yarn start:dev
   ```

5. **Test the API:**
   - Send a POST request to `/product-price-history/fetch-price-history-daily-cache`.

## 6. Final Considerations

The backend leverages NestJS's modular architecture and PostgreSQL's robust relational model, managed via Prisma, to build a scalable and maintainable application. Future enhancements will include expanding scraping capabilities, improving data analysis, and adding security features. The current setup provides a solid foundation for ongoing development and scaling as the project evolves.
