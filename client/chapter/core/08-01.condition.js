/* ---------------------------------------------------------------------- */
/* Condition                                                              */
/* ---------------------------------------------------------------------- */

/* 

let number = prompt("숫자를 입력해주세요", 0);

if (number > 0) {
  console.log("1을 출력");
} else if (number < 0) {
  console.log("-1을 출력");
} else {
  console.log("0인데용");
}

*/

// QUIZ!!
// 그 영화 봤니?
//     ↓
// Yes | No
//     | 영화 볼거니?
//           ↓
//       Yes | No

/* 
// 영화 봤니?
let didWatchMovie = "yes";

// 영화 볼거니?
let goingToWatchMovie = "no";

if (didWatchMovie == "yes") {
  // if 문(statement)
  console.log("그거 재밌더라..?");
} else if (goingToWatchMovie === "yes") {
  // else if 복수 조건 처리
  console.log("너무 설렌다~~");
} else {
  // else 절(caluse)
  console.log("음...난 별루");
} 
*/

// 영화 봤니?
let didWatchMovie = "yes";
// 영화 볼거니?
let goingToWatchMovie = "no";

// if 문(statement)
if (didWatchMovie == "yes") {
  goingToWatchMovie == "yes" ? console.log("yes") : console.log("no");
} else {
  console.log("영화를 아직 안봤습니다.");
}
