/**
 * Deal with loading the projects
 */
function loadProjects(projects) {
    const projectHolder = document.getElementById("portfolio-container");

    projects.forEach( function(project) {
        const newProject = document.createElement("div");
        newProject.classList = "page";

        if (project.divider) {
            // Divider
            newProject.classList.add("filter-pane");
            newProject.setAttribute("id", project.divider_id);
            newProject.innerHTML = `
                <div class="info always-on">
                    <h2 class="title">${project.name ?? ""}</h2>
                    <sub class="subtitle">${project.subtitle ?? ""}</sub>
                </div>
            `
        } else {
            // Regular Project
            newProject.style.backgroundImage = `url(../img/${project.image ?? "placeholder.png"})`;

            const links = (project.links ?? [])
                .map(link => `<li class="link ${link.type ?? ""}"><a href="${link.url}">${link.text}</a></li>`)
                .join(""); // Convert array to a string

            newProject.innerHTML = `
                <span class="page-date">${project.year ?? ""}</span>
                <div class="info">
                    <h2 class="title">${project.name ?? ""}</h2>
                    <sub class="subtitle">${project.subtitle ?? ""}</sub>
                    <ul>
                        ${links}
                    </ul>
                </div>
            `
        }

        projectHolder.appendChild(newProject);
    });
}
