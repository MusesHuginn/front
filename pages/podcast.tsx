import Head from 'next/head'
import styled from 'styled-components'
import { AudioPlyr } from '@components/common/Plyr'
import 'plyr-react/plyr.css'

const Hero = styled.div`
	height: 90vh;
	display: flex;
	justify-content: center;
	align-items: center;
	background: #fff;
`

const Heading = styled.h1`
	color: #000;
	font-size: 10rem;
	font-weight: 900;
`

const PlyrWrapper = styled.div`
	background: #f9f9f9;
	color: #495456;
	/* margin: 72px; */
	margin: 0px 72px 72px 72px;
	font-family: Open Sans, sans-serif;
	padding: 5em;
`

export default function Podcast() {
	const plyrProps = {
		source: undefined, // https://github.com/sampotts/plyr#the-source-setter
		options: undefined, // https://github.com/sampotts/plyr#options
		// Direct props for inner video tag (mdn.io/video)
	}
	return (
		<>
			<Head>
				<title>Huginn / Podcast</title>
				<meta name="description" content="poetry!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero>
				<Heading>Podcast</Heading>
			</Hero>
			<PlyrWrapper>
				<AudioPlyr />
			</PlyrWrapper>
		</>
	)
}
