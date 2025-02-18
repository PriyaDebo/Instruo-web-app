const express = require("express");
const morgan = require("morgan");
const cookieParser = require("cookie-parser");

const userRouter = require("./routes/userRoutes");
const eventRouter = require("./routes/eventRoutes");
const workshopRouter = require("./routes/workshopRoutes");
const teamRouter = require("./routes/teamRoutes");
const AppError = require("./utils/appError");
const globalErrorHandler = require("./controllers/errorController");

const app = express();

app.use((req,res, next)=>{
    res.setHeader('Access-Control-Allow-Origin',"*");
    res.setHeader('Access-Control-Allow-Headers',"*");
    res.header('Access-Control-Allow-Credentials', true);
    next();
});
// Development Logging
if (process.env.NODE_ENV === "development") {
  app.use(morgan("dev"));
}
app.use(express.json());
app.use(cookieParser());

// Routes
app.use("/api/v1/users", userRouter);
app.use("/api/v1/events", eventRouter);
app.use("/api/v1/workshops", workshopRouter);
app.use("/api/v1/participants", teamRouter);

app.all("*", (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on this server!`, 404));
});

app.use(globalErrorHandler);

module.exports = app;
