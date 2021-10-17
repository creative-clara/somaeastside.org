import React from 'react'
import { Navigation } from './Navigation.tsx'

function arrayEqual(a, b) {
    if (a.length !== b.length) {
        return false;
    }
    for (let i = 0; i < a.length; i++) {
        if (a[i] != b[i]) {
            return false;
        }
    }
    return true;
}

export default function Menu({menuPath, setMenuPath, navigation, path}: {
    navigation?: Navigation[],
    path: number[],
    menuPath: number[],
    setMenuPath(value: number[]): void,
}) {
    if (!navigation) {
        return [];
    }
    const relevantMenuPath = menuPath.slice(0, path.length + 1);
    return navigation.map((item, index) => {
        const itemPath = [...path, index]
        const display = arrayEqual(relevantMenuPath, itemPath) ? 'flex' : 'none';

        return (
            <div key={index} style={{padding: "10px", position: "relative"}} onMouseEnter={setMenuPath.bind(null, itemPath)} onMouseLeave={setMenuPath.bind(null, path)}>
                <a rel="nav" href={item.path}>{item.title}</a>
                <div style={{display, flexDirection: "column", position: "absolute", top: "100%", left: 0, background:"#000000CC"}}>
                    <Menu {...{menuPath, setMenuPath, navigation: item.items, path: itemPath}} />
                </div>
            </div>
        )
    })
}
