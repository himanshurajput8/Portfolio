export function renderHeader() {
     const headerTemplate = `
<div class="container"><header>
<div>
    <div class="header-name">Himanshu Rajput</div>
</div>
<div class="center-div">
    <ul class="header-list">
        <a>
            <li>Home</li>
        </a>
        <a>
            <li>Project</li>
        </a>
        <a>
            <li>Skills</li>
        </a>
        <a>
            <li>Experience</li>
        </a>
    </ul>
</div>
<div class="header-btn"><button>Contact Me</button></div>
</header></div> `
document.body.innerHTML += headerTemplate
}










