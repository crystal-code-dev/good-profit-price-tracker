# **Good Profit Price Tracker - Documentation**

## **1. Overview**

Good Profit Price Tracker is a tool responsible for collecting, storing, and providing data on online product prices. This data is used to determine if a product is favorably priced compared to its price history. The backend is built using NestJS with TypeScript, providing a robust and scalable structure for API development.

## **2. Project Structure**

```plaintext
good-profit-price-tracker/
│
├── src/
│   ├── modules/
│   │   ├── products/          # Product module (handles scraping and product data)
│   │   │   ├── product.controller.ts  # Controller for product-related endpoints
│   │   │   ├── product.service.ts     # Service containing business logic
│   │   │   ├── product.module.ts      # NestJS module definition
│   │   │   └── product.schema.ts       # Mongoose schema representing the product model
│   │   └── scraper/           # Scraper module (handles web scraping logic)
│   │       ├── scraper.service.ts     # Service for scraping operations
│   │       ├── scraper.module.ts      # NestJS module definition
│   │       └── scraper.dto.ts         # Data Transfer Objects for scraping
│   ├── config/                # Configuration files (e.g., environment variables)
│   ├── main.ts                # Entry point of the application
│   └── app.module.ts          # Root module of the application
│
├── test/                      # Unit and e2e tests
├── package.json               # Project settings and dependencies
└── README.md                  # Project documentation
```

## **3. Technologies Used**

### **3.1. NestJS**

- **Reason:** NestJS is chosen for its ability to create scalable and maintainable server-side applications. Its modular architecture and support for dependency injection help in managing the complexity of large applications and improve code organization and testability.

### **3.2. TypeScript**

- **Reason:** TypeScript adds static typing to JavaScript, which helps catch errors early during development and improves code quality. It integrates seamlessly with NestJS, providing enhanced maintainability and robustness.

### **3.3. Mongoose**

- **Reason:** Mongoose is used to interface with MongoDB, offering a schema-based solution for modeling application data. It simplifies schema definition, data validation, and query operations, making it easier to work with MongoDB in a structured way.

### **3.4. MongoDB**

- **Reason:** MongoDB was selected for its flexibility and scalability. Its document-oriented storage is well-suited for managing diverse product data and price histories. MongoDB’s ability to handle varying data structures without requiring a predefined schema aligns well with the project’s needs.

### **3.5. Axios**

- **Reason:** Axios is used for making HTTP requests to external APIs or websites. It simplifies the process of handling asynchronous operations and supports promise-based requests, which is crucial for web scraping tasks.

### **3.6. Puppeteer**

- **Reason:** Puppeteer is a Node library that provides a high-level API to control Chrome or Chromium over the DevTools Protocol. It can be used to automate browser tasks, take screenshots, generate PDFs, and, crucially, scrape dynamic content from web pages that require JavaScript execution to render correctly.

### **3.7. Jest**

- **Reason:** Jest is employed for testing the application. It provides a comprehensive framework for unit and integration testing, compatible with TypeScript and NestJS. Its powerful mocking capabilities and ease of use make it an ideal choice for ensuring code reliability.

## **4. Architecture and Design Decisions**

### **4.1. Web Scraper**

- **Objective:** The web scraper’s role is to fetch and parse product data from various e-commerce websites. It is implemented as a separate service within its own module to adhere to NestJS’s modular structure and promote maintainability.

- **Decision:** The scraper service in the `scraper` module is designed to be easily extendable for additional websites. By isolating scraping logic in a dedicated module, the application maintains modularity and simplifies future updates and maintenance.

### **4.2. Database**

- **Model Design:** MongoDB is used for data storage. The `Product` schema in Mongoose includes fields for storing product information and an array of price records, each containing a timestamp and price. This design supports flexible storage of varying product attributes and detailed price history tracking.

- **Decision:** MongoDB’s document-oriented model allows for storing diverse and evolving data structures, which is ideal for handling product data with varying attributes. Mongoose facilitates schema definition and data operations, making it a good fit for the project’s requirements.

### **4.3. REST API**

- **Endpoints:**

  - **`POST /api/products/scrape`**: Initiates the scraping process for a given product URL and saves the extracted data to MongoDB.

- **Decision:** The RESTful API is designed to be straightforward and easy to use. Controllers manage HTTP requests and delegate business logic to services, ensuring a clean separation of concerns and simplifying testing and maintenance.

## **5. Next Steps**

- **Multi-Site Support:** Enhance the scraper service to handle additional e-commerce platforms by incorporating specific parsing logic for each site. This may involve defining new scraping strategies or adapting existing ones.

- **Authentication & Security:** Implement authentication mechanisms (e.g., JWT) to secure API endpoints and protect user data. Consider adding role-based access control (RBAC) to manage different levels of user permissions.

- **Price Analysis Logic:** Develop algorithms to analyze historical price data and identify when a product’s current price represents a significant saving. This could involve implementing comparison metrics, trend analysis, and user-configurable thresholds.

## **6. Setup and Execution**

### **6.1. Prerequisites**

- **Node.js:** Ensure Node.js version 14 or higher is installed.
- **MongoDB:** A running MongoDB instance, either locally or on a cloud service like MongoDB Atlas.
- **Nest CLI:** Install the NestJS CLI globally to facilitate project management.

### **6.2. Installation Steps**

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
       MONGODB_URI=mongodb://localhost:27017/good-profit-price-tracker
     ```

4. **Start the Development Server**

   ```bash
   yarn start:dev
   ```

5. **Test the API:**
   - Send a POST request to `/api/products/scrape` with a JSON payload containing the `item` of the product to scrape.

## 7. Final Considerations

The backend leverages NestJS's modular architecture and MongoDB’s flexible document storage to build a scalable and maintainable application. Future enhancements will include expanding scraping capabilities, improving data analysis, and adding security features. The current setup provides a solid foundation for ongoing development and scaling as the project evolves.
