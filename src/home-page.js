const homePageRender = (() => {

    const content = document.querySelector('#content');
    const homePage = document.createElement('content-container')


    homePage.innerHTML = `
        <div class="content-container">
            <div class="container copy">Delicious burgers with wide choice of variations just for you</div>
            <div class="container">
                <p>Work days:</p><br>
                <p class="schedule">Sunday: 8am - 8pm</p>
                <p class="schedule">Monday: 6am - 6pm</p>
                <p class="schedule">Tuesday: 6am - 6pm</p>
                <p class="schedule">Wednesday: 6am - 6pm</p>
                <p class="schedule">Thursday: 6am - 10pm</p>
                <p class="schedule">Friday: 6am - 10pm</p>
                <p class="schedule">Saturday: 8am - 10pm</p>
            </div>
        </div>
        `;
    content.appendChild(homePage);
})();

export {homePageRender};