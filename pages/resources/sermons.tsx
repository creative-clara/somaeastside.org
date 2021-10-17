import React from 'react'

const APPLE_PODCAST = 'https://podcasts.apple.com/en/podcast/soma-eastside-church-sermons/id1204082103';

export default function Sermons() {
    return <div>
        <a href={APPLE_PODCAST}>Apple Podcast</a>
    </div>
}

Sermons.meta = {
    title: 'Sermons',
    author: 'brimworks'
}
