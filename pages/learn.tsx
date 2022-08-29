import Head from 'next/head'
import styled from 'styled-components'
import { Cards } from '@components/learn/Cards'
import { Hero } from '@components/common/Hero'
import { learnCards } from '@/config'

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
				<title>Huginn / Learn</title>
				<meta name="description" content="poetry!" />
				<link rel="icon" href="/favicon.ico" />
			</Head>
			<Hero>
				<Heading>Learn</Heading>
			</Hero>
			<CardWrapper>
				<Cards cards={learnCards} />
			</CardWrapper>
		</>
	)
}
