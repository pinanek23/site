import * as React from 'react'
import { Metadata, NavBar } from '@/components'

interface MainLayoutProps {
  children: React.ReactNode
}

function MainLayout({ children }: MainLayoutProps) {
  return (
    <>
      <Metadata />
      <div>
        <NavBar />
        <div>{children}</div>
      </div>
    </>
  )
}

const getMainLayout = (page: JSX.Element) => <MainLayout>{page}</MainLayout>

export default MainLayout
export { getMainLayout }
