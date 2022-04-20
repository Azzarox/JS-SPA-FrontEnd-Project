import { html } from 'lit-html';
import {
    getData,
    postData,
    deleteData,
    colRef,
    getCollectionReference,
    getByQuery,
    getByOrderedQuery,
    getSingleDoc,
    logInUser,
} from '../server.js';

// const testTemplate = (ctx, data) => html`
//     <!-- <section class="section container create">
//         <h2 class="title">Create</h2>
//         <form @submit=${(ev) => onSubmit(ev, ctx)} id="testform">
//             <div class="field">
//                 <label class="label">Creator</label>
//                 <div class="control">
//                     <input class="input" type="text" name="creator" />
//                 </div>
//             </div>

//             <div class="field">
//                 <label class="label">Title</label>
//                 <div class="control">
//                     <input class="input" type="text" name="title" />
//                 </div>
//             </div>

//             <div class="field">
//                 <label class="label">Image</label>
//                 <div class="control">
//                     <input class="input" type="text" name="image" />
//                 </div>
//             </div>
//             <div class="field">
//                 <label class="label">Price</label>
//                 <div class="control">
//                     <input class="input" type="number" name="price" />
//                 </div>
//             </div>
//             <div class="field">
//                 <label class="label">Description</label>
//                 <div class="control">
//                     <textarea
//                         class="width-100"
//                         name="description"
//                         id=""
//                         cols="30"
//                         rows="10"
//                     ></textarea>
//                 </div>
//             </div>

//             <div class="control">
//                 <button class="button is-primary width-100">Submit</button>
//             </div>
//         </form>
//     </section> -->

//     <section class="section is-flex is-flex-direction-column">
//         ${data.map(
//             (x) => html`
//                 <ul class="py-1 px-2 mb-3" style="border: 2px solid black">
//                     <li class="">${x.creator}</li>
//                     <li class="">${x.title}</li>
//                     <li class="">${x.description}</li>
//                     <li class="">${x.price}$</li>
//                     <li class="">${x.image}</li>
//                     <li class="">
//                         <button
//                             @click=${deleteHandler}
//                             data-id=${x.id}
//                             class="button"
//                         >
//                             DELETE
//                         </button>
//                         <a href="/test/${x.id}" class="button">Edit</a>
//                     </li>
//                 </ul>
//             `
//         )}
//     </section>
// `;

// const collectionName = 'photos';
// const collectionReference = getCollectionReference(collectionName);

function deleteHandler(ev) {
    const id = ev.target.dataset.id;
    deleteData(collectionName, id);
}

// function onSubmit(ev, ctx) {
//     ev.preventDefault();
//     let formData = Object.fromEntries(new FormData(ev.currentTarget));
//     const x = { userId: ctx.user.uid, ...formData };
// }

// export const testView = async (ctx) => {
//     let photos = await getData(collectionReference);
//     // let photos = await getByQuery(collectionReference, "price", ">", "10");
//     // let photos = await getByOrderedQuery(
//     //     collectionReference,
//     //     'price',
//     //     '>=',
//     //     '10'
//     // );
//     ctx.render(testTemplate(ctx, photos));
// };
