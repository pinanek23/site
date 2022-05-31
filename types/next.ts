/* eslint-disable @typescript-eslint/ban-types */
import type * as React from 'react'
import type { NextPage as NextPageType } from 'next'
import type { AppProps as NextAppProps } from 'next/app'

type Page<T = {}, IP = T> = NextPageType<T, IP> & {
  getLayout?: (page: JSX.Element) => React.ReactNode
}

type AppProps<T = {}> = NextAppProps<T> & {
  Component: Page
}

export type { Page, AppProps }
