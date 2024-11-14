import MarkdownIt from 'markdown-it'
import matter from 'gray-matter'

const md = new MarkdownIt({
  html: true,
  breaks: true,
  linkify: true,
})

export function parseMarkdown(content: string) {
  const { data, content: markdownContent } = matter(content)
  const html = md.render(markdownContent)
  return {
    metadata: data,
    content: html,
  }
} 