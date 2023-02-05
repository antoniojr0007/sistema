
import { createSpecificationController } from "@modules/houses/useCases/specification/create";
import { listSpecificationsController } from "@modules/houses/useCases/specification/list";

import { Router } from "express";



const specificationsRoutes = Router();

specificationsRoutes.post("/", (request, response) => {
  return createSpecificationController.handle(request, response);
 });

 specificationsRoutes.get("/", (request, response) => {
  return listSpecificationsController.handle(request, response);
});

/*specificationsRoutes.get("/categories/:id", (request, response) => { });
specificationsRoutes.put("/categories/:id", (request, response) => { });
specificationsRoutes.patch("/categories/:id", (request, response) => { });
specificationsRoutes.delete("/categories/:id", (request, response) => { });*/

export { specificationsRoutes };

