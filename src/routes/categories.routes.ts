import { Router } from "express";
import multer from "multer";

import { createCategoryController } from "@modules/houses/useCases/category/create";
import { importCategoryController } from "@modules/houses/useCases/category/import";
import { listCategoriesController } from "@modules/houses/useCases/category/list";

const categoriesRoutes = Router();


const upload = multer({
  dest: "./tmp",
});


categoriesRoutes.post("/", (request, response) => {
  return createCategoryController.handle(request, response);
 });

categoriesRoutes.get("/", (request, response) => {
  return listCategoriesController.handle(request, response);
});

categoriesRoutes.post("/import", upload.single("file"), (request, response) => {
  return importCategoryController.handle(request, response);
 });

/*categoriesRoutes.get("/categories/:id", (request, response) => { });
categoriesRoutes.put("/categories/:id", (request, response) => { });
categoriesRoutes.patch("/categories/:id", (request, response) => { });
categoriesRoutes.delete("/categories/:id", (request, response) => { });*/

export { categoriesRoutes };

