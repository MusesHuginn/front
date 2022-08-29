import Head from 'next/head'
import styled from 'styled-components'
// import { Button } from '@components/home/button'
import { useRef, useEffect } from 'react'
import { gsap } from 'gsap'
// import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ScrollTrigger } from 'gsap/dist/ScrollTrigger' // had to import from dist directory
import {
	LocomotiveScrollProvider,
	// useLocomotiveScroll,
} from 'react-locomotive-scroll'
import { Hero } from '@components/common/Hero'

const Main = styled.div`
	color: #111;
	/* background: #b9b3a9; */
	transition: 0.3s ease-out;
	overflow-x: hidden;
	max-width: 100%;
	width: 100%;
	overscroll-behavior: none;

	section:not(#section-pin) {
		min-height: 100vh;
		width: 100%;
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
		grid-gap: 2rem;
		padding: 50px 10vw;
		margin: auto;
		place-items: center;
	}

	img {
		height: 80vh;
		width: auto;
		object-fit: cover;
	}
`

const Heading = styled.h1`
	color: #000;
	font-size: 10rem;
	font-weight: 900;
`

const SectionPin = styled.section`
	height: 100vh;
	overflow: hidden;
	display: flex;
	left: 0;
	background: #111;
	color: #b9b3a9;
`

const PinWrapper = styled.div`
	height: 100vh;
	display: flex;
	justify-content: flex-start;
	align-items: center;
	padding: 50px 10vw;

	& > * {
		min-width: 60vw;
		padding: 0 5vw;
	}
`

const PinText = styled.h2`
	font-size: 2rem;
	max-width: 400px;
`

export default function Home() {
	gsap.registerPlugin(ScrollTrigger)

	const containerRef = useRef(null)
	const pinRef = useRef(null)
	const pinWrapperRef = useRef(null)
	// const { scroll } = useLocomotiveScroll()

	/* 	useEffect(() => {
		const onScroll = () => ScrollTrigger.update
		// clean up code
		window.removeEventListener('scroll', onScroll)
		window.addEventListener('scroll', onScroll, { passive: true })
		return () => window.removeEventListener('scroll', onScroll)
	}, []) */

	useEffect(() => {
		let scroller: any

		import('locomotive-scroll').then((locomotiveModule) => {
			scroller = new locomotiveModule.default({
				el: containerRef.current,
				smooth: true,
				mobile: false,
			})
			scroller.on('scroll', ScrollTrigger.update)
			ScrollTrigger.scrollerProxy(containerRef.current, {
				scrollTop(value) {
					return arguments.length
						? scroller.scrollTo(value, 0, 0)
						: scroller.scroll.instance.scroll.y
				},
				getBoundingClientRect() {
					return {
						left: 0,
						top: 0,
						width: window.innerWidth,
						height: window.innerHeight,
					}
				},
				pinType: containerRef.current.style.transform
					? 'transform'
					: 'fixed',
			})

			ScrollTrigger.addEventListener('refresh', () => scroller.update()) // error: TypeError: Cannot read properties of undefined (reading 'match')
			ScrollTrigger.refresh()
		})

		return () => {
			if (scroller) scroller.destroy()
		}
	})

	useEffect(() => {
		// let pinBoxes = pinWrapperRef
		// let pinWrap = pinRef.current
		let pinWrapWidth =
			document.querySelector<HTMLElement>('#pin-wrap').offsetWidth
		let horizontalScrollLength = pinWrapWidth - window.innerWidth

		// Pinning and horizontal scrolling
		gsap.to('#pin-wrap', {
			scrollTrigger: {
				scroller: containerRef.current, //locomotive-scroll
				scrub: true,
				trigger: '#section-pin',
				pin: true,
				// anticipatePin: 1,
				start: 'top top',
				end: pinWrapWidth,
			},
			x: -horizontalScrollLength,
			ease: 'none',
		})

		// window.removeEventListener('load', onLoad),
		// window.addEventListener('load', onLoad, { passive: true })
		// return () => window.removeEventListener('load', onLoad)
	}, [])

	return (
		<LocomotiveScrollProvider
			options={{ smooth: true }}
			watch={[]}
			containerRef={containerRef}
		>
			<Main data-scroll-container ref={containerRef}>
				<Head>
					<title>Huginn</title>
					<meta name="description" content="poetry!" />
					<link rel="icon" href="/favicon.ico" />
				</Head>
				<Hero>
					<Heading data-scroll data-scroll-speed="2">
						HUGINN
					</Heading>
					{/* <Button></Button> */}
				</Hero>
				<SectionPin ref={pinRef} id="section-pin">
					<PinWrapper ref={pinWrapperRef} id="pin-wrap">
						<PinText>
							Lorem ipsum dolor sit amet, consectetur adipiscing
							elit, sed do eiusmod tempor incididunt ut labore et
							dolore magna aliqua.
						</PinText>
						<img
							src="https://images.pexels.com/photos/1301585/pexels-photo-1301585.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=900"
							alt=""
						/>
						<img
							src="https://images.pexels.com/photos/261763/pexels-photo-261763.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=900"
							alt=""
						/>
						<img
							src="https://images.pexels.com/photos/2662180/pexels-photo-2662180.jpeg?auto=compress&cs=tinysrgb&dpr=1&h=900"
							alt=""
						/>
					</PinWrapper>
				</SectionPin>
				<section data-bgcolor="#e3857a" data-textcolor="#f1dba7">
					<h2 data-scroll data-scroll-speed="1" className="credit">
						<p>Something</p>
					</h2>
				</section>
			</Main>
		</LocomotiveScrollProvider>
	)
}
