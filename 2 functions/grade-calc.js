const getStudentScore = function (score, possibleScore) {
    const grade = score / possibleScore * 100;
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

const score1 = getStudentScore(80, 100);
const score2 = getStudentScore(48, 50);
const score3 = getStudentScore(9, 10);
const score4 = getStudentScore(7456, 10000);

console.log(score1);
console.log(score2);
console.log(score3);
console.log(score4);