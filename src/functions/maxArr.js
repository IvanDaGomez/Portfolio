
export function maxArr(array){
    let fixed = -Infinity;
    for (let i=0; i < array.length;i++){
        fixed = (array[i]<=fixed) ? fixed : array[i];
    }
    return fixed
}