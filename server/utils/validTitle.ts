import { ValidInput } from "../config/sharedTypes"

export default function validTitle(title: string) {
  const validTitle: ValidInput = { valid: false, message: "" }

  if (!title.trim()) {
    validTitle.message = "The title should not be empty"
    return validTitle
  }

  if (title.length < 15 || title.length > 50) {
    validTitle.message = "make sure the title is more than 15 characters long but less than 50 characters."
    return validTitle
  }

  validTitle.valid = true
  validTitle.message = title
  return validTitle
}