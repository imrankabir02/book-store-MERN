import express from "express";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";

import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

const app = express();

app.use(cors());
app.use(express.json());

dotenv.config();

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// connect to mongoDB
try {
    mongoose.connect(URI, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    });
    console.log("Connected to mongoDB");
} catch (error) {
    console.log("Error: ", error);
}

// defining routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});

// // index.js
// import express from "express";
// import dotenv from "dotenv";
// import mongoose from "mongoose";
// import cors from "cors";
// import bookRoute from "./route/book.route.js";
// import userRoute from "./route/user.route.js";

// const app = express();

// // Middleware
// app.use(cors());
// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// // Request logging middleware
// app.use((req, res, next) => {
//     console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
//     next();
// });

// // Health check route
// app.get('/health', (req, res) => {
//     res.json({ status: 'OK', timestamp: new Date() });
// });

// // API Routes
// app.use("/api/v1/books", bookRoute);
// app.use("/api/v1/users", userRoute);

// // Route to view all registered routes
// app.get('/api/routes', (req, res) => {
//     const routes = [];
    
//     // Function to extract route info
//     const extractRoutes = (stack, prefix = '') => {
//         stack.forEach(middleware => {
//             if (middleware.route) {
//                 // Direct routes
//                 const path = prefix + middleware.route.path;
//                 const methods = Object.keys(middleware.route.methods);
//                 routes.push({ path, methods });
//             } else if (middleware.name === 'router') {
//                 // Router middleware
//                 const newPrefix = prefix + middleware.regexp.toString()
//                     .replace('/^', '')
//                     .replace('/(?=\\/|$)/i', '')
//                     .replace(/\\/g, '');
                
//                 extractRoutes(middleware.handle.stack, newPrefix);
//             }
//         });
//     };
    
//     extractRoutes(app._router.stack);
    
//     res.json({
//         totalRoutes: routes.length,
//         routes: routes.map(route => ({
//             path: route.path,
//             methods: route.methods.map(m => m.toUpperCase()),
//             fullUrl: `${req.protocol}://${req.get('host')}${route.path}`
//         }))
//     });
// });

// // 404 handler
// app.use('*', (req, res) => {
//     console.log(`Route not found: ${req.originalUrl}`);
//     res.status(404).json({
//         error: 'Not Found',
//         message: `Route ${req.originalUrl} not found`,
//         availableEndpoints: '/api/routes'
//     });
// });

// // Error handler
// app.use((err, req, res, next) => {
//     console.error(err.stack);
//     res.status(500).json({
//         error: 'Internal Server Error',
//         message: err.message,
//         stack: process.env.NODE_ENV === 'development' ? err.stack : undefined
//     });
// });

// // Start server
// const PORT = process.env.PORT || 4001;
// app.listen(PORT, () => {
//     console.log(`Server running on http://localhost:${PORT}`);
//     console.log('\nAvailable endpoints:');
//     console.log('- GET /health');
//     console.log('- GET /api/routes');
//     console.log('- [Other routes will be registered through routers]');
// });