import { useEffect, useRef } from 'react'

const DEFAULT_OPTION = {
  threshold: '0.7',
}

const useIntersection = (onIntersect, option = DEFAULT_OPTION) => {
  const observeElement = useRef(null)

  useEffect(() => {
    if (!observeElement.current) return
    const observer = new IntersectionObserver(entries => {
      if (entries[0].isIntersecting) onIntersect()
    }, option)
    observer.observe(observeElement.current)
  })

  return observeElement
}

export default useIntersection
