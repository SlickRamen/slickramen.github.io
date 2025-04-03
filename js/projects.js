/**
 * Set up the list of projects
 */
const projects = [
    {
        name:       "Bloodshot",
        subtitle:   "Game, Windows",
        year:       "2025",
        image:      "bloodshot.png",
        links: [
            { url: 'https://itch.io',   text: 'Presskit'        },
            { url: '/more-info',        text: 'Publisher Demo'  },
            { url: '/more-info',        text: 'More Info'       }
        ]
    },
    {
        name:       "Bloodshot2",
        subtitle:   "Game, Windows32453456",
        year:       "2025534",
        image:      "bloodshot.png",
        links: [
            { url: 'https://itch.io',   text: 'Presskit'        },
            { url: '/more-info',        text: 'Publisher Demo'  },
            { url: '/more-info',        text: 'More Info'       }
        ]
    },
    {
        name:       "Bloodshot3",
        subtitle:   "Game, Windows4234",
        year:       "2021235",
        image:      "bloodshot.png",
        links: [
            { url: 'https://itch.io',   text: 'Presskit'        },
            { url: '/more-info',        text: 'Publisher Demo'  },
            { url: '/more-info',        text: 'More Info'       }
        ]
    },

];

// Load Projects into page
loadProjects();

/**
 * Deal with loading the projects
 */
function loadProjects() {
    const projectHolder = document.getElementById("portfolio-container");

    projects.forEach( function(project) {
        const newProject = document.createElement("div");
        newProject.classList = "page";
        newProject.style.backgroundImage = `url(../img/${project.image})`;
        newProject.innerHTML = `;
            <span class="page-date">${project.year}</span>
            <div class="info">
                <h2 class="title">${project.name}</h2>
                <sub class="subtitle">${project.subtitle}</sub>
                <ul>
                    
                </ul>
            </div>
        `

        projectHolder.appendChild(newProject);

        // <!-- <% links.forEach(link => { %>
        //     <li class="link"><a href="<%= link.url %>"><%= link.text %></a></li>
        //     <% }); %> -->
    });
}