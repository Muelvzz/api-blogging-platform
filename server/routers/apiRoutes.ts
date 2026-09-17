import express from "express"
import { postBlog } from "../controllers/postblog"
import { viewBlog, viewAllBlog } from "../controllers/viewBlog"
import { updateBlog } from "../controllers/updateBlog"
import { deleteBlog } from "../controllers/deleteBlog"

export const apiRouter = express.Router()

apiRouter.post("/posts", postBlog)
apiRouter.get("/posts", viewAllBlog)
apiRouter.get("/post/:id", viewBlog)
apiRouter.patch("/post/:id", updateBlog)
apiRouter.delete("/post/:id", deleteBlog)