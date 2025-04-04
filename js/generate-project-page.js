
function generateProjectPageLayout(title, subtitle, listOfLinks, content) {
    const holder = document.getElementById("content-holder");
    const container = document.createElement("div");
    container.classList = "col";

    const links = (listOfLinks ?? [])
    .map(link => `<li class="link ${link.type ?? ""}"><a href="${link.url}">${link.text}</a></li>`)
    .join(""); // Convert array to a string

    container.innerHTML = `
    <span class="page-title">${title}</span>
    <span class="page-subtitle">${subtitle}</span>

    <ul>
        ${links}
    </ul>

    ${content}`;

    holder.appendChild(container);
}