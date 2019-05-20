import { useState, useEffect } from 'react'

export default (window) => {
  // Window
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)


  /* istanbul ignore next */
  const resizeWindow = () => {  // Handle window resize
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  /* istanbul ignore next */
  useEffect(() => { // This effect runs on every render of this functional component
    /* istanbul ignore next */
    window.addEventListener('resize', resizeWindow)

    /* istanbul ignore next */
    return () => {  // Cleanup
      /* istanbul ignore next */
      window.removeEventListener('resize', resizeWindow)
    }
  })

  return {
    width,
    height,
  }

}