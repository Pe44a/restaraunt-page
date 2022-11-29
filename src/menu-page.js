const menuPageRender = (() => {

    const content = document.querySelector('#content');
    const menuPage = document.createElement('menu-container')


    menuPage.innerHTML = `
        <div class="restaurant-menu-container disable">
                <div class="restaurant-menu">
                    <img class="restaurant-menu-img" src="/home/peter/repos/restaurant-page/dist/images/cheeseburger.jpeg" alt="cheeseburger">
                    <h1>Cheeseburger: 3$</h1>
                </div>
                <div class="restaurant-menu">
                    <img class="restaurant-menu-img" src="/home/peter/repos/restaurant-page/dist/images/double_cheeseburger.avif" alt="double cheeseburger">
                    <h1> Double Cheeseburger: 4$</h1>
                </div>
                <div class="restaurant-menu">
                    <img class="restaurant-menu-img" src="/home/peter/repos/restaurant-page/dist/images/bbq_burger.avif" alt="bbq burger">
                    <h1>BBQ Burger: 5$</h1>
                </div>
                <div class="restaurant-menu">
                    <img class="restaurant-menu-img" src="/home/peter/repos/restaurant-page/dist/images/egg_burger.png" alt="egg burger">
                    <h1>Egg Burger: 3$</h1>
                </div>
            </div>
        `;
    content.appendChild(menuPage);
})();

export {menuPageRender};