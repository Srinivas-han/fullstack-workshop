function deepClone(value) {
   
    if (value === null || typeof value !== "object") {
        return value;
    }

    if (value instanceof Date) {
        return new Date(value.getTime());
    }

  
    if (value instanceof Set) {
        const newSet = new Set();
        value.forEach(item => {
            newSet.add(deepClone(item));
        });
        return newSet;
    }

   
    if (value instanceof Map) {
        const newMap = new Map();
        value.forEach((val, key) => {
            newMap.set(deepClone(key), deepClone(val));
        });
        return newMap;
    }

    
    if (Array.isArray(value)) {
        return value.map(item => deepClone(item));
    }

   
    const clonedObj = {};
    for (let key in value) {
        if (value.hasOwnProperty(key)) {
            clonedObj[key] = deepClone(value[key]);
        }
    }

    return clonedObj;
}

/*TEST CASE*/

const original = {
    name: 'John',
    address: { city: 'New York', zip: '10001' },
    hobbies: ['reading', 'gaming'],
    metadata: {
        created: new Date(),
        tags: new Set(['user', 'admin'])
    }
};

const cloned = deepClone(original);


cloned.address.city = 'Boston';
cloned.hobbies.push('swimming');

console.log(original.address.city);
console.log(original.hobbies);     
