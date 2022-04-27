import { html } from 'lit-html';

export const successfullyCreatedModal = () => html`
    <div id="modal-create" class="modal">
        <div class="modal-background"></div>
        <div class="modal-content">
            <div class="modal-content-icon">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    class="icon icon-tabler circle-check"
                    viewBox="0 0 24 24"
                    stroke-width="2"
                    stroke="currentColor"
                    fill="none"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                >
                    <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
                    <circle cx="12" cy="12" r="9"></circle>
                    <path d="M9 12l2 2l4 -4"></path>
                </svg>
            </div>
            <div class="modal-content-text">
                <h2>Successfully Created</h2>
                <p>You are being redirected...</p>
            </div>
        </div>
    </div>
`;
