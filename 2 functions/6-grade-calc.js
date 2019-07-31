// students score, total possible score
// 15/20 -> you got a C (75%)!
// 90 - 100 = A, 80 - 89 = B, 70 - 79 = C, 60 - 69 = D, 0-59 - F


const studentScore = function (score, posMaxScore) {
    const scorePercentage = (score / posMaxScore) * 100
    let letterGrade = ''

    if (scorePercentage >= 90) {
        letterGrade = 'A'       
    } else if (scorePercentage >= 80) {
        letterGrade = 'B'     
    } else if (scorePercentage >= 70) {
        letterGrade = 'C'   
    } else if (scorePercentage >= 60) {
        letterGrade = 'D'    
    } else {
        letterGrade = 'F' 
    }

    return `${score}/${posMaxScore} -> you got an ${letterGrade} (${scorePercentage}%)`
}

const score = studentScore(68, 100)

console.log(score)