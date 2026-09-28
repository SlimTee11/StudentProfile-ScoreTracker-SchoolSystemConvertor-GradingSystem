//declaration of variables
let totalScore = 0;
console.log("TOTALSCORE:", totalScore)

//adding the first test score 
let firstTestScore = 45;
totalScore += firstTestScore;
console.log("TOTALSCORE after adding first test score:", totalScore)

//adding the second test score
let secondTestScore = 30;
totalScore += secondTestScore;
console.log("TOTALSCORE after adding secong test score:", totalScore)

//deduct 5 marks 
totalScore -= 5;
console.log("TOTALSCORE after deducting 5marks score error:", totalScore)

//score doubled for bonus round
totalScore *= totalScore;
console.log("TOTALSCORE after being doubled:", totalScore) 

//increment
totalScore ++;
console.log("TOTALSCORE after increment:", totalScore)

//reminder when total score is divide by 7
totalScore %= 7;
console.log("TOTALSCORE reminder after being divide by 7:", totalScore)