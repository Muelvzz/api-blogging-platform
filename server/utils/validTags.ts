type ValidTags = {
  valid: boolean,
  message: string[] | string
}

export default function validTags(tags: string | string[]) {
  const validTags: ValidTags = { valid: false, message: "" }

  const tagList = Array.isArray(tags) ? tags : tags.trim() ? [tags.trim()] : []

  if (tagList.length === 0) {
    validTags.message = "The tags should not be empty"
    return validTags
  }

  if (tagList.some((tag) => !tag.trim())) {
    validTags.message = "The tags should not contain empty values"
    return validTags
  }

  validTags.valid = true
  validTags.message = tagList.map((tag) => tag.trim())
  return validTags
}