import { Hero } from '@components/common/Hero'
// import { Heading } from '@components/common/Heading'
import styled from 'styled-components'
import { CourseList } from '@components/learn/CourseList'
import { erp } from '@/config'

const Heading = styled.h1`
	color: #000;
	font-size: 7rem;
	font-weight: 900;
	text-align: center;
`

const CourseListWrapper = styled.div`
	margin-bottom: 5rem;
`

const Post = () => {
	return (
		<>
			<Hero>
				<Heading>English Romanticist Poetry 101</Heading>
			</Hero>
			<CourseListWrapper>
				<CourseList items={erp} />
			</CourseListWrapper>
		</>
	)
}

export default Post
