import React, { Fragment } from 'react'

// Custom hooks
import useWindowSize from './hooks/useWindowSize'

export default () => {
  const { width, height } = useWindowSize(window)

  return (
    <Fragment>
      Width: {width} || Height: {height}
      <br />
    </Fragment>
  )
}
