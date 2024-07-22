
export function gridToArray({ innerChild, numCols}){
    let array = [];
    for (let i = 0; i < Math.ceil(innerChild.length / numCols); i++) {
        let addArray = [];
        for (let j = 0; j < numCols; j++) {
          const childIndex = j + (i * numCols);
          if (childIndex < innerChild.length) {
            addArray.push(innerChild[childIndex]);
          }
        }
        array.push(addArray);
    }
    return array;
}