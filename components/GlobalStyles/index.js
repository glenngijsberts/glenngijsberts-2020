import React from 'react'
import { Global, css } from '@emotion/core'
import { globalStyles as globalStylesSolar, color } from '@ticketswap/solar'
import { themeColor } from '~/theme'

const globalStyles = css`
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Regular.ttf');
    font-style: normal;
    font-weight: 300;
    font-display: auto;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Medium.ttf');
    font-style: normal;
    font-weight: 400;
    font-display: auto;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-SemiBold.ttf');
    font-style: normal;
    font-weight: 500;
    font-display: auto;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Bold.ttf');
    font-style: normal;
    font-weight: 600;
    font-display: auto;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-ExtraBold.ttf');
    font-style: normal;
    font-weight: 700;
    font-display: auto;
  }
  @font-face {
    font-family: 'Inter';
    src: url('/fonts/Inter-Black.ttf');
    font-style: normal;
    font-weight: 800;
    font-display: auto;
  }

  @font-face {
    font-family: 'PlayfairDisplay';
    src: url('/fonts/PlayfairDisplay-Regular.ttf');
    font-style: normal;
    font-weight: 300;
    font-display: auto;
  }
  @font-face {
    font-family: 'PlayfairDisplay';
    src: url('/fonts/PlayfairDisplay-Medium.ttf');
    font-style: normal;
    font-weight: 400;
    font-display: auto;
  }
  @font-face {
    font-family: 'PlayfairDisplay';
    src: url('/fonts/PlayfairDisplay-SemiBold.ttf');
    font-style: normal;
    font-weight: 500;
    font-display: auto;
  }
  @font-face {
    font-family: 'PlayfairDisplay';
    src: url('/fonts/PlayfairDisplay-Bold.ttf');
    font-style: normal;
    font-weight: 600;
    font-display: auto;
  }
  @font-face {
    font-family: 'PlayfairDisplay';
    src: url('/fonts/PlayfairDisplay-ExtraBold.ttf');
    font-style: normal;
    font-weight: 700;
    font-display: auto;
  }
  @font-face {
    font-family: 'PlayfairDisplay';
    src: url('/fonts/PlayfairDisplay-Black.ttf');
    font-style: normal;
    font-weight: 800;
    font-display: auto;
  }

  *::selection {
    background-color: ${themeColor.primary};
    color: white;
  }

  img::selection {
    background-color: transparent;
  }

  body {
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'avenir next', avenir, 'helvetica neue',
      helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif !important;
    min-height: 100vh;
    color: #292926;
    cursor: url(/cursor.png), auto !important;
  }

  p {
    word-break: keep-all !important;
    hyphens: none !important;
  }
`

const BaseStyles = () => {
  return <Global styles={[globalStylesSolar, globalStyles]} />
}

export default BaseStyles
