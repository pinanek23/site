import type { Node as UnistNode, Literal, Parent } from 'unist'

interface Node extends UnistNode {
  tagName: string
  children: (Node | Literal)[]
  properties: Record<string, unknown>
}

export type { Node, Literal, Parent }
