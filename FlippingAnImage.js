/* 
Given an n x n binary matrix image, flip the image horizontally, then invert it, and return the resulting image.

Algorthm:
1) Iterate over the array
2) reverse each item in the array
3) iterate over the new array
4) invert each input
5) return output
*/ 

function flipAndInvertImage(image) {
    let reversedImage = [];
    for (let i = 0; i < image.length; i++) {
        reversedImage.push(image[i].reverse());
    }
    
    let flippedImage = [];
    for (let i = 0; i < reversedImage.length; i++) {
        let line = [];
        for (let j = 0; j < reversedImage[i].length; j++) {
            if (reversedImage[i][j] === 0) {
                line.push(1)
            } else {
                line.push(0)
            }
        }
        flippedImage.push(line);
    }
    console.log(flippedImage);
}

flipAndInvertImage([[1,1,0,0],[1,0,0,1],[0,1,1,1],[1,0,1,0]])