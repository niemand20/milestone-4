const names = ['abul', 'kabul','sabul', 'babul', 'mabul' , 'abul', 'kabul', 'nabul','abul', 'kabul',];
function removeDuplicates(names){
    const unique = [];
    for (let i =0; i< names.length; i++){
        
        const name = names[i];
        if (unique.includes(name)===false){
            unique.push(name);
        }
    }
    return unique;
}

const uniqueNames = removeDuplicates(names);
console.log(uniqueNames);