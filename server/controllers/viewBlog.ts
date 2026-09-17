import { Request, Response } from "express";
import { supabase } from "../config/supabaseClient";
import { ViewBlog } from "../config/sharedTypes";

export const viewBlog = async (req: Request, res: Response) => {
  const blogId = Number.parseInt(req.params.id[0], 10)

  if (Number.isNaN(blogId)) {
    res.status(400).json({ message: "The blog id must be a number." })
    return
  }

  try {
    const { data, error } = await supabase.from("api-blogging-platform").select().eq("id", blogId)

    if (error) {
      res.status(404).json({
        message: "Blog not found.",
        error: error.message
      })
      return
    }

    if (!data || data.length === 0) {
      res.status(404).json({ message: "Blog not found." })
      return
    }

    res.status(200).json({
      message: "Blog fetched successfully.",
      data: data[0]
    })
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Internal Server Error" })
  }
}

export const viewAllBlog = async (req: Request, res: Response) => {
  try {
    const { data, error } = await supabase.from("api-blogging-platform").select("*")
    if (error) {
      res.status(404).json({
        message: "Blog not found.",
        error: error.message
      })
      return
    }

    res.status(200).json({
      message: "Blog fetched successfully.",
      data: data as ViewBlog[] | null
    })
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Internal Server Error" })
  }
}