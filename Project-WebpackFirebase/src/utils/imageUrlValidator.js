const regexPhoto = /^https?:\/\/.*\/.*\.(png|gif|webp|jpeg|jpg)\??.*$/gim;

export function imageURLIsNotCorrectValidator(imageField) {
    return !regexPhoto.test(imageField);
}
