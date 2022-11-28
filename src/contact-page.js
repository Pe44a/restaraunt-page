const contactRender = (() => {

    const content = document.querySelector('#content');
    const contentPage = document.createElement('contact-container')


    contentPage.innerHTML = `
        <div class="contact-container pattern disable">
            <div class="contact">
                <p>Call us: 2222 2222 2222</p>
                <p>Text us: burger@gmail.com</p>
                <p>Address: some street</p>
            </div>
        </div>
        `;
    content.appendChild(contentPage);
})();

export {contactRender};