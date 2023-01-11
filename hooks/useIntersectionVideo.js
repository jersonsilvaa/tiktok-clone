import { useEffect, useState } from 'react'

import { $ } from 'utils/dom'

export default function useIntersectionVideoPlayer({ video }) {
  const [playing, setPlaying] = useState(true)


  const options = {
    root: $('#scrollArea'),
    rootMargin: '0px',
    threshold: .9
  }

  const observer = new window.IntersectionObserver((entries) => {
  entries
    .forEach(entry => {
      const { target, isIntersecting } = entry
      target._handleIntersect(isIntersecting)
    })
}, options)

  useEffect(() => {
    if (!video.current) return

    observer.observe(video.current)
    video.current._handleIntersect = (isIntersecting) => {
      const { current: videoEl } = video

      isIntersecting
        ? videoEl.play()
        : videoEl.pause()

      setPlaying(!videoEl.paused)
    }
  }, [video.current])

  const handlePlay = () => {
    const { current: videoEl } = video
    playing
      ? videoEl.pause()
      : videoEl.play()

    setPlaying(!playing)
  }

  return {
    handlePlay,
    playing
  }
}