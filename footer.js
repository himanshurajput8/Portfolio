export function renderFooter(){
    const footerTempelate =`
    <div class="container">
        <footer>
            <div class="footer-email"><span>rajputhimanshu913@gmail.com</span></div>
            <div class="intro-icon">
                <span class="linkdin"><i class="fa-brands fa-linkedin"></i></span> 
                <span><i class="fa-brands fa-github"></i></span>
                <span><i class="fa-brands fa-twitter"></i></span>
            </div>
        </footer>
    </div>
     `
    document.body.innerHTML += footerTempelate  
}
