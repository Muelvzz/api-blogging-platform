import { Request, Response } from "express";
import { supabase } from "../config/supabaseClient";
import { InputBlog } from "../config/sharedTypes";

export const postBlog = async (req: Request, res: Response) => {
  const payload: InputBlog = req.body

  try {
    const { data, error } = await supabase.from("api-blogging-platform").insert([payload]).select()

    if (error) {
      res.status(400).json({
        message: "There's a problem of adding the post.",
        error: error.message
      })
      return
    }

    res.status(201).json({
      message: "Post added successfully",
      data: data[0]
    })
  } catch (err: any) {
    res.status(500).json({ error: err.message || "Internal Server Error" })
  }
}