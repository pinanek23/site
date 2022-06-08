---
title: Hello
seoTitle: Hello
description: Just an example post 😎
categories: ['Hello', 'Nothing']
image:
  url: default-logo.png
  alt: Logo of pinanek23
isPublished: true
publishedDate: 06-01-2022
---

## Headings

## Heading 2

### Heading 3

#### Heading 4

## Paragraphs

Hello, this is an example post to test all prose component. And this is an Paragraph, with **Bold**, _Italic_ and **_Bold and Italic_** to test Emphasis 😍😍😍. Scroll down for more prose components ❤️.

## Links

This is a [Normal Link](/), and this is an [External Link](https://www.youtube.com/watch?v=dQw4w9WgXcQ).

## Images

![Hello](/default-logo.png)

## Blockquotes

> This is an Blockquote

> This is an Blockquote with **Emphasis**

> This is an Blockquote
>
> with Multiple Paragraphs

## InfoBar

> [!info]
> This is an InfoBar with default variant

> [!success]
> This is an InfoBar with success variant

> [!warning]
> This is an InfoBar with warning variant

> [!error]
> This is an InfoBar with critical variant

## Lists

This is an Unordered List:

- First item
- Second item
- Third item
- Fourth item

This is an Ordered List:

1. First item
2. Second item
3. Third item
4. Fourth item

## Code

### Escaping Backticks

This is an `Escaping Backticks` with monospace font.

### Code blocks

```
This is a plain text code block
```

```tsx fileName=code-block.tsx
import * as React from 'react'

interface Props {
  children: React.ReactNode
}

function CodeBlock({ children }: Props): JSX.Element {
  return (
    <div>
      <h2>This is an code block with syntax highlighting 😍</h2>
      {children}
    </div>
  )
}
```

```tsx fileName=code-block.tsx showLineNumbers
import * as React from 'react'

interface Props {
  children: React.ReactNode
}

function CodeBlock({ children }: Props): JSX.Element {
  return (
    <div>
      <h2>
        This is an code block with syntax highlighting with line numbers 😍
      {children}
    </div>
  )
}
```
