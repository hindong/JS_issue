console.log("첫번째 실행---------------");
func();

var func = function(){
  console.log("익명 함수 실행");
}

function func () {
  console.log("선언식 함수 실행");
}

console.log("두번째 실행---------------");
func();
