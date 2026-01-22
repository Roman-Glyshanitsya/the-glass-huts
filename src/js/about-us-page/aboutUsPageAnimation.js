import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { SplitText } from 'gsap/SplitText'

gsap.registerPlugin(ScrollTrigger, SplitText)
const tl = gsap.timeline()

// Hero
tl.fromTo(
  '.about-us__hero__title',
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
).fromTo(
  '.about-us__hero__button__list',
  {
    opacity: 0,
  },
  {
    opacity: 1,
    duration: 1,
  },
)

// Main
gsap.to('.about-us-left-item', {
  scrollTrigger: {
    trigger: '.about-us__view',
    start: '0 center',
    scrub: true,
  },
  yPercent: -30,
})

gsap.to('.about-us-right-item', {
  scrollTrigger: {
    trigger: '.about-us__view',
    start: '-50% center',
    scrub: true,
  },
  yPercent: 20,
})

// SubTitle
let split = SplitText.create('.split-text', {
  type: 'chars',
})

gsap.from(split.chars, {
  y: 100,
  autoAlpha: 0,
  stagger: 0.05,
  ease: 'power3.out',
  scrollTrigger: {
    trigger: '.about-us__location',
    start: '-10% center',
    toggleActions: 'play reverse play reverse',
    once: false,
  },
})
