// const regexPhoto = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim;

// NOTE: Less strict regex? 
const regexPhoto = /(https?:\/\/.*\.(?:png|jpg))/i 

export function imageURLIsNotCorrectValidator(imageField) {
    return !regexPhoto.test(imageField);
}
