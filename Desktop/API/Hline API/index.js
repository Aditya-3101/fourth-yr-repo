const express = require("express");
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.use("/api/login/add", require("./routes/auth/logger"));

app.use("/api/login", require("./routes/auth/login"));

app.use("/api/orders", require("./routes/orders/orders"));

app.use("/api/buyers", require("./routes/buyers/buyers"));

app.use("/api/donors", require("./routes/donors/donors"));

app.use("/api/lab/results", require("./routes/lab_results/results"));

app.use("/api/hospitals", require("./routes/Hospitals/hospitals"));

app.use("/api/donors/records", require("./routes/records/dRecords"));

app.use("/api/buyers/records", require("./routes/records/bRecords"));

app.use("/api/hospitals/records", require("./routes/records/hRecords"));

app.listen(PORT, () => {
  console.log(`Server is running on Port ${PORT}`);
});
