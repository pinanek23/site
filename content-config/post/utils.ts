import * as fs from 'fs'
import * as path from 'path'
import { glob } from 'glob'

const postBasePath = path.join(process.cwd(), 'content', 'posts')

const globResults = glob.sync('{*,**/index}.md?(x)', {
  cwd: postBasePath
})

function getPostSlugs(): string[] {
  const slugs = globResults.map((globResult) => {
    const match = globResult.match(/^(.+)\/index.mdx?$/)
    // if this post not in a folder then remove its extension
    if (match === null) {
      return globResult.replace(/\.mdx?$/, '')
    }

    // Otherwise get its parent folder name
    return match[1]
  })

  return slugs
}

function getPostPathBySlug(slug: string): string {
  const postRegex = new RegExp(`^${slug}.mdx?$`)
  const postWithFolderRegex = new RegExp(`^${slug}/index.mdx?$`)

  const matchGlobResult = globResults.find(
    (globResult) => postRegex.test(globResult) || postWithFolderRegex.test(globResult)
  )

  if (matchGlobResult === undefined) return ''

  return path.join(postBasePath, matchGlobResult)
}

function getPostFolderPath(postPath: string): string {
  return path.dirname(postPath)
}

function getPostSource(postPath: string): string {
  return fs.readFileSync(postPath, { encoding: 'utf8' })
}

export { getPostSlugs, getPostPathBySlug, getPostFolderPath, getPostSource }
