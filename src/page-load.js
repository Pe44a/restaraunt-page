const pageLoad = (() => {

    const content = document.querySelector('#content');
    const header = document.createElement('header-container')


    header.innerHTML = `
    <div class="header-container">
    <div class="header">Burger Master</div>
    <a class="home tabs" href="">Home</a>
    <a class="menu tabs" href="">Menu</a>
    <a class="contacts tabs" href="">Contact us</a>
</div>
        `;
    content.appendChild(header);
})();

export {pageLoad};