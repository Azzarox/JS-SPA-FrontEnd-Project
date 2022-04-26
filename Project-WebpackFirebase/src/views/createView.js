import { html } from 'lit-html';
import { getCollectionReference, postData } from '../server';
import { formFieldIsEmptyValidator } from '../utils/formFieldsValidator';
import { imageURLIsNotCorrectValidator } from '../utils/imageUrlValidator';

const createTemplate = (ctx) => html`
    <section class="section container create">
        <h2 class="title">Create</h2>
        <form @submit=${(ev) => onSubmitCreate(ev, ctx)} id="testform">
            <div class="field">
                <label class="label">Creator</label>
                <div class="control">
                    <input class="input" type="text" name="creator" />
                </div>
            </div>

            <div class="field">
                <label class="label">Title</label>
                <div class="control">
                    <input class="input" type="text" name="title" />
                </div>
            </div>

            <div class="field">
                <label class="label">Image URL</label>
                <div class="control">
                    <input class="input" type="text" name="image" />
                </div>
            </div>
            <div class="field">
                <label class="label">Price</label>
                <div class="control">
                    <input class="input" type="number" name="price" />
                </div>
            </div>
            <div class="field">
                <label class="label">Description</label>
                <div class="control">
                    <textarea
                        class="width-100"
                        name="description"
                        id=""
                        cols="30"
                        rows="10"
                    ></textarea>
                </div>
            </div>

            <div class="control">
                <button class="button is-primary width-100">Submit</button>
            </div>
        </form>
    </section>
`;

export const createView = async (ctx) => {
    ctx.render(createTemplate(ctx));
};

const collectionName = 'photos';
const collectionReference = getCollectionReference(collectionName);

function onSubmitCreate(ev, ctx) {
    ev.preventDefault();
    let formData = Object.fromEntries(new FormData(ev.currentTarget));
    formData.price = Number(formData.price);
    if (formFieldIsEmptyValidator(formData)) {
        return alert('Empty fields!');
    }

    if (imageURLIsNotCorrectValidator(formData.image)){
        return alert('Image URL is not correct!')
    }

    const data = { userId: ctx.user.uid, ...formData };
    postData(collectionReference, data);
    ctx.page.redirect('/catalog');
}
