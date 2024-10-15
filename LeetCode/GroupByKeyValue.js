function groupBy(array,fn){
    return array.reduce((acc,iteams) => {
        const key = fn(iteams)

        if(!acc[key]){
            acc[key] = []
        }
         acc[key].push(iteams)
        return acc
    },{})
}

const nums = [2,1,4,5];
console.log(groupBy(nums,String))