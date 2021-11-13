import { Router } from "express";
const router = Router();

import * as productsCtrl from "../controllers/products.controller";
import { authJwt } from "../middlewares";

router.get(
  "/",
  [authJwt.verifyToken, authJwt.isModeratorOrAdmin],
  productsCtrl.getProducts
);

router.get("/:productId", productsCtrl.getProductById);

router.post(
  "/products",
  [authJwt.verifyToken, authJwt.isModerator],
  productsCtrl.createProduct
);

router.put(
  "/:productId",
  [authJwt.verifyToken, authJwt.isModerator, authJwt.isAdmin],
  productsCtrl.updateProductById
);

router.delete(
  "/:productId",
  [authJwt.verifyToken, authJwt.isAdmin],
  productsCtrl.deleteProductById
);

export default router;
