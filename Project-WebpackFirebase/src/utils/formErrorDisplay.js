// The form must have dic with .error-class and p element with .error-message
export const formDisplayError = (target, err) => {
    const p = target.querySelector('.error-class .error-message');
    if (err.code) {
        p.textContent = err.code;
    } else {
        p.textContent = err.message;
    }
    setTimeout(() => {
        p.textContent = '';
    }, 1000);
};
