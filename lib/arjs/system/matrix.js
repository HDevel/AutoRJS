arjs.extend({
    name:'system.matrix',
    defines: function(matrix_1, matrix_2)
    {
        var matrix_3 =
            [
                [1,0,0],
                [0,1,0]
            ];

        matrix_3[0][0] = matrix_1[0][0] * matrix_2[0][0] + matrix_1[0][1] * matrix_2[1][0];
        matrix_3[0][1] = matrix_1[0][0] * matrix_2[0][1] + matrix_1[0][1] * matrix_2[1][1];
        matrix_3[0][2] = matrix_1[0][0] * matrix_2[0][2] + matrix_1[0][1] * matrix_2[1][2] + matrix_1[0][2];
        matrix_3[1][0] = matrix_1[1][0] * matrix_2[0][0] + matrix_1[1][1] * matrix_2[1][0];
        matrix_3[1][1] = matrix_1[1][0] * matrix_2[0][1] + matrix_1[1][1] * matrix_2[1][1];
        matrix_3[1][2] = matrix_1[1][0] * matrix_2[0][2] + matrix_1[1][1] * matrix_2[1][2] + matrix_1[1][2];

        return matrix_3
    }
});