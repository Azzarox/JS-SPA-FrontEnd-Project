import { html, nothing } from '../../node_modules/lit-html/lit-html.js';
import { searchFormTemplate } from '../views/search.js';
const userLinks = html``;
const guestLinks = html``;

export const navigationTemplate = (ctx) => html`
    <nav class="navbar" role="navigation" aria-label="main navigation">
        <div class="navbar-brand" style="margin: 0 10px;">
            <figure class="image is-64x64">
                <a href="/">
                    <img src="/images/logobigg.png" />
                </a>
            </figure>

            <a
                @click=${burgerMenu}
                role="button"
                class="navbar-burger"
                aria-label="menu"
                aria-expanded="false"
                data-target="navbarBasicExample"
            >
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
            </a>
        </div>

        <div
            id="navbarBasicExample"
            data-target="navbar-burger"
            class="navbar-menu"
        >
            <div class="navbar">
                <a class="navbar-item" href="/catalog"> All </a>
                <a class="navbar-item navbar-phone" href="/search"> Search </a>

                ${ctx.hasUser
                    ? html`
                          <a class="navbar-item" href="/create"> Create </a>
                          <a
                              class="navbar-item navbar-phone"
                              href="/profile"
                          >
                              Profile
                          </a>
                          <a class="navbar-item navbar-phone" href="/sign-out"> Sign Out </a>
                      `
                    : html`
                          <a
                              class="navbar-item navbar-phone"
                              href="/sign-in"
                          >
                              Sign In
                          </a>
                          <a
                              class="navbar-item navbar-phone"
                              href="/sign-up"
                          >
                              Sign Up
                          </a>
                      `}
                <!-- <a class="navbar-item" href="/auth"> Auth </a> -->
            </div>
            <div id="right-side-navbar" class="navbar is-grouped">
                <div class="navbar">
                    <div class="navbar-item search-div">
                        <div class="field">
                            <div class="control">
                                ${searchFormTemplate(ctx)}
                            </div>
                        </div>
                    </div>
                </div>
                <div class="navbar">
                    <div class="navbar-item">
                        <div class="buttons">
                            ${ctx.hasUser
                                ? html`
                                      <a href="/profile">
                                          <figure class="navbar-profile">
                                              <img
                                                  src="${ctx.user.profile
                                                      .photoUrl}"
                                                  class="user-image border"
                                              />
                                          </figure>
                                      </a>
                                      <a
                                          class="button is-light is-outlined-custom"
                                          href="/sign-out"
                                      >
                                          Sign out
                                      </a>
                                  `
                                : html` <a
                                          class="button is-primary"
                                          href="/sign-up"
                                      >
                                          <strong>Sign up</strong>
                                      </a>
                                      <a
                                          class="button is-light is-outlined-custom"
                                          href="/sign-in"
                                      >
                                          Sign in
                                      </a>`}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>
`;

// const formSearch = document.querySelector('.search-form');
// const searchIconLink = document.querySelector('.search-icon-link');
// let searchInputField = document.querySelector('.search-input-field');

// searchIconLink.addEventListener(
//     'click',
//     () => {
//         // searchInputField.removeAttribute('disabled');
//         // searchInputField.style.opacity = '.5';
//         searchInputField.style.display = 'block';
//     },
//     { once: true }
// );

// formSearch.addEventListener('submit', (ev) => {
//     ev.preventDefault();
//     const formData = Object.fromEntries(new FormData(ev.currentTarget));
//     formSearch.reset();
//     console.log(formData);
// });

function burgerMenu(ev) {
    let navbarMenu = document.getElementById('navbarBasicExample');
    if (navbarMenu.style.display !== 'block') {
        navbarMenu.style.display = 'block';
        ev.currentTarget.classList.add('is-active');
    } else {
        navbarMenu.style.display = 'none';
        ev.currentTarget.classList.remove('is-active');
    }
}
