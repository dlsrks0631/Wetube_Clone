import express from "express";
import { 
  watch,
  getUpload,
  getEdit,
  postEdit,
  postUpload
} from "../controllers/videoController";

const videoRouter = express.Router();

// videoRouter.get("/upload", getUpload);
// videoRouter.post("/upload", postUpload);


videoRouter.get("/:id([0-9a-f]{24})", watch);
videoRouter.route("/:id([0-9a-f]{24})/edit").get(getEdit).post(postEdit);
//== videoRouter.get("/:id(\\d+)/edit", getEdit);
//== videoRouter.post("/:id(\\d+)/edit", postEdit);
videoRouter.route("/upload").get(getUpload).post(postUpload);


export default videoRouter;
