import React from 'react'
import styled from 'styled-components'

const Nav: React.FC = () => {
  return (
    <StyledNav>
      <StyledLink
        target="_blank"
        href="#"
      >
        Farming Contract
      </StyledLink>
      {/*<StyledLink
        target="_blank"
        href="https://uniswap.info/pair/0xce84867c3c02b05dc570d0135103d3fb9cc19433"
      >
        SushiSwap SUSHI-ETH
      </StyledLink> */}
      <StyledLink target="_blank" href="http://discord.projectmerge.org">
        Discord
      </StyledLink>
      <StyledLink target="_blank" href="https://github.com/ProjectMerge">
        Github
      </StyledLink>
      <StyledLink target="_blank" href="http://twitter.projectmerge.org/">
        Twitter
      </StyledLink>
      <StyledLink target="_blank" href="http://medium.projectmerge.org/">
        Medium
      </StyledLink>
    </StyledNav>
  )
}

const StyledNav = styled.nav`
  align-items: center;
  display: flex;
`

const StyledLink = styled.a`
  color: ${(props) => props.theme.color.grey[400]};
  padding-left: ${(props) => props.theme.spacing[3]}px;
  padding-right: ${(props) => props.theme.spacing[3]}px;
  text-decoration: none;
  &:hover {
    color: ${(props) => props.theme.color.grey[500]};
  }
`

export default Nav
