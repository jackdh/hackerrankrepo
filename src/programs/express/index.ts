const express = require("express");
import { Request, Response } from "express";
const app = express();
const port = 3000;

app.get("/:data", (req: Request, res: Response) => {
  return res.send(`Hello: ${req.params.data}`);
});

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
