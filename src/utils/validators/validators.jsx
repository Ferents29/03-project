export const required = value => {
    if (value) return undefined;
    return "This field is required";
}
export const maxLength30 = (value, maxLength) => {
    if (value.length > 30) return "Max length is 30 symbols";
    return undefined;
}
export const maxLengthThunkAC = (maxLength) => (value) => {
    if (value.length > maxLength) return `Max length is  ${maxLength} symbols`;
    return undefined;
}
export const minLengthThunkAC = (minLength) => (value) => {
    if (value.length < minLength) return `Max length is  ${minLength} symbols`;
    return undefined;
}