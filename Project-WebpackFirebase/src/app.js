import page from 'page';
import { authMiddleware } from './middlewares/authMiddleware.js';
import { renderMiddleware } from './middlewares/renderMiddleware.js';
import { catalogView } from './views/catalogView.js';
import { detailsView } from './views/detailsView.js';
import { homeView } from './views/homeView.js';
import { profileView } from './views/profileView.js';
import { createView } from './views/createView.js';
import { signUpView } from './views/signUpView.js';
import { signInView } from './views/signInView.js';
import { signOutView } from './views/signOutView.js';
import { testView } from './views/testView.js';
import { testEditView } from './views/testEditView.js';

// NOTE: For webpack; Not an actual import working in vanilla js
import '../styles.css';
import { detailsPreloader } from './middlewares/detailsPreloader.js';
import { editView } from './views/editView.js';
// import { testAuthView } from './views/testAuthView.js';

page(authMiddleware);
page(renderMiddleware);
page('/', homeView);
page('/catalog', catalogView);
page('/details', detailsView);
page('/create', createView);
page('/profile', profileView);
page('/sign-in', signInView);
page('/sign-up', signUpView);
page('/sign-out', signOutView);
page('/details/:id', detailsPreloader, detailsView)
page('/details/edit/:id', detailsPreloader, editView)
// page('/auth', testAuthView);
// page('/test', testView);
// page('/test/:id', testEditView);
page.start();