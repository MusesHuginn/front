import styled from 'styled-components'
import Link from 'next/link'
import { NavLink } from '@/config'

type Props = {
	show: any
}

const NavbarElement = styled.nav`
	width: 100%;
	height: 80px;
	background-color: black;
	display: flex;
	position: sticky;
	justify-content: space-between;
	align-items: center;
	padding: 1.5rem 1rem;
	z-index: 50;
	@media (max-width: 960) {
		transition: 0.8s all ease;
	}
`

const NavLogo = styled.a`
	color: #f4f4f4;
	text-decoration: none;
	font-weight: bold;
	font-size: 1.4rem;
	cursor: pointer;
	@media (max-width: 500px) {
		font-size: 1rem;
	}
`

const NavUl = styled.ul`
	height: 80px;
	display: flex;
	list-style: none;
	align-items: center;
`

const NavLi = styled.li`
	height: 40px;
	padding-left: 1.5rem;
	@media (max-width: 960px) {
		display: none;
	}
`

const NavCartLink = styled.a`
	background: none;
	/* padding: 5px 10px 10px 10px; */
	padding: 10px;
	white-space: nowrap;
	text-decoration: none;
	color: #f4f4f4;
	outline: none;
	display: flex;
	align-items: center;
	cursor: pointer;
	transition: all 0.2s ease-in-out;
`

const HamburgerLines = styled.div`
	width: 100%;
	height: 3px;
	background: #f4f4f4;
`

const HamburgerMenu = styled.div<Props>`
	display: none;
	width: 30px;
	height: 30px;
	flex-direction: column;
	justify-content: space-between;
	align-items: center;
	cursor: pointer;
	/* to do: good animation for the hamburger lines */
	/* &:hover > ${HamburgerLines} {
		background: rgb(0, 0, 0);
	} */
	@media (max-width: 960px) {
		display: flex;
		visibility: ${({ show }) => (show ? 'hidden' : 'visible')};
	}
`

const Navbar = ({ click, show }) => {
	return (
		<NavbarElement>
			<Link href="/" passHref>
				<NavLogo>HUGINN</NavLogo>
			</Link>
			<NavUl>
				{NavLink.map(({ path, display }) => (
					<NavLi>
						<Link href={path} passHref key={path}>
							<NavCartLink>{display}</NavCartLink>
						</Link>
					</NavLi>
				))}
			</NavUl>
			<HamburgerMenu show={show} onClick={click}>
				<HamburgerLines></HamburgerLines>
				<HamburgerLines></HamburgerLines>
				<HamburgerLines></HamburgerLines>
			</HamburgerMenu>
		</NavbarElement>
	)
}

export default Navbar
