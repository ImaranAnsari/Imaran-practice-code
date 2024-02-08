var rob = function (nums) {
    let rob1 = 0;
    let rob2 = 0;
    ;

    for (let i = 0; i < nums.length; i += 2) {
        rob1 += nums[i];
        rob2 += nums[i + 1];
    }
    if (rob1 > rob2) {
        return rob1
    } else {
        return rob2
    }

};

// rob([1, 2, 3, 1])
console.log('rob', rob([2, 7, 9, 3, 1]));