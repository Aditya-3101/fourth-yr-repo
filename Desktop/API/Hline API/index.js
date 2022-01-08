const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/donors", require("./routes/donors/donors"));

app.use("/api/lab/results", require("./routes/lab_results/results"));

app.use("/api/hospitals", require("./routes/Hospitals/hospitals"));

app.use("/api/login", require("./routes/auth/login"));

app.use("/api/orders", require("./routes/orders/orders"));

app.use("/api/buyers", require("./routes/buyers/buyers"));

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
