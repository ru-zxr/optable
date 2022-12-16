import React from 'react'
import styled from 'styled-components'
import { COLORS } from '../constants/constants'
import { Link } from 'react-router-dom'

const SidebarParent = styled.div`
  background: ${COLORS.gray100};
  height: 100vh;
  display: flex;
  flex-direction: column;
  padding-top: 5vh;
`

const SiderbarItem = styled.div`
  padding: 12px 0px;
  display: flex;
  justify-content: center;
  &:hover {
    background: ${COLORS.gray200};
  }
`

const linkStyle = {
  textDecoration: 'none',
  color: 'black',
}

const routes = ['dashboard', 'calender', 'teams', 'directory', 'announcements', 'office', 'apps', 'settings']

function Sidebar() {
  return (
    <>
      <SidebarParent>
        {routes.map((route, index) => {
          return (
            <Link to={route} style={linkStyle} key={index}>
              <SiderbarItem>{route}</SiderbarItem>
            </Link>
          )
        })}
      </SidebarParent>
    </>
  )
}
export default Sidebar
