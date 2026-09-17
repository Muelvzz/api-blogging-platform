type CreatedAt = {
  created_at: string
}

export type InputBlog = {
  title: string,
  content: string,
  category: string,
  tags: string[],
  updated_at: string,
}

export type BlogId = {
  id: number
}

export type ViewBlog = InputBlog & BlogId & CreatedAt

export type ValidInput = {
  valid: boolean,
  message: string
}