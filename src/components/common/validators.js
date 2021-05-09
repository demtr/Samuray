export const required = value => {
    if (value) return undefined;
    return "This field is required";
}

export const maxLengthCreator = length => value => {
    if (value && value.length<=length) return undefined;
    return `Max length is ${length} chars`;
}

