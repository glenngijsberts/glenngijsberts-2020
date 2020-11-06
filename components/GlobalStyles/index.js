import React from 'react'
import { Global, css } from '@emotion/core'
import { globalStyles as globalStylesSolar } from '@ticketswap/solar'

const globalStyles = css`
  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Regular.ttf');
    font-style: normal;
    font-weight: 300;
    font-display: auto;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Medium.ttf');
    font-style: normal;
    font-weight: 400;
    font-display: auto;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-SemiBold.ttf');
    font-style: normal;
    font-weight: 500;
    font-display: auto;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Bold.ttf');
    font-style: normal;
    font-weight: 600;
    font-display: auto;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-ExtraBold.ttf');
    font-style: normal;
    font-weight: 700;
    font-display: auto;
  }
  @font-face {
    font-family: 'Poppins';
    src: url('/fonts/Poppins-Black.ttf');
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
    background-color: orange;
    color: white;
  }

  body {
    font-family: 'Poppins', -apple-system, BlinkMacSystemFont, 'avenir next', avenir,
      'helvetica neue', helvetica, ubuntu, roboto, noto, 'segoe ui', arial, sans-serif !important;
  }
`

const BaseStyles = () => {
  return <Global styles={[globalStylesSolar, globalStyles]} />
}

export default BaseStyles
