import { useRouter } from 'aleph/react'
import React, { useState } from 'react'
import NAV, { Navigation } from './Navigation.tsx'
import Menu from "./Menu.tsx"
import { Soma } from "./Icons.tsx"

export default function Header() {
    const { pathname } = useRouter()

    // Array indexes of currently open menus:
    const [ menuPath, setMenuPath ] = useState([]);

    return (
        <header style={{  whiteSpace: "nowrap", padding: "5px", display: "flex", alignItems: "center", gap: "30px", height:"50px", width:"100%", background: "black", color: "white"}}>
            <div>
                <a rel="nav" href="/" style={{ display:"flex", gap:"10px" }}>
                    <Soma height="40px" width="40px" />
                    <div style={{ display:"flex", flexDirection:"column", alignItems:"center", justifyContent: "center" }}>
                        <div style={{ fontSize:"10px" }}>
                            SOMA EASTSIDE
                        </div>
                        <div style={{ fontSize:"20px" }}>
                            CHURCH
                        </div>
                    </div>
                </a>
            </div>
            <Menu {...{menuPath, setMenuPath, navigation: NAV, path: []}} />
        </header>
    )
}