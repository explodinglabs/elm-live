import React from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import { colors, media, Sans, Mono, Wrapper, BodySmall, Jumbo, NoButton } from './elements'

const menuIconSize = '4.5rem'

const NavWrapper = styled.div`
  background-color: ${colors.white};
  border-bottom: 0.5rem solid ${colors.secondaryDarkest};
  display: flex;
  left: 50%;
  max-width: 962px;
  padding: 4rem 0;
  position: fixed;
  top: 0;
  transform: translateX(-50%);
  width: 85%;
  z-index: 999;
`

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;

  & svg {
    height: 8rem;
    width: auto;
    margin-right: 3rem;
  }
`

function LogoIcon () {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 313.81 460'>
      <path fill='#f77f00' d='M290.55,192.55a5.29,5.29,0,0,1-.46,4L150.24,457.13a5.27,5.27,0,0,1-2.09,2.17l-.55-1.19V292a5.43,5.43,0,0,0-6.83-5.26L88.85,300.68l-29.8,8a4.32,4.32,0,0,1-1.68.16l.05-.59L198.74,43.63l1.14-.22a4.42,4.42,0,0,1,.11,1V209.63a5.43,5.43,0,0,0,6.83,5.23l82.27-22Z' />
      <path fill='#ffa01c' d='M290.55,192.55l-1.46.27-82.27,22a5.43,5.43,0,0,1-6.83-5.23V167.06l31.73-8.49a5.36,5.36,0,0,1,4.12.54L288,189.24A5.36,5.36,0,0,1,290.55,192.55Z' />
      <path fill='#ef6300' d='M199.88,43.41l-1.14.22L57.42,308.25l-.05.59a5.26,5.26,0,0,1-2.44-.7L2.7,278a5.42,5.42,0,0,1-2.06-7.24l138-258.38a5.42,5.42,0,0,1,7.51-2.14l51.14,29.52A5.42,5.42,0,0,1,199.88,43.41Z' />
      <path fill='#ef6300' d='M147.6,458.11l.55,1.19a5.45,5.45,0,0,1-5.4,0L91.61,429.75a5.44,5.44,0,0,1-2.71-4.69V300.84l-.05-.16,51.92-13.91A5.43,5.43,0,0,1,147.6,292Z' />
      <path fill='#0d1f2d' d='M309.05,180.3l-52.21-30.14a9.39,9.39,0,0,0-7.2-.95L223,156.34V39a9.53,9.53,0,0,0-4.74-8.22L167.15,1.28A9.49,9.49,0,0,0,154,5L16,263.4a9.46,9.46,0,0,0,3.63,12.69l52.22,30.15a9.37,9.37,0,0,0,7.19.95l24.74-6.63V419.62a9.52,9.52,0,0,0,4.75,8.22l51.15,29.53a9.48,9.48,0,0,0,13.1-3.73L312.67,193A9.44,9.44,0,0,0,309.05,180.3Zm-57.3-23.23a1.37,1.37,0,0,1,1,.13L301,185.06l-76.29,20.45a1.34,1.34,0,0,1-1.18-.24,1.31,1.31,0,0,1-.53-1.07V164.76Zm-228,112a1.35,1.35,0,0,1-.52-1.82l138-258.37a1.35,1.35,0,0,1,1.87-.54l50.44,29.13L74.25,298.21ZM112.62,420.8a1.36,1.36,0,0,1-.68-1.18V298.38l48.87-13.09a1.31,1.31,0,0,1,1.18.23,1.35,1.35,0,0,1,.53,1.08v163Zm58,19.67V286.6a9.49,9.49,0,0,0-12-9.17l-51.92,13.91-22.92,6.14,131-245.34V204.2a9.5,9.5,0,0,0,9.46,9.49,9.55,9.55,0,0,0,2.48-.33l76.7-20.55Z' />
    </svg>
  )
}

const LogoText = styled.p`
  ${Sans(colors.secondaryDarkest)}
  font-size: 4rem;
  font-weight: bold;
  margin: 0;
  padding: 0;
