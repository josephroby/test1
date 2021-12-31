import React from "react"

export default function Header() {
    return (
        <header>
            <nav className="nav">
                <img  src="./logo.png" width="100px"  alt="pic of react logo" />
                <h1 className='hh'>ReactApp</h1>
                <ul className="nav-items">
                    <li>Pricing</li>
                    <li>About</li>
                    <li>Contact</li>
                </ul>
            </nav>
        </header>
    )
}