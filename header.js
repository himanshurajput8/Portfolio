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
        <a href="#project">
            <li>Project</li>
        </a>
        <a href="#skills">
            <li>Skills</li>
        </a>
        <a>
            <li>Experience</li>
        </a>
    </ul>
</div>
<a href="#form-container"><div class="header-btn"><button>Contact Me</button></div></a>

</header></div> `
document.body.innerHTML += headerTemplate
}










