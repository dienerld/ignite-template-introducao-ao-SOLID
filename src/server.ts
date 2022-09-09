import swaggerUI from "swagger-ui-express";

import { app } from ".";
import docs from "./docs/swagger.json";

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(docs));

app.listen(3333, () => console.log("Server is running!"));
