import React from 'react'
import { Global } from '@emotion/core'
import { globalStyles } from '@ticketswap/solar'

const BaseStyles = () => {
  return <Global styles={[globalStyles]} />
}

export default BaseStyles
