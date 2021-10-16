export interface Navigation {
    title: string,
    path: string,
    items?: Navigation[],
}

const NAV: Navigation[] = [
    {
        title: 'About',
        path: '/about/',
        items: [
            {
                title: 'Our Team',
                path: '/about/our-team/',
            },
            {
                title: 'Plan Your Visit',
                path: '/about/what-to-expect/',
            }
        ]
    },
    {
        title: 'What To Expect',
        path: '/expectations',
    },
    {
        title: 'Resources',
        path: '/resources/',
        items: [
            {
                title: 'Sermons',
                path: '/resources/sermons/',
            },
            {
                title: 'Articles',
                path: '/resources/articles/',
            },
            {
                title: 'Blog',
                path: '/our-blog/',
            },
        ],
    },
    {
        title: 'Giving',
        path: '/giving/',
    },
];

export default NAV;