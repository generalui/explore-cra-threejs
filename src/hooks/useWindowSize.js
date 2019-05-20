import { useState, useEffect } from 'react'

export default () => {
  // Window
  const [width, setWidth] = useState(window.innerWidth || 0)
  const [height, setHeight] = useState(window.innerHeight || 0)

  // Handle window resize
  const resizeWindow = () => {
    setWidth(window.innerWidth)
    setHeight(window.innerHeight)
  }

  // This effect runs on every render of this functional component
  useEffect(() => {
    window.addEventListener('resize', resizeWindow)

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeWindow)
    }
  }, [width, height])

  return {
    width,
    height,
  }

}