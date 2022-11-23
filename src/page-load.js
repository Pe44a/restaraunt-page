const pageLoad = (() => {
    const content = document.querySelector('#content');


    content.innerHTML = `
    <div class="header-container">
    <div class="header">Burger Master</div>
    <div class="home tab"><a href="">Home</a></div>
    <div class="menu tab"><a href="">Menu</a></div>
    <div class="contacts tab"><a href="">Contact us</a></div>
</div>
        `;
    document.body.appendChild(content);
})();

export {pageLoad};