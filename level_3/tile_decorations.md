# 타일 장식물

## 문제 풀이

~~~javascript
function solution (N) {
    let answer = 4;
    let back = 1, back2 = 0;
    
    for (let i = 2; i <= N; i++) {
        let current = back + back2;
        answer += (current * 2);
        back2 = back;
        back = current;
    }
    
    return answer;
}
~~~

<br/>

## 문제 설명    

대구 달성공원에 놀러 온 지수는 최근에 새로 만든 타일 장식물을 보게 되었다. 타일 장식물은 정사각형 타일을 붙여 만든 형태였는데, 한 변이 1인 정사각형 타일부터 시작하여 마치 앵무조개의 나선 모양처럼 점점 큰 타일을 붙인 형태였다. 타일 장식물의 일부를 그리면 다음과 같다.

![thanks_giving_day_traffic](../resources/tile_decorations.png)

그림에서 타일에 적힌 수는 각 타일의 한 변의 길이를 나타낸다. 타일 장식물을 구성하는 정사각형 타일 한 변의 길이를 안쪽 타일부터 시작하여 차례로 적으면 다음과 같다.

[1, 1, 2, 3, 5, 8, .]

지수는 문득 이러한 타일들로 구성되는 큰 직사각형의 둘레가 궁금해졌다. 예를 들어, 처음 다섯 개의 타일이 구성하는 직사각형(위에서 빨간색으로 표시한 직사각형)의 둘레는 26이다.

<br/>

타일의 개수 N이 주어질 때, N개의 타일로 구성된 직사각형의 둘레를 return 하도록 solution 함수를 작성하시오.

<br/>

### 제한 사항

- N은 1 이상 80 이하인 자연수이다.

<br/>

### 입출력 예

|N|return|
|---|---|
|5|26|
|6|42|

<br/>

**출처: 프로그래머스 코딩 테스트 연습, https://programmers.co.kr/learn/challenges.**