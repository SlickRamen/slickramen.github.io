/**
 * Set up the list of projects
 */
const projects = [
    { divider: true, divider_id: "tab2025", name: "Current Projects", subtitle: "Completed or Working on" },
    {
        name: "Home Helper",
        subtitle: "Application, Windows",
        year: "2025",
        image: "homehelper.png",
        links: [
            { url: "https://itch.io", text: "Presskit", type: "redirect"},
            { url: "/more-info", text: "Publisher Demo", type: "redirect"},
            { url: "/more-info", text: "More Info" }
        ]
    },
    {
        name: "Bloodshot",
        subtitle: "Game, Windows",
        year: "2025",
        image: "bloodshot.png",
        links: [
            { url: "https://itch.io", text: "Presskit", type: "redirect"},
            { url: "/more-info", text: "Publisher Demo", type: "redirect"},
            { url: "/more-info", text: "More Info" }
        ]
    },
    { divider: true, divider_id: "tab2024", name: "2024 Works" },
    {
        name: "Grape Expectations!",
        subtitle: "Application, Linux",
        year: "2024",
        image: "bloodshot.png",
        links: [
            { url: "https://itch.io", text: "Presskit", type: "redirect" },
            { url: "/more-info", text: "Publisher Demo", type: "redirect" },
            { url: "/more-info", text: "More Info" }
        ]
    },
    {
        name: "Alchemess",
        subtitle: "Game, Windows, Web",
        year: "2024",
        image: "alchemess.png",
        links: [
            { url: "https://itch.io", text: "Link to itch.io", type: "redirect" },
            { url: "/more-info", text: "More Info" }
        ]
    },
    { divider: true, divider_id: "tab2022", name: "2022 Works" },
    {
        name: "Peter's Quest",
        subtitle: "Game, Windows, Web",
        year: "2022",
        image: "petersquest.png",
        links: [
            { url: "https://itch.io", text: "Link to itch.io", type: "redirect" },
            { url: "/more-info", text: "More Info" }
        ]
    },
    { divider: true, divider_id: "tab2021", name: "2021 Works" },
    {
        name: "ULTRAFORCE: OBLITERATION",
        subtitle: "Game, Windows, Web",
        year: "2021",
        image: "roguebots.png",
        links: [
            { url: "https://itch.io", text: "Link to itch.io", type: "redirect" },
            { url: "/more-info", text: "More Info" }
        ]
    },
    {
        name: "Untitled Ninja Game",
        subtitle: "Game, Windows",
        year: "2021",
        image: "roguebots.png",
        links: [
            { url: "https://itch.io", text: "Link to itch.io", type: "redirect" },
            { url: "/more-info", text: "More Info" }
        ]
    },
    {
        name: "Claret",
        subtitle: "Game, Web",
        year: "2021",
        image: "claret.png",
        links: [
            { url: "https://itch.io", text: "Link to itch.io", type: "redirect" },
            { url: "/more-info", text: "More Info" }
        ]
    },
    {
        name: "Sunnyside vs. The Eggies",
        subtitle: "Game, Web",
        year: "2021",
        image: "sunnyside.png",
        links: [
            { url: "https://itch.io", text: "Link to itch.io", type: "redirect" },
            { url: "/more-info", text: "More Info" }
        ]
    },
    {
        name: "Cable Boy",
        subtitle: "Game, Windows",
        year: "2021",
        image: "cableboy.png",
        links: [
            { url: "https://itch.io", text: "Link to itch.io", type: "redirect" },
            { url: "/more-info", text: "More Info" }
        ]
    },
    {
        name: "Musculus",
        subtitle: "Game, Windows",
        year: "2021",
        image: "musculus.png",
        links: [
            { url: "https://itch.io", text: "Link to itch.io", type: "redirect" },
            { url: "/more-info", text: "More Info" }
        ]
    },
    { divider: true, divider_id: "tab2020", name: "pre. 2020 Works" },
    {
        name: "Ceptor",
        subtitle: "Game, Windows",
        year: "2020",
        image: "ceptor.png",
        links: [
            { url: "https://itch.io", text: "Link to itch.io", type: "redirect" },
            { url: "/more-info", text: "More Info" }
        ]
    },
    {
        name: "Acumen",
        subtitle: "Game, Windows",
        year: "2020",
        image: "acumen.png",
        links: [
            { url: "https://itch.io", text: "Link to itch.io", type: "redirect" },
            { url: "/more-info", text: "More Info" }
        ]
    },
    {
        name: "Bump in the Night",
        subtitle: "Game, Windows",
        year: "2020",
        // image: "",
        links: [
            { url: "https://itch.io", text: "Link to itch.io", type: "redirect" },
            { url: "/more-info", text: "More Info" }
        ]
    },
    {
        name: "Rogue Road",
        subtitle: "Game, Windows",
        year: "2020",
        // image: "",
        links: [
            { url: "https://itch.io", text: "Link to itch.io", type: "redirect" },
            { url: "/more-info", text: "More Info" }
        ]
    },
    {
        name: "Paper Fort",
        subtitle: "Game, Windows",
        year: "2020",
        // image: "",
        links: [
            { url: "https://itch.io", text: "Link to itch.io", type: "redirect" },
            { url: "/more-info", text: "More Info" }
        ]
    },
    {
        name: "Terrene",
        subtitle: "Game, Windows",
        year: "2020",
        // image: "",
        links: [
            { url: "https://itch.io", text: "Link to itch.io", type: "redirect" },
            { url: "/more-info", text: "More Info" }
        ]
    },
    {
        name: "RED SPACE",
        subtitle: "Game, Windows",
        year: "2020",
        // image: "",
        links: [
            { url: "https://itch.io", text: "Link to itch.io", type: "redirect" },
            { url: "/more-info", text: "More Info" }
        ]
    },
    {
        name: "Gun Gun",
        subtitle: "Game, Windows",
        year: "2020",
        // image: "",
        links: [
            { url: "https://itch.io", text: "Link to itch.io", type: "redirect" },
            { url: "/more-info", text: "More Info" }
        ]
    },
    {
        name: "DEVASTATION NATION",
        subtitle: "Game, Windows",
        year: "2020",
        // image: "",
        links: [
            { url: "https://itch.io", text: "Link to itch.io", type: "redirect" },
            { url: "/more-info", text: "More Info" }
        ]
    },
    {
        name: "100 Bullets",
        subtitle: "Game, Windows",
        year: "2020",
        // image: "",
        links: [
            { url: "https://itch.io", text: "Link to itch.io", type: "redirect" },
            { url: "/more-info", text: "More Info" }
        ]
    },
    {
        name: "Realms of Requiem",
        subtitle: "Game, Windows",
        year: "2020",
        image: "realmsofrequiem.png",
        links: [
            { url: "https://itch.io", text: "Link to itch.io", type: "redirect" },
            { url: "/more-info", text: "More Info" }
        ]
    },
    {
        name: "BLAMM",
        subtitle: "Game, Windows",
        year: "2020",
        // image: "",
        links: [
            { url: "https://itch.io", text: "Link to itch.io", type: "redirect" },
            { url: "/more-info", text: "More Info" }
        ]
    },
    {
        name: "Blazin' Aces",
        subtitle: "Game, Windows",
        year: "2020",
        // image: "",
        links: [
            { url: "https://itch.io", text: "Link to itch.io", type: "redirect" },
            { url: "/more-info", text: "More Info" }
        ]
    }
];

// Load Projects into page
loadProjects(projects);