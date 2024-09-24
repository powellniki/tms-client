import { useEffect, useRef } from 'react';

const useIntersectionObserver = (callback, options) => {
  const elementRef = useRef(null)

  useEffect(() => {
    const observer = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          callback(entry.target)
          observer.unobserve(entry.target) // Unobserve after the intersection
        }
      })
    }, options)

    const element = elementRef.current
    if (element) {
      observer.observe(element)
    }

    // Cleanup function to unobserve the element when it unmounts or the dependencies change
    return () => {
      if (element) {
        observer.unobserve(element)
      }
    };
  }, [callback, options ])

  return elementRef
}

export default useIntersectionObserver