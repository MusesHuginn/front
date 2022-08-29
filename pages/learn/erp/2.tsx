import styled from 'styled-components'
import { erp } from '@/config'
import { VideoPlyr } from '@components/common/Plyr'
import {
	Heading,
	Text,
	Poem,
	Quote,
	Cite,
} from '@components/learn/Typorgraphy/Typography'

const PlyrWrapper = styled.div`
	height: 90vh;
	padding: 2rem 2rem 0 2rem;
`

const TextWrapper = styled.div`
	background: #f9f9f9;
	color: #495456;
	/* margin: 72px; */
	margin: 0px 72px 72px 72px;
	font-family: Open Sans, sans-serif;
	padding: 5em;
`

const TitleWrapper = styled.div`
	display: flex;
	justify-content: center;
`

const Title = styled.h1``

const Post = () => {
	return (
		<>
			<PlyrWrapper>
				<TitleWrapper>
					<Title>{erp[1].title}</Title>
				</TitleWrapper>

				<VideoPlyr
					videoId="abWNnHAeO-Q"
					videoProvider="youtube"
				></VideoPlyr>
			</PlyrWrapper>
			<TextWrapper>
				<Heading>Text Version</Heading>
			</TextWrapper>
		</>
	)
}

export default Post
