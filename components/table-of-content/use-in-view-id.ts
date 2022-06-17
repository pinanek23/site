import * as React from 'react'
import { useRouter } from 'next/router'

// https://blog.eyas.sh/2022/03/react-toc

function useInViewId(selectors: string, setItem: React.Dispatch<React.SetStateAction<string>>) {
  const router = useRouter()

  React.useEffect(() => {
    const articleContainer = document.getElementById('article-content-container')
    if (articleContainer === null) return

    const inViewSet = new Map<string, HTMLElement>()

    const callback: IntersectionObserverCallback = (entries) => {
      for (const entry of entries) {
        if (entry.isIntersecting && entry.intersectionRatio === 1) {
          inViewSet.set(entry.target.id, entry.target as HTMLElement)
        } else {
          inViewSet.delete(entry.target.id)
        }
      }

      const inView = Array.from(inViewSet.entries())

      if (inView.length > 0) {
        setItem(inView[inView.length - 1][0])
      }
    }

    const observer = new IntersectionObserver(callback, {
      threshold: 1,
      rootMargin: '-112px 0px -70% 0px'
    })

    articleContainer.querySelectorAll(selectors).forEach((element) => {
      observer.observe(element)
    })

    return () => observer.disconnect()

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [router.asPath])
}

export default useInViewId
