export function renderForm(){
const formTempelate = `
<div class="container">
    <div class="form-container">
        <div class="form-left-div">
            <div id="form-container">
                <span>
                    <h2>Contact Me !</h2>
                </span>
            </div>
        </div>

        <form action="https://api.web3forms.com/submit" method="POST">
            <div class="form-right-div">

                     <input type="hidden" name="access_key" value="6a83d070-c2d5-4e89-bef9-1ddf7debc75a">
                    <input class="form-input" type="text" placeholder="Name">
                    <input class="form-input" type="email" placeholder="E-mail">
                    <textarea class="form-input" name="message" placeholder="Message"></textarea>
                    <input type="checkbox" name="botcheck" class="hidden" style="display: none;">
                    <input  class="form-input" type="submit" placeholder="Submit">
                
            </div>
         </form>   
    </div>
</div>`
document.body.innerHTML += formTempelate 
} 

