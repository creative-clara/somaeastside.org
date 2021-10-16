import { useRouter, useDeno } from 'aleph/react'
import React, { ComponentType, useMemo } from 'react'
import { Facebook, YouTube, AppleStore, GoogleStore, Edit } from './Icons.tsx'

interface Metadata {
    title: string
    authors: string[]
    keywords?: string[]
    editable?: boolean
}

export default function Footer({ Page, pageProps }: { Page: ComponentType<any> & { meta: Metadata }, pageProps: Record<string, unknown> }) {
    const { routePath } = useRouter()

    const editUrl = useMemo(() => {
        const md = routePath === '/' ? '/index.md' : routePath + '.md'
        return 'https://github.com/brimworks/somaeastside.org/edit/master/pages' + md
    }, [routePath])

    return (
        <footer style={{display:"flex", gap:"10px", fontSize:"10px", padding: "30px", background: "black", color: "white", height: "100%", width: "100%"}}>
            <div>
                <div>Office: 158 1st Place NW Issaquah, WA 98027</div>
                <div>Sunday Service: 5025 Issaquah-Pine Lake Rd SE, Issaquah, WA 98029 (Eastside Community School)</div>
            </div>
            <div>
                <div style={{display:"flex", gap:"10px"}}>
                    <a href="https://www.facebook.com/somaeastside/" target="_blank"><Facebook color="white" /></a>
                    <a href="https://www.youtube.com/channel/UCX-mgUGh3OmX5a1E_zAyTqQ" target="_blank"><YouTube color="white" /></a>
                    <a href="https://itunes.apple.com/us/app/id1450421436" target="_blank"><AppleStore color="white" /></a>
                    <a href="https://market.android.com/details?id=com.airealmobile.somaeastsidechurch_33504" target="_blank"><GoogleStore color="white" /></a>
                    <a href={editUrl} target="_blank"><Edit color="white" /></a>
                </div>
                <p>© {(new Date).getFullYear()} Soma Eastside Church</p>
            </div>
        </footer>
    )
}