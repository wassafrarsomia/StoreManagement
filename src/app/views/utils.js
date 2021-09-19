export const resolveNestedPath = (path, obj, separator = ".") => {
    const properties = Array.isArray(path) ? path : path.split(separator);
    return properties.reduce((prev, curr) => {
        if (curr instanceof Function) return prev && prev.find(curr);
        return prev && prev[curr];
    }, obj);
};