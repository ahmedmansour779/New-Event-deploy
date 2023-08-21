import React from 'react'
import { LinkAHref } from './style'

function NavLinkes({ navLink, navText, color }) {
    return (
        <>
            <LinkAHref style={{ color: color }} to={navLink}>
                {navText}
            </LinkAHref>
        </>
    )
}

export default NavLinkes