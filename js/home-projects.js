/**
 * Set up the list of projects
 */
const projects = [
    { divider: true, divider_id: "tab2025", name: "Current Projects", subtitle: "Completed or Working on" },
    {
        name: "Home Helper",
        subtitle: "Application, Windows",
        year: "tbc",
        image: "homehelper.png",
        links: [
            { url: "https://github.com/SlickRamen", text: "Github Repository", type: "github"},
            { url: "/page-homehelper", text: "More Info" }
        ]
    },
    {
        name: "Bloodshot",
        subtitle: "Game, Windows",
        year: "tbc",
        image: "bloodshot.png",
        links: [
            // { url: "https://itch.io", text: "Presskit", type: "redirect"},
            // { url: "/more-info", text: "Publisher Demo", type: "redirect"},
            { url: "/page-bloodshot", text: "More Info" }
        ]
    },
    {
        name: "Gromit",
        subtitle: "Application, Windows",
        year: "2025",
        image: "gromit.png",
        links: [
            { url: "https://github.com/SlickRamen/gromit", text: "Github Repository", type: "github"},
            { url: "/page-gromit", text: "More Info" }
        ]
    },
    {
        name: "Sugoi",
        subtitle: "Game, Windows",
        year: "2025",
        image: "sugoi.png",
        links: [
            // { url: "https://itch.io", text: "Link to itch.io", type: "itchio" },
            { url: "/more-info", text: "More Info" }
        ]
    },
    { divider: true, divider_id: "tab2024", name: "2024 Works" },
    {
        name: "Grape Expectations!",
        subtitle: "Application, Linux",
        year: "2024",
        image: "grape.jpg",
        links: [
            // { url: "https://itch.io", text: "Presskit", type: "redirect" },
            // { url: "/more-info", text: "Publisher Demo", type: "redirect" },
            { url: "/page-grape", text: "More Info" }
        ]
    },
    {
        name: "Alchemess",
        subtitle: "Game, Windows, Web",
        year: "2024",
        image: "alchemess2.png",
        links: [
            // { url: "https://itch.io", text: "Link to itch.io", type: "itchio" },
            { url: "/page-alchemess", text: "More Info" }
        ]
    },
    { divider: true, divider_id: "tab2022", name: "2022 Works" },
    {
        name: "Peter's Quest",
        subtitle: "Game, Windows, Web",
        year: "2022",
        image: "petersquest.png",
        links: [
            { url: "https://slickramen.itch.io/peters-quest", text: "Link to itch.io", type: "itchio" },
            { url: "/page-peters-quest", text: "More Info" }
        ]
    },
    { divider: true, divider_id: "tab2021", name: "2021 Works" },
    {
        name: "ULTRAFORCE: OBLITERATION",
        subtitle: "Game, Windows, Web",
        year: "2021",
        image: "ultraforce.png",
        links: [
            { url: "https://stepford.itch.io/ultra-force-obliteration", text: "Link to itch.io", type: "itchio" },
            { url: "/page-ufo", text: "More Info" }
        ]
    },
    {
        name: "Untitled Ninja Game",
        subtitle: "Game, Windows",
        year: "2021",
        image: "ninja.png",
        links: [
            { url: "/page-ninja", text: "More Info" }
        ]
    },
    {
        name: "Claret",
        subtitle: "Game, Web",
        year: "2021",
        image: "claret.png",
        links: [
            { url: "https://slickramen.itch.io/claret", text: "Link to itch.io", type: "itchio" },
            { url: "/page-claret", text: "More Info" }
        ]
    },
    {
        name: "Sunnyside vs. The Eggies",
        subtitle: "Game, Web",
        year: "2021",
        image: "sunnyside.png",
        links: [
            { url: "https://stepford.itch.io/sunnyside", text: "Link to itch.io", type: "itchio" },
            { url: "/page-sunnyside", text: "More Info" }
        ]
    },
    {
        name: "Cable Boy",
        subtitle: "Game, Windows",
        year: "2021",
        image: "cableboy.png",
        links: [
            { url: "https://stepford.itch.io/cable-boy", text: "Link to itch.io", type: "itchio" },
            { url: "/page-cableboy", text: "More Info" }
        ]
    },
    {
        name: "Musculus",
        subtitle: "Game, Windows",
        year: "2021",
        image: "musculus.png",
        links: [
            { url: "https://stepford.itch.io/musculus", text: "Link to itch.io", type: "itchio" },
            { url: "/page-musculus", text: "More Info" }
        ]
    },
    { divider: true, divider_id: "tab2020", name: "pre. 2020 Works" },
    {
        name: "Ceptor",
        subtitle: "Game, Windows",
        year: "2020",
        image: "ceptor.png",
        links: [
            { url: "https://slickramen.itch.io/ceptor", text: "Link to itch.io", type: "itchio" },
            { url: "/page-ceptor", text: "More Info" }
        ]
    },
    // {
    //     name: "Acumen",
    //     subtitle: "Game, Windows",
    //     year: "2020",
    //     image: "acumen.png",
    //     links: [
    //         { url: "https://itch.io", text: "Link to itch.io", type: "itchio" },
    //         { url: "/more-info", text: "More Info" }
    //     ]
    // },
    // {
    //     name: "Bump in the Night",
    //     subtitle: "Game, Windows",
    //     year: "2020",
    //     image: "bumpinthenight.png",
    //     links: [
    //         { url: "https://itch.io", text: "Link to itch.io", type: "itchio" },
    //         { url: "/more-info", text: "More Info" }
    //     ]
    // },
    {
        name: "Rogue Road",
        subtitle: "Game, Windows",
        year: "2020",
        image: "rogueroad.png",
        links: [
            { url: "https://stepford.itch.io/rogue-road", text: "Link to itch.io", type: "itchio" },
            { url: "/page-rogueroad", text: "More Info" }
        ]
    },
    // {
    //     name: "Paper Fort",
    //     subtitle: "Game, Windows",
    //     year: "2020",
    //     image: "paperfort.png",
    //     links: [
    //         { url: "https://itch.io", text: "Link to itch.io", type: "itchio" },
    //         { url: "/more-info", text: "More Info" }
    //     ]
    // },
    {
        name: "Terrene",
        subtitle: "Game, Windows",
        year: "2020",
        image: "terrene.png",
        links: [
            { url: "https://slickramen.itch.io/terrene", text: "Link to itch.io", type: "itchio" },
            { url: "/page-terrene", text: "More Info" }
        ]
    },
    {
        name: "RED SPACE",
        subtitle: "Game, Windows",
        year: "2020",
        image: "redspace.png",
        links: [
            { url: "https://slickramen.itch.io/redspace", text: "Link to itch.io", type: "itchio" },
            { url: "/page-redspace", text: "More Info" }
        ]
    },
    {
        name: "Gun Gun",
        subtitle: "Game, Windows",
        year: "2019",
        image: "gungun.png",
        links: [
            { url: "https://slickramen.itch.io/gungun", text: "Link to itch.io", type: "itchio" },
            { url: "/page-gungun", text: "More Info" }
        ]
    },
    {
        name: "DEVASTATION NATION",
        subtitle: "Game, Windows",
        year: "2019",
        image: "devastationnation.png",
        links: [
            { url: "https://stepford.itch.io/devastation-nation", text: "Link to itch.io", type: "itchio" },
            { url: "/page-devastationnation", text: "More Info" }
        ]
    },
    {
        name: "100 Bullets",
        subtitle: "Game, Windows",
        year: "2019",
        image: "100bullets.png",
        links: [
            { url: "https://slickramen.itch.io/100bullets", text: "Link to itch.io", type: "itchio" },
            { url: "/page-100bullets", text: "More Info" }
        ]
    },
    {
        name: "Realms of Requiem",
        subtitle: "Game, Windows",
        year: "2019",
        image: "realmsofrequiem.png",
        links: [
            { url: "https://slickramen.itch.io/realms-of-requiem", text: "Link to itch.io", type: "itchio" },
            { url: "/page-ror", text: "More Info" }
        ]
    },
    {
        name: "BLAMM",
        subtitle: "Game, Windows",
        year: "2018",
        image: "blamm.png",
        links: [
            { url: "https://slickramen.itch.io/blamm", text: "Link to itch.io", type: "itchio" },
            { url: "/page-blamm", text: "More Info" }
        ]
    },
    {
        name: "Blazin' Aces",
        subtitle: "Game, Windows",
        year: "2018",
        image: "blazinaces.png",
        links: [
            { url: "https://slickramen.itch.io/blazin-aces-game", text: "Link to itch.io", type: "itchio" },
            { url: "/page-blazinaces", text: "More Info" }
        ]
    }
];

// Load Projects into page
loadProjects(projects);