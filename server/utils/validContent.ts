import { ValidInput } from "../config/sharedTypes"

export default function validContent(content: string) {
  const validContent: ValidInput = { valid: false, message: "" }

  if (!content.trim()) {
    validContent.message = "The content should not be empty"
    return validContent
  }

  if (content.length < 100) {
    validContent.message = "The content is too short."
    return validContent
  }

  validContent.valid = true
  validContent.message = content
  return validContent
}