import { Request, Response } from "express";
import { supabase } from "../config/supabaseClient";
import { InputBlog } from "../config/sharedTypes";

export const updateBlog = async (req: Request, res: Response) => {
  const blogId = Number.parseInt(req.params.id[0], 10)
  const payload: InputBlog = req.body

  if (Number.isNaN(blogId)) {
    res.status(400).json({ message: "The blog id must be a number." })
    return
  }

  try {
    const { data, error } = await supabase.from("api-blogging-platform").update(payload).eq("id", blogId).select()

    if (error) {
      res.status(400).json({
        message: "There's a problem of updating the post.",
        error: error.message
      })
      return
    }

    if (!data || data.length === 0) {
      res.status(404).json({ message: "Blog not found." })
      return
    }

    res.status(200).json({
      message: "Post updated successfully",
      data: data[0]
    })
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Internal Server Error" })
  }
}