`

const IconWrapper = styled.div`
  display: flex;
  flex: 1;
  align-items: center;
  justify-content: flex-end;

  & a {
    display: block;
    width: ${menuIconSize};
    height: ${menuIconSize};
    margin-right: 4.5rem;
  }
`

function WebIcon () {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'>
      <path fill={colors.secondaryDarkest} d='M300 146l-.06-1.33c0-.89-.06-1.79-.11-2.68 0-.51-.06-1-.09-1.54-.05-.82-.11-1.63-.17-2.44 0-.54-.1-1.08-.14-1.62-.07-.78-.15-1.56-.23-2.34-.06-.55-.12-1.1-.19-1.64-.09-.77-.18-1.53-.28-2.3-.07-.54-.15-1.09-.23-1.63-.11-.76-.22-1.52-.34-2.28l-.27-1.6c-.13-.77-.26-1.53-.41-2.29-.09-.52-.19-1-.29-1.55-.16-.78-.32-1.56-.49-2.34-.1-.49-.21-1-.32-1.46-.18-.81-.37-1.62-.57-2.42-.1-.45-.21-.9-.32-1.35-.22-.86-.45-1.71-.68-2.57-.11-.38-.21-.77-.31-1.15-.28-1-.56-1.93-.85-2.89l-.24-.79A146 146 0 0 0 288 91.12c-.06-.15-.12-.29-.19-.44-.44-1-.9-2.06-1.36-3.08-.1-.2-.19-.4-.28-.6q-.68-1.45-1.38-2.88c-.1-.22-.21-.44-.32-.66-.47-.94-.94-1.87-1.42-2.79l-.35-.67c-.49-.93-1-1.85-1.51-2.77l-.33-.6c-.52-.94-1.06-1.87-1.61-2.8l-.3-.5c-.57-1-1.16-1.93-1.76-2.88-.08-.12-.15-.24-.22-.36-.65-1-1.31-2-2-3.06l-.07-.12a150.92 150.92 0 0 0-25.42-29.18 151.93 151.93 0 0 0-16.08-12.42q-6.14-4.11-12.67-7.61c-1.26-.68-2.53-1.33-3.82-2l-.36-.18c-1.23-.62-2.48-1.21-3.73-1.79l-.2-.09q-6-2.76-12.22-5l-.62-.22c-1.18-.41-2.36-.81-3.55-1.2l-.65-.21q-4.19-1.33-8.49-2.43l-.21-.06c-1.3-.32-2.6-.63-3.91-.93l-1-.22c-1.07-.23-2.15-.45-3.23-.66l-1.16-.22c-1.13-.21-2.27-.41-3.41-.59l-.87-.15c-1.44-.22-2.89-.43-4.35-.61l-.38-.05C167.26 1 166 .84 164.66.71L163.33.6l-3-.24-1.5-.1c-1-.06-2-.1-3.06-.14h-1.35C152.93 0 151.47 0 150 0s-2.79 0-4.18.06l-1.35.05c-.94 0-1.88.07-2.82.13l-1.57.09-2.58.19-1.62.15c-.85.08-1.7.16-2.54.26-.53 0-1.06.11-1.58.18-.88.1-1.75.22-2.62.34l-1.44.2c-1 .15-2 .32-3 .49l-1 .16c-1.34.24-2.69.5-4 .77l-.42.09c-1.18.25-2.36.51-3.53.78l-1.18.29c-.92.22-1.84.45-2.75.69l-1.33.36-2.63.72-1.33.4c-.87.26-1.74.53-2.6.81l-1.24.4c-.94.31-1.87.64-2.8 1l-1 .34q-1.85.66-3.66 1.38h-.05c-1.29.51-2.58 1-3.86 1.58l-.16.07c-1.17.5-2.33 1-3.48 1.54l-.78.36-2.84 1.36-.92.45q-1.35.67-2.7 1.38l-.88.47L76.82 19l-.72.41c-1 .59-2.1 1.2-3.14 1.83l-.27.16q-5.25 3.16-10.21 6.74l-.39.28c-1 .69-1.9 1.39-2.83 2.1l-.51.39c-.91.7-1.81 1.41-2.71 2.13l-.46.37c-.95.77-1.89 1.55-2.82 2.35l-.24.2A149.88 149.88 0 0 0 40.7 47.28l-.19.2c-.85.92-1.69 1.84-2.53 2.77l-.29.33c-.81.92-1.62 1.85-2.41 2.79l-.23.28c-.86 1-1.7 2.05-2.53 3.09a150.31 150.31 0 0 0-14.77 22.43c-.67 1.25-1.32 2.51-1.95 3.77-.08.16-.16.31-.23.47-.57 1.18-1.16 2.37-1.71 3.59l-.18.37q-2.73 6-5 12.16l-.24.69c-.4 1.14-.79 2.29-1.16 3.44-.09.26-.17.51-.25.77-.41 1.28-.81 2.58-1.18 3.88a1.55 1.55 0 0 0-.07.23c-.38 1.46-.78 2.85-1.14 4.31v.19c-.33 1.31-.64 2.62-.93 3.94l-.23 1c-.23 1.06-.45 2.12-.66 3.19-.08.4-.16.8-.23 1.2-.21 1.11-.4 2.22-.58 3.33-.05.32-.11.64-.16 1-.22 1.44-.43 2.89-.61 4.34v.36c-.24 1.3-.4 2.6-.52 3.92 0 .44-.08.89-.12 1.34-.09 1-.17 2-.24 3 0 .5-.07 1-.1 1.51-.05 1-.1 2-.14 3.06v1.36C0 147.07 0 148.53 0 150c0 1.38 0 2.75.06 4.12 0 .45 0 .9.05 1.36 0 .91.07 1.83.12 2.74 0 .53.06 1.06.1 1.59 0 .83.11 1.66.17 2.49l.15 1.7c.08.81.15 1.61.24 2.41.06.56.13 1.11.19 1.66.1.8.2 1.6.31 2.39.07.54.15 1.08.22 1.62l.39 2.4c.08.51.16 1 .25 1.52.16.88.32 1.76.49 2.64.09.43.16.86.25 1.28.24 1.18.49 2.36.76 3.53 0 .12 0 .24.08.35.3 1.31.61 2.6 1 3.89.08.32.17.64.26 1 .25 1 .51 1.91.78 2.86l.39 1.29c.25.84.5 1.67.76 2.5.14.46.3.92.45 1.38.26.79.52 1.59.8 2.38l.48 1.38c.28.79.57 1.58.87 2.36.17.45.33.89.51 1.34.31.81.63 1.61 1 2.41.16.41.33.81.49 1.22.37.87.75 1.74 1.13 2.61l.42 1q.76 1.68 1.56 3.36s0 .1.08.16c.58 1.21 1.18 2.41 1.79 3.61l.12.22q.82 1.62 1.71 3.21l.46.83c.47.86 1 1.71 1.45 2.56.19.33.39.66.59 1 .47.79.94 1.58 1.42 2.37l.64 1c.49.77 1 1.54 1.48 2.3l.64 1c.52.79 1.05 1.56 1.59 2.34l.6.87c.6.84 1.2 1.67 1.81 2.5l.46.63q3.52 4.77 7.42 9.22l.33.38c.74.85 1.49 1.68 2.25 2.51l.59.63c.69.74 1.38 1.48 2.08 2.2l.69.71 1.98 1.97.72.7c.72.7 1.44 1.38 2.16 2l.67.63 2.38 2.14.51.45c1 .84 1.94 1.68 2.93 2.5a150.36 150.36 0 0 0 34.15 21.33c1.12.51 2.25 1 3.39 1.48.29.12.59.23.88.36l2.62 1.06 1.17.44c.79.3 1.57.6 2.37.89l1.32.47 2.26.78 1.43.46q1.09.36 2.19.69c.5.16 1 .3 1.5.45l2.16.62q.78.23 1.56.42l2.14.56 1.6.39c.71.17 1.43.34 2.14.49.55.13 1.09.25 1.64.36l2.14.44 1.66.31c.71.14 1.43.26 2.15.38l1.68.28c.72.12 1.45.22 2.17.32l1.69.24 2.21.27 1.68.19c.75.08 1.51.15 2.27.21.55.05 1.1.11 1.65.15l2.37.16 1.57.1c.87 0 1.75.07 2.63.11l1.33.17c1.3 0 2.6.05 3.91.05h.09c1.39 0 2.76 0 4.14-.06l1.37-.05 2.78-.12 1.58-.1 2.55-.19 1.64-.14 2.5-.26 1.6-.18c.86-.1 1.71-.22 2.57-.34l1.48-.2 2.84-.46 1.16-.19c2.68-.47 5.34-1 8-1.63l1-.24c1-.24 2-.48 2.94-.74l1.23-.33L192 294l1.27-.38c.88-.26 1.76-.53 2.63-.81l1.2-.39c.93-.31 1.85-.63 2.76-.95.34-.12.68-.23 1-.36 1.08-.38 2.16-.79 3.22-1.2l.49-.18q3.82-1.5 7.55-3.2l.26-.12c1.12-.52 2.24-1 3.34-1.59l.65-.32c1-.48 2-1 2.94-1.49l.72-.38c1-.51 1.93-1 2.88-1.57l.64-.35c1-.58 2-1.17 3-1.77l.37-.22a152.18 152.18 0 0 0 13.54-9.15l.08-.07c1-.79 2.07-1.59 3.09-2.41l.22-.18c1-.8 2-1.61 3-2.44l.17-.14A151.47 151.47 0 0 0 264.43 247c.88-1 1.75-2.09 2.61-3.16a150.62 150.62 0 0 0 14.07-20.92q3.38-6 6.19-12.42l.05-.12c.6-1.37 1.19-2.76 1.75-4.16a1.17 1.17 0 0 0 .05-.11c1.16-2.87 2.23-5.77 3.21-8.72a.56.56 0 0 1 0-.12c.44-1.36.87-2.72 1.28-4.09.07-.21.13-.43.19-.64.39-1.31.76-2.62 1.11-3.94 0-.14.07-.27.11-.41q1.14-4.35 2-8.8c.07-.32.12-.64.19-1 .22-1.14.42-2.29.62-3.44l.18-1.13c.2-1.27.39-2.54.56-3.82 0-.2.06-.4.08-.59.2-1.48.36-3 .51-4.47 0-.32.06-.66.09-1 .11-1.14.2-2.29.28-3.44l.09-1.44c.06-1.07.11-2.13.16-3.2 0-.46 0-.91.05-1.36 0-1.5.07-3 .07-4.5.07-1.35.07-2.69.07-4zm-64.62-77.45q1.92 2 3.72 4.09a173 173 0 0 1 3.35 55.09 159 159 0 0 1-6.45 31.44 333.89 333.89 0 0 0-30.33-27.34c12.69-21.58 23.07-43.16 29.71-63.28zM195.08 149a303.47 303.47 0 0 1 32.86 30.71 155.51 155.51 0 0 1-16.69 27.37c-2.25 3-4.61 5.82-7 8.58a308.62 308.62 0 0 1-45.84-16A590.3 590.3 0 0 0 195.08 149zm-55.23 41.7q-4-2.1-7.88-4.3a247.15 247.15 0 0 1-43-30.64 220.65 220.65 0 0 1 16.83-32.45 213 213 0 0 1 15.08-21 376.42 376.42 0 0 1 40.64 22.52q9.14 5.82 17.69 12-6.3 9.81-13.4 19.87c-8.26 11.64-17 23.06-25.96 33.97zm79.07-136.51c-5.33 19.25-15.29 41.57-29.28 65.55q-8.44-6-17.41-11.77a403 403 0 0 0-37.38-21.13A184.59 184.59 0 0 1 202 44a118 118 0 0 1 16.92 10.19zM150 32a119.19 119.19 0 0 1 24 2.43 202.73 202.73 0 0 0-27.63 16.64A211.57 211.57 0 0 0 115.61 78a302.11 302.11 0 0 0-44.93-15.36A117.12 117.12 0 0 1 150 32zM55.2 79.7A264 264 0 0 1 101.89 94q-6.9 8.9-13 18.61a241.72 241.72 0 0 0-15.14 28 164.28 164.28 0 0 1-29-44.08A117.28 117.28 0 0 1 55.2 79.7zm.19 118.48c-1.16 6.32-2 12.57-2.62 18.72A117.12 117.12 0 0 1 32 150a118.81 118.81 0 0 1 3.32-28 196.31 196.31 0 0 0 30.1 39 240.64 240.64 0 0 0-10.03 37.18zm16.41 40.18c-.24-19.89 3.16-41.4 9.78-62.52a273.65 273.65 0 0 0 40.51 27.92q2.23 1.26 4.48 2.49a450.62 450.62 0 0 1-41.94 42 119.1 119.1 0 0 1-12.83-9.89zm48.2 25.81a116.12 116.12 0 0 1-16.69-5.73 495 495 0 0 0 41.72-42.93 331.93 331.93 0 0 0 42.7 16.19A149.25 149.25 0 0 1 120 264.17zm53.59 1.47a171.36 171.36 0 0 0 37.21-27.91c5 1.1 9.91 2.05 14.79 2.86a116.78 116.78 0 0 1-51.97 25.05zm69.26-42.83c-5.47-.57-11.06-1.35-16.73-2.35.34-.43.68-.85 1-1.29a174.79 174.79 0 0 0 14.73-22.86q5.25 6.9 9.67 13.85a118.11 118.11 0 0 1-8.64 12.65zm18.51-33.69q-4.75-6.57-10.15-13.06a179.15 179.15 0 0 0 11.1-46.29q.68-6.57.88-13.17a119.07 119.07 0 0 1-1.83 72.52z' />
    </svg>
  )
}

function GithubIcon () {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 292.6'>
      <path fill={colors.secondaryDarkest} d='M150,0a150,150,0,0,0-47.41,292.34c7.51,1.37,10.24-3.26,10.24-7.24,0-3.55-.13-13-.2-25.51-41.72,9.06-50.53-20.11-50.53-20.11-6.82-17.32-16.66-21.93-16.66-21.93-13.62-9.31,1-9.13,1-9.13,15.05,1.07,23,15.46,23,15.46,13.38,22.92,35.11,16.3,43.66,12.47,1.36-9.69,5.23-16.31,9.52-20-33.31-3.79-68.33-16.66-68.33-74.14a58,58,0,0,1,15.45-40.25c-1.55-3.79-6.7-19,1.46-39.7,0,0,12.6-4,41.25,15.38a142.17,142.17,0,0,1,75.11,0c28.63-19.41,41.2-15.38,41.2-15.38,8.19,20.66,3,35.91,1.5,39.7a57.91,57.91,0,0,1,15.42,40.25c0,57.63-35.08,70.31-68.49,74,5.38,4.63,10.18,13.78,10.18,27.78,0,20-.18,36.22-.18,41.14,0,4,2.7,8.68,10.31,7.22A150,150,0,0,0,150,0' />
    </svg>
  )
}

const MenuWrapper = styled.div`
  display: flex;
  align-items: center;
