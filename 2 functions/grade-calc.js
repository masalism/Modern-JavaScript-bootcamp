let getStudentScore = function (score, possibleScore) {
    let grade = score / possibleScore * 100;
    let letterGrade = '';
    if (grade >= 90) {
        letterGrade = 'A';
    } else if (grade >= 80) {
        letterGrade = 'B';
    } else if (grade >= 70) {
        letterGrade = 'C';
    } else if (grade >= 60) {
        letterGrade = 'D';
    } else {
        letterGrade = 'F';
    }

    return `You got an ${letterGrade} (${grade}%)`;
}

let score1 = getStudentScore(80, 100);
let score2 = getStudentScore(48, 50);
let score3 = getStudentScore(9, 10);
let score4 = getStudentScore(7456, 10000);

console.log(score1);
console.log(score2);
console.log(score3);
console.log(score4);