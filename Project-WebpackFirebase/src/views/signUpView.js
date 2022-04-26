import { html } from 'lit-html';
import { createUser, setSingleDoc } from '../server';
import { formDisplayError } from '../utils/formErrorDisplay';
import { formFieldIsEmptyValidator } from '../utils/formFieldsValidator';

const signUpTemplate = (ctx) => html`
    <section class="section container">
        <h2 class="title">Sign up</h2>

        <form @submit=${(ev) => onSignUp(ev, ctx)}>
            <div class="field error-class">
                <p class="error-message"></p>
            </div>

            <div class="field">
                <label class="label">Username</label>
                <div class="control">
                    <input class="input" name="username" type="text" />
                </div>
            </div>

            <div class="field">
                <label class="label">Email</label>
                <div class="control">
                    <input class="input" name="email" type="email" />
                </div>
            </div>

            <div class="field">
                <label class="label">Photo URL</label>
                <div class="control">
                    <input class="input" name="photo" type="text" />
                </div>
            </div>

            <div class="field">
                <label class="label">Password:</label>
                <div class="control">
                    <input class="input" name="password" type="password" />
                </div>
            </div>
            <div class="field">
                <label class="label">Confirm Password:</label>
                <div class="control">
                    <input class="input" name="repass" type="password" />
                </div>
            </div>

            <div
                class="control is-flex is-flex-direction-column is-justify-content-center"
            >
                <button class="button is-primary">Sign Up</button>
                <p class="pt-2">
                    You already have an account? <a href="/sign-in">Sign In</a>
                </p>
            </div>
        </form>
    </section>
`;
export const signUpView = async (ctx) => {
    ctx.render(signUpTemplate(ctx));
};

async function onSignUp(ev, ctx) {
    ev.preventDefault();
    const target = ev.currentTarget;
    const formData = Object.fromEntries(new FormData(ev.currentTarget));
    // ev.target.reset();
    try {
        if (formFieldIsEmptyValidator(formData)) {
            throw new Error('Empty Fields');
        }
        const user = await createUser(formData.email, formData.password);
        user.displayName = formData.username;
        user.photoURL = formData.photo;

        // NOTE: Creates 'users' collection in the database with more general fields like profile image and such

        const docInfo = await setSingleDoc('users', user.uid, {
            username: user.displayName,
            photoUrl: user.photoURL,
            email: user.email,
        });
        ctx.page.redirect('/');
    } catch (err) {
        formDisplayError(target, err);
    }

    // setUserPropsToLocalStorage(user)
    //NOTE: To check with localStorage.
}
