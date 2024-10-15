function JoinTwoAarray(arr1,arr2){
// Given two arrays arr1 and arr2, return a new array joinedArray. All the objects in each of the two inputs arrays will contain an id field that has an integer value. 
// joinedArray is an array formed by merging arr1 and arr2 based on their id key. The length of joinedArray should be the length of unique values of id. The returned array should be sorted in ascending order based on the id key.

// If a given id exists in one array but not the other, the single object with that id should be included in the result array without modification.

// If two objects share an id, their properties should be merged into a single object:

// If a key only exists in one object, that single key-value pair should be included in the object.
// If a key is included in both objects, the value in the object from arr2 should override the value from arr1.

let result =[]

for(let i=0; i<arr1.length; i++){
    let found = false;

    for(let j=0; j<arr2.length; j++){
        if(arr1[i].id === arr2[j].id){
            result.push( { ...arr1[i], ...arr2[j]} )
            found = true;
            break;
        }
    }

    if(!found){
        result.push(arr1[i]);
    }
}

result.sort((a,b) => a.id - b.id)


for(let j=0; j<arr2.length; j++){
    let exist = false;
      
    for(let i=0; i<result.length; i++){
        if(result[i].id === arr2[j].id){
            exist = true;
            break;
        }
    }

    if(!exist){
        result.push(arr2[j])
    }
}

return result

}



let arr1 = [
    {id:1,name:'john'},
    {id:2,name:'wick'}
]

let arr2 = [
    {id:3,name:'sidd',age:23},
    {id:2,age:20}
]

console.log(JoinTwoAarray(arr1,arr2));