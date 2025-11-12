import app from "./app";
import { configs } from "./config";

(() => {
  app.listen(configs.port, () => {
    console.log(`Server is running on port ${configs.port}`);
  });
})();
