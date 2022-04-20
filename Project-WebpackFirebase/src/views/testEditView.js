// import { html } from 'lit-html';
// import {
//     getSingleDoc,
//     getCollectionReference,
//     updateSingleDoc,
// } from '../server';

// const collectionName = 'photos';
// const collectionReference = getCollectionReference(collectionName);

// const testEditTemplate = (ctx, doc) => html` <section
//     class="section container create"
// >
//     <section class="section container create">
//         <h2 class="title">Edit</h2>
//         <form @submit=${(ev) => onEdit(ev, ctx)} id="testform">
//             <div class="field">
//                 <label class="label">Creator</label>
//                 <div class="control">
//                     <input
//                         class="input"
//                         type="text"
//                         name="creator"
//                         .value=${doc.creator}
//                     />
//                 </div>
//             </div>

//             <div class="field">
//                 <label class="label">Title</label>
//                 <div class="control">
//                     <input
//                         class="input"
//                         type="text"
//                         name="title"
//                         .value=${doc.title}
//                     />
//                 </div>
//             </div>

//             <div class="field">
//                 <label class="label">Image</label>
//                 <div class="control">
//                     <input
//                         class="input"
//                         type="text"
//                         name="image"
//                         .value=${doc.image}
//                     />
//                 </div>
//             </div>
//             <div class="field">
//                 <label class="label">Price</label>
//                 <div class="control">
//                     <input
//                         class="input"
//                         type="number"
//                         name="price"
//                         .value=${doc.price}
//                     />
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
//                         .value=${doc.description}
//                     ></textarea>
//                 </div>
//             </div>

//             <div class="control">
//                 <button class="button is-primary width-100">Submit</button>
//             </div>
//         </form>
//     </section>
// </section>`;

// function onEdit(ev, ctx) {
//     ev.preventDefault();
//     const formData = Object.fromEntries(new FormData(ev.currentTarget));
//     updateSingleDoc(collectionName, ctx.params.id, formData);
//     ctx.page.redirect(`/test`);
// }

// export const testEditView = async (ctx) => {
//     const doc = await getSingleDoc(collectionName, `${ctx.params.id}`);
//     ctx.render(testEditTemplate(ctx, doc));
// };
