import { createSignal, onCleanup, onMount, For, type Component } from 'solid-js'
import classnames from 'clsx'
import type { PostHeaders } from '@/types/post'
import Styles from './table-of-contents.module.scss'

interface Props {
  headers: PostHeaders
  class?: string
}

const TableOfContent: Component<Props> = (props) => {
  const [currentHeading, setCurrentHeading] = createSignal<string | undefined>()

  let headingsObserver: IntersectionObserver | undefined

  onMount(() => {
    const postContentContainer = document.getElementById('post-content')

    const setCurrent: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting) {
          setCurrentHeading(entry.target.id)
          break
        }
      }
    }

    const observerOptions: IntersectionObserverInit = {
      rootMargin: '-80px 0% -78%',
      threshold: 1
    }

    headingsObserver = new IntersectionObserver(setCurrent, observerOptions)

    postContentContainer
      ?.querySelectorAll('h2[id], h3[id], h4[id]')
      .forEach((heading) => headingsObserver?.observe(heading))
  })

  onCleanup(() => {
    if (headingsObserver !== undefined) {
      headingsObserver.disconnect()
      headingsObserver = undefined
    }
  })

  return (
    <div class={classnames(Styles.main, props.class)}>
      <h2>Table of Contents</h2>
      <nav class={Styles.nav}>
        <For each={props.headers}>
          {({ depth, text, slug }) => (
            <a
              class={classnames(
                Styles.item,
                currentHeading() === slug && Styles.selected,
                depth === 3 && Styles.level3,
                depth === 4 && Styles.level4
              )}
              href={`#${slug}`}
            >
              {text}
            </a>
          )}
        </For>
      </nav>
    </div>
  )
}

export default TableOfContent
