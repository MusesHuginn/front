import Head from 'next/head'
import styled from 'styled-components'
import { Covers } from '@components/quarterly/Covers'
import { quarterlyCards } from '@/config'
import { Hero } from '@components/common/Hero'

const Heading = styled.h1`
	color: #000;
	font-size: 10rem;
	font-weight: 900;
`

const CardWrapper = styled.div`
	background: #f9f9f9;
	color: #495456;
	/* margin: 72px; */
	margin: 0px 72px 72px 72px;
	font-family: Open Sans, sans-serif;
	padding: 5em;
`

export default function About() {
	return (
		<>
			<Head>
				<title>Huginn / Quarterly</title>
				<meta name="description" content="poetry!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero>
				<Heading>Quarterly</Heading>
			</Hero>
			<CardWrapper>
				<Covers cards={quarterlyCards} />
			</CardWrapper>
		</>
	)
}
