import {pageLoad} from '/home/peter/repos/restaurant-page/src/page-load';
import {homePageRender} from '/home/peter/repos/restaurant-page/src//home-page';
import {menuPageRender} from '/home/peter/repos/restaurant-page/src/menu-page';
import {contactRender} from '/home/peter/repos/restaurant-page/src/contact-page';

const tabs = document.querySelectorAll('.tabs');
const homePageHtml = document.querySelector('.content-container');
const menuPageHtml = document.querySelector('.restaurant-menu-container');;
const contactsPageHtml = document.querySelector('.contact-container');;

tabs.forEach(tab => {
    const home = document.querySelector('.home');
    const menu = document.querySelector('.menu');
    const contacts = document.querySelector('.contacts');
    tab.addEventListener('click',(e) => {
        e.preventDefault();


        home.addEventListener('click', () => {
            homePageHtml.classList.remove('disable');
            menuPageHtml.classList.add('disable');
            contactsPageHtml.classList.add('disable');
        });


        menu.addEventListener('click', () => {
            menuPageHtml.classList.remove('disable');
            contactsPageHtml.classList.add('disable');
            homePageHtml.classList.add('disable');
        });


        contacts.addEventListener('click', () => {
            contactsPageHtml.classList.remove('disable');
            homePageHtml.classList.add('disable');
            menuPageHtml.classList.add('disable');
        });
    });
});