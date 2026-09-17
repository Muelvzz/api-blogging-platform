import { ValidInput } from "../config/sharedTypes"

export default function validCategory(category: string) {
  const validCategory: ValidInput = { valid: false, message: "" }

  if (!category.trim()) {
    validCategory.message = "The category should not be empty"
    return validCategory
  }

  if (!/^\p{L}+$/u.test(category.trim())) {
    validCategory.message = "The category should only be a one-word."
    return validCategory
  }

  validCategory.valid = true
  validCategory.message = category
  return validCategory
}