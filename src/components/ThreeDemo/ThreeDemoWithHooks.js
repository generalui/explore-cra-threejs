import React, { Fragment } from 'react'
import useWindowHeightAndWidth from '../../hooks/useWindowHeightAndWidth'

export default () => {
  const { width, height } = useWindowHeightAndWidth() // Our custom hook

  return (
    <Fragment>
      Width: {width} || Height: {height}
    </Fragment>
  )
}
