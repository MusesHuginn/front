import styled from 'styled-components'
import Link from 'next/link'
import { NavLink } from '@/config'

type Props = {
	show: any
}

const SideDContainer = styled.div<Props>`
	width: 70%;
	background: #fff;
	height: 100vh;
	position: fixed;
	top: 0;
	left: 0;
	z-index: 200;
	overflow-x: hidden;
	overflow-y: auto;
	/*  overflow: hidden;
  position: absolute; */
	transform: ${({ show }) => (show ? 'translateX(0)' : 'translateX(-100%)')};
	transition: all 0.3s ease-out;
	/* Esto es para que queden en el medio (Y) */
	display: flex;
	flex-direction: column;
	justify-content: flex-start;
	@media (min-width: 960px) {
		display: none;
	}
`

const SideDUl = styled.ul`
	display: flex;
	margin-top: 55px;
	flex-direction: column;
	list-style: none;
`

const SideLi = styled.li`
	display: flex;
	align-items: center;
	& > a:hover {
		color: #0050d5;
		margin-left: 20px;
		transition: all 0.5s ease-out;
	}
	& > a {
		display: flex;
		align-items: center;
		justify-content: center;
		text-align: center;
		flex: 1;
		padding: 1rem;
		text-decoration: none;
		color: #202020;
		font-size: 1.6rem;
	}
	/* & > a > span {
        display: flex;
        align-items: center;
  } */
`

const SignDiv = styled.div`
	background: #16c5ff;
	padding: 12px 15px;
	border-radius: 20px;
`

const SideDCBadge = styled.span`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 30px;
	height: 30px;
	background-color: #171717;
	border-radius: 50%;
	margin-left: 8px;
	color: #fff;
	font-size: 1rem;
`

const SideDrawer = ({ show, click }) => {
	return (
		<SideDContainer show={show}>
			<SideDUl onClick={click}>
				{NavLink.map(({ path, display }) => (
					<SideLi>
						<Link href={path} passHref key={path}>
							{display}
						</Link>
					</SideLi>
				))}
			</SideDUl>
		</SideDContainer>
	)
}

export default SideDrawer
