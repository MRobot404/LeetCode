function removeElement(nums: number[], val: number): number {
    let k = 0; 
    nums.forEach(num => {
        if (num !== val) {
            nums[k] = num; 
            k++; 
        }
    });

    return k; 
}