`

const MenuButton = styled(NoButton)`
  height: ${menuIconSize};
  width: ${menuIconSize};
  cursor: pointer;
`

function MenuIcon () {
  return (
    <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 300 300'>
      <path fill={colors.secondaryDarkest} d='M268 32v236H32V32h236m32-32H0v300h300V0z' />
      <path fill={colors.secondaryDarkest} d='M80.06 80.06h139.87v20H80.06zM80.06 120.06h139.87v20H80.06zM80.06 159.94h139.87v20H80.06zM80.06 199.94h139.87v20H80.06z' />
    </svg>
  )
}

function MenuToggle ({ handleClick }) {
  return (
    <MenuButton onClick={handleClick}>
      <MenuIcon />
    </MenuButton>
  )
}

const MenuListWrapper = styled.div`
  position: fixed;
  right: 0;
  top: 0;
  height: 100vh;
  width: 100%;
  max-width: 400px;
  background-color: ${colors.white};
  padding: 20rem;
`

const MenuList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
`

const MenuItem = styled.li`
  margin: 0;
`

const MenuLink = styled.li`
  ${Mono(colors.black)}
  text-decoration: none;
  cursor: pointer;
  padding: 2rem 0;

  &:hover {
    text-decoration: underline;
  }
`

function Menu ({ menuItems, menuOpen }) {
  return (
    <MenuListWrapper>
      <MenuList>
        {menuItems.map(name =>
          <MenuItem><MenuLink href={name.getOrElse('--not-found').replace('--', '#')}>{name.getOrElse('--not-found')}</MenuLink></MenuItem>
        )}
      </MenuList>
    </MenuListWrapper>
  )
}

