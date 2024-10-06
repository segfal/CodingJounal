const kFrequent = (nums, k) => {
    const frequencyMap = new Map();
    for (const num of nums) {
        frequencyMap.set(num, (frequencyMap.get(num) || 0) + 1);
    }

    // console.log("ENTRIES",frequencyMap.entries());
    let x = [...frequencyMap.entries()]
    // console.log("x",x)
    // console.log("----------------------------")

    // console.log("UNSORTED X",x)
    x.sort((a,b)=>{
        // console.log("a=",a[1]," b=",b[1])
        // console.log("----------------------------------")
        // console.log("a[1]-b[1]=",a[1]-b[1])
        return a[1] - b[1] // Sort by frequency in descending order
    }).slice(0,k).map(entry=>{
        console.log("entry[0]",entry[0])
        console.log("----------------------------------")
        console.log("entry",entry)
        return entry[0] // Return only the element, not the frequency
    })

    // console.log("SORTED X",x)
    return [...frequencyMap.entries()]
        .sort((a, b) => b[1] - a[1])   // Sort by frequency in descending order
        .slice(0, k)                   // Take only the first k elements
        .map(entry => entry[0]);        // Return only the element, not the frequency
};

let x  = kFrequent([1, 1, 1, 2, 2, 3,7,10,2,3,32], 2)
// console.log("x",x)


// let names = ["Hefeefa","Herfeefa","Haifeefa"]
// console.log(names.slice(0,2))

// let name_slice = names.slice(0,2)
// console.log("name_slice",name_slice)

// let name_slice_2 = names.slice(1,2)
// console.log("name_slice_2",name_slice_2)

// let name_slice_3 = names.slice(1,3)
// console.log("name_slice_3",name_slice_3)


// //map example
// let map = new Map()
// map.set("Hefeefa",1)
// map.set("Herfeefa",2)
// map.set("Haifeefa",3)

// console.log("map",map)

