import { gsap } from 'gsap'

const tl = gsap.timeline()

// Hero
tl.fromTo(
  '.area__title',
  {
    y: 50,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    delay: 1,
    duration: 1,
  },
)
  .fromTo(
    '.area__hero__adress-link',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
    },
  )
  .fromTo(
    '.area__hero__button',
    {
      opacity: 0,
    },
    {
      opacity: 1,
      duration: 1,
    },
  )
