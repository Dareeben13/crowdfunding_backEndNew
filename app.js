const express = require("express");
const mongoose = require("mongoose");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const cookieParser = require("cookie-parser");
const cors = require('cors')
const expressValidator = require("express-validator");

require("dotenv").config();

// import routes

const authRoutes = require("./routes/auth");
const userRoutes = require("./routes/user");
const projectRoutes = require("./routes/project");
const categoryRoutes = require("./routes/category");
const galleryRoutes = require("./routes/gallery");
const individualInvestorApplicationFormRoutes = require("./routes/individualInvestorApplicationForm");
const corporateInvestorApplicationFormRoutes = require("./routes/corporateInvestorApplicationForm");
const emailRoutes = require("./routes/email");
const paymentRoutes = require("./routes/payment");
const documentRoutes = require("./routes/document");
const issuerApplicationForm = require("./routes/issuerApplicationForm");
const blogRoutes = require("./routes/blog");





// app
const app = express();

// db
mongoose
  .connect(process.env.DATABASE, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
    useFindAndModify: false

  })
  .then(() => console.log("DB Connected"));

// middlewares
app.use(morgan("dev"));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());
app.use(cors());


// routes middleware
app.use("/api", authRoutes);
app.use("/api", userRoutes);
app.use("/api", projectRoutes);
app.use("/api", categoryRoutes);
app.use("/api", galleryRoutes);
app.use("/api", individualInvestorApplicationFormRoutes);
app.use("/api", corporateInvestorApplicationFormRoutes);
app.use("/api", emailRoutes);
app.use("/api", paymentRoutes);
app.use("/api", documentRoutes);
app.use("/api", issuerApplicationForm);
app.use("/api", blogRoutes);









const port = process.env.PORT || 8000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
