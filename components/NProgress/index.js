import React from 'react'
import NProgress from 'nprogress'
import Router from 'next/router'
import { Global, css } from '@emotion/core'
import { themeColor } from '~/theme'

let timeout

const start = () => {
  timeout = setTimeout(NProgress.start, 100)
}

const done = () => {
  clearTimeout(timeout)
  NProgress.done()
}

NProgress.configure({ showSpinner: false })
Router.events.on('routeChangeStart', start)
Router.events.on('routeChangeComplete', done)
Router.events.on('routeChangeError', done)

const ProgressBar = () => (
  <Global
    styles={css`
      #nprogress {
        pointer-events: none;
      }
      #nprogress .bar {
        background: ${themeColor.primary};
        position: fixed;
        z-index: 1031;
        top: 0;
        left: 0;
        width: 100%;
        height: 3px;
      }
      #nprogress .peg {
        display: block;
        position: absolute;
        right: 0px;
        width: 100px;
        height: 100%;
        box-shadow: 0 0 10px orange, 0 0 5px ${themeColor.primary};
        opacity: 1;
        transform: rotate(3deg) translate(0px, -4px);
      }
    `}
  />
)

export default ProgressBar
