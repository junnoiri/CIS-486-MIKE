// const express = require("express");
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("Hello, World Node!!");
// });

// app.listen(port, () => {
//   console.log(`Server is running on port ${port}`);
// });

const express = require("express");
const app = express();
const cors = require("cors");

// CORSミドルウェアを使用
app.use(cors());

// ルートURLにアクセスがあった場合にレスポンスを返す
app.get("/", (req, res) => {
  res.send("Hello, Server!");
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
