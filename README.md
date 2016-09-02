# dotProductify

Returns the dot product of N * N matrices

## Usage

Two vectors:

    const vectorA = [1, 3, 7, 11, 19];
    const vectorB = [4, 2, 1, 14, 10];
    
    new DotProduct(vectorA, vectorB);


Matrices:

    const matrix = [
            [1, 2, 3, 4, 5],
            [2, 3, 5, 1, 4],
            [3, 1, 4, 2, 5],
            [2, 1, 3, 4, 5],
            [1, 5, 2, 3, 4]
        ];

    new DotProduct(matrix);
    
3D Arrays:

    const 3D = [
            [[1, 2, 3],
             [3, 2, 1],
             [2, 1, 3]],
             ...todo