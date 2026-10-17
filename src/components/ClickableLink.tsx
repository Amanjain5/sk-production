import React from 'react'
import { Link } from 'react-router-dom'

// Component
function ClickableLink({ to = '/contact' }: { to?: string }) {
    return <Link to={to} aria-label="Contact" className={"clickable_link w-inline-block"}></Link>
}


export default ClickableLink
