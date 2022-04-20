export function formDataValidator(fields) {
    return Object.values(fields).some(x => x == '')
}