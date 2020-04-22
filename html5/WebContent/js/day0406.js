let num;
num = 10;
alert(num); //경고창
console.log(num+10); //콘솔창

for(let i=0; i<5; i++) {
	console.log(i);
}

//console.log("현재 i의 값: "+i);

num = 50;
console.log(num);

//const num2 = 100;
//num2 = 1000;
//console.log(num2);

/*방법 1 -> 더 많이 씀*/
let fruits = ["사과", "바나나"];
for(let i=0; i<fruits.length; i++) {
	console.log(fruits[i]);
}
/*방법 2*/
fruits = new Array("사과", "바나나");
for(let i=0; i<fruits.length; i++) {
	console.log(fruits[i]);
}

/*인덱스 번호로 문자 사용 가능*/
fruits["a"] = "파인애플";
console.log(fruits["a"]);
/*문자 인덱스는 배열길이에 포함 안됨*/
console.log(fruits.length);
fruits[100] = 3.141592;
/*배열 하나에 다른 자료형끼리 넣어도 됨*/
/*배열 크기도 가변형이다*/
/*인덱스번호도 순서대로 안써도 되고 1썼다가 2썼다가 100썼다가...*/
console.log(fruits[100]);
/*근데 100번에 넣었더니 길이가 100이 되어버림 그사이는 다 null인가?*/
console.log(fruits.length);

let arr = new Array();
arr.push(10);
arr.push(20);
arr.push(30);

for(let i=0; i<arr.length; i++) {
	console.log(arr[i]);
}

/*이건 머 배열인데 스택처럼 쓸수있네*/
console.log("팝사용시작");
console.log(arr.pop()); //30제거
console.log(arr.pop()); //20제거

for(let i=0; i<arr.length; i++) {
	console.log(arr[i]); //남은 10
}

console.log("시프트사용시작");
arr.unshift(100); // 100 ,10
/*unshift(100)은 100을 스택 바닥에 밀어넣는거임*/
/*그래서 100, 10 순서*/
/*반대로 shift하면 스택 바닥부터 끄집어내는거라서 100을 꺼내게 됨*/
/*스택은 위에서 넣고 시프트는 바닥에서 넣고*/

for(let i=0; i<arr.length; i++) {
	console.log(arr[i]);
}
