export const required = value => {
    if (value) return undefined;
    return "This field is required";
}
export const maxLength30 = (value, maxLength) => {
    if (value.length > 30) return "Max length is 30 symbols";
    return undefined;
}
export const maxLengthThunkAC30 = (maxLength) => (value) => {
    if (value.length > 30) return "Max length is 30 symbols";
    return undefined;
}