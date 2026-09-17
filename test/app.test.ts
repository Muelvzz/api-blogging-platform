import { expect, test, describe } from "vitest";
import validTitle from "../server/utils/validTitle";
import validContent from "../server/utils/validContent";
import validCategory from "../server/utils/validCategory";
import validTags from "../server/utils/validTags";

describe("Input utilities", () => {
  test("Title", () => {
    const firstResult = validTitle("")
    const secondResult = validTitle("Not a title")
    const thirdResult = validTitle("Solve Problems as they Arise")

    expect(firstResult.valid).toBe(false)
    expect(secondResult.valid).toBe(false)
    expect(thirdResult.valid).toBe(true)
  })
  
  test("Content", () => {
    const firstResult = validContent("")
    const secondResult = validContent("This is not a valid content for the blog as it is too short.")
    const thirdResult = validContent("Hello and welcome to the first blog of this project. I am so thrilled to have you reading this page. This project has took me three days to complete, all the struggles that I have went through especially the integration testing of this project was a pain... but I learned something along the way.")
    
    expect(firstResult.valid).toBe(false)
    expect(secondResult.valid).toBe(false)
    expect(thirdResult.valid).toBe(true)
  })
  
  test("Category", () => {
    const firstResult = validCategory("")
    const secondResult = validCategory("not a category")
    const thirdResult = validCategory("Technology")
  
    expect(firstResult.valid).toBe(false)
    expect(secondResult.valid).toBe(false)
    expect(thirdResult.valid).toBe(true)
  })
  
  test("Tags", () => {
    const firstResult = validTags([])
    const secondResult = validTags(["", "typescript"])
    const thirdResult = validTags(["typescript", "testing"])
  
    expect(firstResult.valid).toBe(false)
    expect(secondResult.valid).toBe(false)
    expect(thirdResult.valid).toBe(true)
  })
})