export const resolveNestedPath =(path:any , obj:any,separator=".")=>{
    const prop=Array.isArray(path)? path :path.split(separator);
    return prop.reduce((prev ,curr)=> {
        if(curr instanceof Function) return prev && prev.find(curr);
        return prev && prev[curr];
    },obj)
}