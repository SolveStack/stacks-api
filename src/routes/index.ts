import * as express from "express";
import * as http from "http";
import * as jwtConfig from "../config/middleware/jwtAuth";
import * as swaggerUi from "swagger-ui-express";
import AuthRouter from "./AuthRouter";
import UserRouter from "./UserRouter";
import StackRouter from "./StackRouter";
let swaggerDoc: Object;

try {
  swaggerDoc = require("../../swagger.json");
} catch (error) {
  console.log("***************************************************");
  console.log("  Seems like you doesn`t have swagger.json file");
  console.log("  Please, run: ");
  console.log("  $ swagger-jsdoc -d swaggerDef.js -o swagger.json");
  console.log("***************************************************");
}

/**
 * @export
 * @param {express.Application} app
 */
export function init(app: express.Application): void {
  const router: express.Router = express.Router();

  /**
   * @description
   *  Forwards any requests to the /v1/users URI to our UserRouter
   *  Also, check if user authenticated
   * @constructs
   */
  app.use("/v1/users", jwtConfig.isAuthenticated, UserRouter);

  /**
   * @description
   *  Forwards any requests to the /v1/stacks URI to our StacksRouter
   *  Also, check if user authenticated
   * @constructs
   */
  app.use("/v1/stacks", StackRouter);

  /**
   * @description Forwards any requests to the /auth URI to our AuthRouter
   * @constructs
   */
  app.use("/auth", AuthRouter);

  /**
   * @description
   *  If swagger.json file exists in root folder, shows swagger api description
   *  else send commands, how to get swagger.json file
   * @constructs
   */
  if (swaggerDoc) {
    app.use("/docs", swaggerUi.serve);
    app.get("/docs", swaggerUi.setup(swaggerDoc));
  } else {
    app.get("/docs", (req, res) => {
      res.send(
        "<p>Seems like you doesn't have <code>swagger.json</code> file.</p>" +
          "<p>For generate doc file use: <code>swagger-jsdoc -d swaggerDef.js -o swagger.json</code> in terminal</p>" +
          "<p>Then, restart your application</p>"
      );
    });
  }

  /**
   * @description No results returned mean the object is not found
   * @constructs
   */
  app.use((req, res, next) => {
    res.status(404).send(http.STATUS_CODES[404]);
  });

  /**
   * @constructs all routes
   */
  app.use(router);
}
