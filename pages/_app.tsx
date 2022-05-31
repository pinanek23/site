import { ThemeProvider } from 'next-themes'
import { getMainLayout } from '@/layouts'
import type { AppProps } from '@/types/next'
import '@/styles/global/global.css'

function App({ Component, pageProps }: AppProps) {
  const getLayout = Component.getLayout || getMainLayout

  return (
    <ThemeProvider attribute="class" storageKey="color-mode">
      {getLayout(<Component {...pageProps} />)}
    </ThemeProvider>
  )
}

export default App
