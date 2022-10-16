/**
 * @param {number[]} height
 * @return {number}
 */
const trap = (height) => {
    let water = 0;
    height.forEach((number, index) => {
        if (number === 0) {
            if (height[index - 1] === undefined || height[index - 1] === 0) {
                return;
            } else if (height[index + 1] === undefined || height[index + 1] === 0) {
                return;
            } else {
                
            }
        }
    })
};