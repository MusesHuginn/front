import { useRouter } from 'next/router'
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

export const getStaticPaths = async () => {
	const res = await fetch('https://jsonplaceholder.typicode.com/users')
	const data = await res.json()
	const paths = data.map((content) => {
		return {
			params: { id: content.id.toString() },
		}
	})

	return {
		paths,
		fallback: false,
	}
}

const Post = () => {
	const router = useRouter()
	const { pid } = router.query
	return (
		<>
			<PlyrWrapper>
				<TitleWrapper>
					<Title>{erp[0].title}</Title>
				</TitleWrapper>

				<VideoPlyr
					videoId="abWNnHAeO-Q"
					videoProvider="youtube"
				></VideoPlyr>
			</PlyrWrapper>
			<TextWrapper>
				<Heading>Text Version</Heading>
				<Text>
					Romanticism is notoriously hard to define. Created by poets,
					artists and political activists in mid-18th century Europe,
					it is not a literature, nor an art, nor a political
					movement, it is rather a set of ideas—a mindset—that has
					rooted itself in the innermost nooks of our hearts. Indeed,
					it is not even history—many aspects of the modern world
					wherein we presently dwell is very much under the influence
					of the movement.
				</Text>
				<Text>
					To answer the question of 'what is Romanticism', this course
					will take you through some of the most important figures of
					Romanticism: the English Romanticists—Wordsworth, Keats,
					Byron, Shelley, Coleridge; the French Romanticists—Rousseau,
					Robespierre, Hugo; the German Romanticists—Tieck, Hölderlin,
					Schlegel, and how they look at nature, love, life, sex,
					children.
				</Text>
				<Text>
					Prior to Romanticism is the Age of Enlightenment, and
					Romanticism is a revolt against exactly that. Philosophers
					of the Enlightenment period presents a general exaltation of
					reason over emotion and of the intellect over senses;
					Romanticists do the exact opposite: Romanticism emphasises
					the individual, the intuitive, the irrational, the
					imaginative, the subjective, the emotional, the beautiful,
					and the transcendental.
				</Text>
				<Text>
					And this is why Romanticism can also be seen as a rejection
					of modernisation: Romanticists believe that modernity had
					alienated men from their own selves—their true selves—by
					making people forget their good nature. And this is why the
					Romanticists put emphasis on naive children, and nature. It
					criticises the arriving industrialisation, urbanisation,
					secularisation. Rosseau, in his Social Contract, believes
					that man is born to be in harmony with others, that there is
					two principles that is established before all reason: pity
					and self-preservation. And it is precisely with these two
					principles that all men in a society should come to a
					natural harmony: a harmony where there is no selfishness, no
					lies betwixt man and man, a harmony where everything is in a
					natural state—a harmony corrupted by modernity.
				</Text>
				<Poem>
					I heard a thousand blended notes,
					<br />
					While in a grove I sate reclined,
					<br />
					In that sweet mood when pleasant thoughts
					<br />
					Bring sad thoughts to the mind.
					<br />
					<br />
					To her fair works did nature link
					<br />
					The human soul that through me ran;
					<br />
					And much it grieved my heart to think
					<br />
					What man has made of man.
					<br />
					<Cite>William Wordsworth</Cite>
				</Poem>
				<Text>
					The Romanticists are famous for their intense appreciation
					of nature. Philosophically, they respect human nature: they
					respect that which is the most intuitive, that which is in
					the innermost depths of one's heart. So long as it is
					natural, a romanticist can accept that which is exotic, that
					which is remote, weird, occult, diseased, even satanic. But
					the natural world is always that which the romanticists
					admires most. Unlike sociable thinkers of the Enlightenment
					period, Romanticists do not have trust in human beings;
					indeed, the most ideal state for an artist is when he is
					surrounded by nature—preferably alone. Shelley says,
				</Text>
				<Quote>
					Hence in solitude, or that deserted state when we are
					surrounded by human beings and yet they sympathize not with
					us, we love the flowers, the grass, the waters, and the sky.
					In the motion of the very leaves of spring, in the blue air,
					there is then found a secret correspondence with our heart.
					There is eloquence in the tongueless wind, and a melody in
					the flowing brooks and the rustling of the reeds beside
					them, which by their inconceivable relation to something
					within the soul awaken the spirits to dance of breathless
					rapture, and bring tears of mysterious tenderness to the
					eyes, like the enthusiasm of patriotic success, or the voice
					of one beloved singing to you alone.
				</Quote>
				<Text>
					Along with the intense appreciation of nature, Romanticism
					has many other characteristics, such as a turning in upon
					the self and a focus upon individuality and its thoughts and
					mental potentialities. Individuality is deemed sacred when
					it comes to Romanticism; it is an ideal so vital to human
					beings that it is almost inviolable. Just like the social
					harmony and goodness of nature, however, Individuality is
					also corrupted by Modernity: the factories—the 'dark,
					satanic mills' as Blake calls it—made men nothing but
					replaceable parts; mass political movements such as the
					French Revolution utilises the power of the crowd, at the
					expense of diminishing individual accomplishment; the armies
					urge to train soldiers into walking with the exact same
					postures and follow nothing but command; etc. In response,
					the Romantics created many a hero—mostly an exceptional and
					sometimes even eccentric figure—to go against this trend.
				</Text>
			</TextWrapper>
		</>
	)
}

export default Post
