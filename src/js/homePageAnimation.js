import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'

gsap.registerPlugin(ScrollTrigger)
const tl = gsap.timeline()

// Hero
tl.fromTo(
  '.hero__text',
  {
    x: 100,
    opacity: 0,
  },
  {
    x: 0,
    opacity: 1,
    duration: 1,
  },
  1,
).fromTo(
  '.hero__title',
  {
    y: 100,
    opacity: 0,
  },
  {
    y: 0,
    opacity: 1,
    duration: 1,
  },
)

// The Cabins
gsap.to('.left-item', {
  scrollTrigger: {
    trigger: '.cabins',
    start: '-50% center',
    scrub: true,
  },
  yPercent: 20,
})

gsap.to('.right-item', {
  scrollTrigger: {
    trigger: '.cabins',
    start: '-50% center',
    scrub: true,
  },
  yPercent: -30,
})

gsap.from('.cabins__bedroom__image', {
  scrollTrigger: {
    trigger: '.cabins-section',
    start: '25% center',
    end: '+=600px',
    scrub: true,
  },
  scale: 0,
  opacity: 0,
  transformOrigin: 'left center',
  ease: 'none',
  stagger: 1,
  duration: 1.5,
})

// Location
gsap.to('.location-right-item', {
  scrollTrigger: {
    trigger: '.location',
    start: '-50% center',
    scrub: true,
  },
  yPercent: 40,
})

// Facilities
gsap.from('.facilities__item__text', {
  scrollTrigger: {
    trigger: '.facilities',
    markers: true,
    start: '5% center',
    end: '+=600px',
    scrub: true,
  },
  scale: 0,
  opacity: 0,
  transformOrigin: 'left center',
  ease: 'none',
  stagger: 1,
  duration: 1.5,
})
