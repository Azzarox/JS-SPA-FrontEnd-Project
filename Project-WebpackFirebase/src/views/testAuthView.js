// import { getAuth } from 'firebase/auth';
// import { setDoc } from 'firebase/firestore';
// import { html } from 'lit-html';
// import {
//     checkAuthState,
//     createUser,
//     docFunc,
//     getCurrentUser,
//     logInUser,
//     logOutUser,
//     postData,
//     setSingleDoc,
// } from '../server';

// const testAuthTemplate = () => html`
//     <!-- <section class="section container">
//          <button
//             @click=${() => {
//                 logOutUser();
//             }}
//             class="button"
//         >
//             Sign Out
//         </button>
//     </section> -->
//     <!-- <section class="section container">
//         <h2 class="title">Sign up</h2>

//         <form @submit=${onSignUp}>
//             <div class="field">
//                 <label class="label">Username</label>
//                 <div class="control">
//                     <input class="input" name="username" type="text" />
//                 </div>
//             </div>

//             <div class="field">
//                 <label class="label">Email</label>
//                 <div class="control">
//                     <input class="input" name="email" type="email" />
//                 </div>
//             </div>

//             <div class="field">
//                 <label class="label">Photo</label>
//                 <div class="control">
//                     <input class="input" name="photo" type="text" />
//                 </div>
//             </div>

//             <div class="field">
//                 <label class="label">Password:</label>
//                 <div class="control">
//                     <input class="input" name="password" type="password" />
//                 </div>
//             </div>
//             <div class="field">
//                 <label class="label">Confirm Password:</label>
//                 <div class="control">
//                     <input class="input" name="repass" type="password" />
//                 </div>
//             </div>

//             <div
//                 class="control is-flex is-flex-direction-column is-justify-content-center"
//             >
//                 <button class="button is-primary">Sign Up</button>
//                 <p class="pt-2">
//                     You already have an account? <a href="/sign-in">Sign In</a>
//                 </p>
//             </div>
//         </form>
//     </section> -->

//     <!-- <section class="section container">
//         <h2 class="title">Sign in</h2>

//         <form @submit=${onSignIn}>
//             <div class="field">
//                 <label class="label">Email</label>
//                 <div class="control">
//                     <input class="input" name="email" type="email" />
//                 </div>
//             </div>
//             <div class="field">
//                 <label class="label">Password:</label>
//                 <div class="control">
//                     <input class="input" name="password" type="password" />
//                 </div>
//             </div>

//             <div
//                 class="control is-flex is-flex-direction-column is-justify-content-center"
//             >
//                 <button class="button is-primary">Log in</button>
//                 <div>
//                     <p class="pt-2">
//                         You don't have an account yet?
//                         <a href="/sign-up">Sign Up</a>
//                     </p>
//                 </div>
//             </div>
//         </form>
//     </section> -->
// `;

// async function onSignUp(ev) {
//     ev.preventDefault();
//     const formData = Object.fromEntries(new FormData(ev.currentTarget));
//     // ev.target.reset();
//     const user = await createUser(formData.email, formData.password);
//     user.displayName = formData.username;
//     user.photoURL = formData.photo;

//     // NOTE: Creates 'users' collection in the database with more general fields like profile image and such

//     const docInfo = await setSingleDoc('users', user.uid, {
//         username: user.displayName,
//         photoUrl: user.photoURL,
//         email: user.email,
//     });

//     // setUserPropsToLocalStorage(user)
//     //NOTE: To check with localStorage.
// }

// async function onSignIn(ev) {
//     ev.preventDefault();
//     const formData = Object.fromEntries(new FormData(ev.currentTarget));
//     // ev.target.reset();
//     const user = await logInUser(formData.email, formData.password);
//     //NOTE: To check with localStorage.

//     // console.log(user);
// }

// export const testAuthView = async (ctx) => {
//     ctx.render(testAuthTemplate());
// };

function setUserPropsToLocalStorage(user) {
    const userProps = {
        id: user.uid,
        email: user.email,
        username: user.displayName,
        accessToken: user.accessToken,
    };
    localStorage.setItem('user', JSON.stringify(userProps));
}