const MissingStats = styled.div`
  height: 24rem;
  border-left: 1px solid ${colors.secondaryLighter};
  margin: 16.5rem 0 0;
`

const StatList = styled.ul`
  display: flex;
  list-style-type: none;
  margin: 16.5rem 0 0;
  padding: 0;
`

const Stat = styled.li`
  padding: 4rem 4rem 4rem 0;
  width: 25%;
  margin-right: 5rem;
  border-right: 1px solid ${colors.secondaryLighter};

  &:last-child {
    border-right: none;
  }

  ${media.md`
    width: auto;
    padding: 5rem 30rem 5rem 0;
  `}
`

const StatText = styled(BodySmall)`
  margin: 0;
`

const StatValue = styled(Jumbo)`
  margin: 2rem 0 0;
`

const renderMissingStats = () => (<MissingStats />)

const renderStats = statsArr => (
  <StatList>
    {statsArr.map(({ name, value }) => (
      <Stat key={`${name}-${value}`} >
        <StatText>{name}</StatText>
        <StatValue>{value}</StatValue>
      </Stat>
    ))}
  </StatList>
)

export default class Header extends React.Component {
  state = { menuOpen: false }
  toggleMenu = (e) => {
    this.setState(({ menuOpen }) => ({ menuOpen: !menuOpen }))
  }
  render () {
    const { repoUrl, stats, menuItems } = this.props
    return (
      <Wrapper>
        <NavWrapper>
          <LogoWrapper>
            <LogoIcon />
            <LogoText>elm-live</LogoText>
          </LogoWrapper>
          <IconWrapper>
            <a href='https://wking.io/'><WebIcon /></a>
            <a href={repoUrl.getOrElse('https://github.com/wking-io/elm-live')}><GithubIcon /></a>
          </IconWrapper>
          <MenuWrapper>
            <MenuToggle handleClick={this.toggleMenu} />
            <Menu menuItems={menuItems} menuOpen={this.state.menuOpen} />
          </MenuWrapper>
        </NavWrapper>
        {stats.fold(renderMissingStats, renderStats)}
      </Wrapper>
    )
  }
}

Header.propTypes = {
  repoUrl: PropTypes.object.isRequired,
  stats: PropTypes.object.isRequired
}
