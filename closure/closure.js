var arr = []

// var는 함수 스코프 이기 떄문에 var i 는 전역 변수로 선언됨
for(var i = 0; i < 5; i++){
    arr[i] = function(){
        return i;
    }
}

for(var index in arr){
    console.log(arr[index]());
}
