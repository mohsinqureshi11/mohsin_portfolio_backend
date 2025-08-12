// import express from "express";
// import cors from "cors";
// import contactRoutes from "./src/api/contact.js";

// const app = express();

// // app.use(cors());//local chalane k liye isko enable kro 
// app.use(cors({
//   origin: "https://mohsinqureshiportfolio.netlify.app",
//   methods: ["GET", "POST", "PUT", "DELETE"],
//   credentials: true
// }));
// app.use(express.json());


// // API routes
// app.use("/api/contact", contactRoutes);

// export default app;

// import express from "express";
// import cors from "cors";
// import contactRoutes from "./src/api/contact.js";

// const app = express();

// const allowedOrigins = [
//   "https://mohsinqureshiportfolio.netlify.app"
// ];

// app.use(cors({
//   origin: allowedOrigins,
//   methods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
//   allowedHeaders: ["Content-Type", "Authorization"],
//   credentials: true
// }));

// app.options("*", cors({ origin: allowedOrigins })); // preflight ke liye

// app.use(express.json());

// // API routes
// app.use("/api/contact", contactRoutes);

// export default app;



// src/api/contact.js
import express from "express";
import cors from "cors";

const router = express.Router();

const allowedOrigins = ["https://mohsinqureshiportfolio.netlify.app"];

router.use(cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

// Preflight handle
router.options("*", cors({
  origin: allowedOrigins,
  methods: ["GET", "POST", "OPTIONS"],
  allowedHeaders: ["Content-Type", "Authorization"],
  credentials: true
}));

router.post("/", async (req, res) => {
  res.json({ success: true, message: "Message sent" });
});

export default router;
