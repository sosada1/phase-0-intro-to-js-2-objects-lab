const employee = {
        name: "random",
        streetAddress: "1 Random Lane",
    };
    
    function updateEmployeeWithKeyAndValue(obj, key, value) {
        const newObj = {...obj};
        newObj[key] = value;
        return newObj;
    }