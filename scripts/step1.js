const startButton = document.getElementById('startButton');
        

        
// 반복문은 기계적으로 그 자리에서 반복적으로 사용될때 효용가치가있다.
// 함수는 여러가지 맥락에서 반복적으로 사용될때 이점을 갖고있다. 명심하기
    
let sampleNum = [1,2,3,4,5,6,7,8,9]; // randomNum에서 뽑아갈 숫자의 보기
let randomNum = []; // sampleNum에서 하나를 가져온다.

// 시작버튼
function pickNum(){ // 실행시 랜덤의 정수 3개를 생성하는 함수.
    for(i = 0; i < 3; i += 1){ // 랜덤으로 뽑을 숫자의 갯수를 조절할수 있는 반복문
        let deleteIndex = Math.floor(Math.random() * (9 - i)); 
        // 0~9중의 정수 하나를 랜덤으로 생성하고 그 수는 sampleNum의 인덱스가 될것이다. 이때 sampleNum에서 인덱스 하나를 뽑아서 randomNum에 넣기때문에 반복문이 실행될때 마다 sampleNum의 인덱스는 하나씩 줄어든다.
        randomNum.push(sampleNum[deleteIndex]); // sampleNum중 랜덤한 index값 하나를 추출해 randomNum에 넣는다.
        sampleNum.splice(deleteIndex, 1); // 중복된 숫자가 뽑히지 않기 위해서 한번 생성되어 빠져나간 sampleNum의 인덱스는 삭제하는 로직이다.
    }
    console.log('임의의수 : ' + randomNum);
}

let secondSampleNum = [1,2,3,4,5,6,7,8,9]; 
let secondRandomNum = []; 
// 이번 스텝에서는 컴퓨터가 둘이서 게임을 진행하는 식으로 구현
function pickNum2(){
    for(i = 0; i < 3; i += 1){ 
        let secondDeleteIndex2 = Math.floor(Math.random() * (9 - i)); 
        secondRandomNum.push(secondSampleNum[secondDeleteIndex2]); 
        secondSampleNum.splice(secondDeleteIndex2, 1);                 
    }
    document.write('임의의수2 : ' + secondRandomNum + "<br>"); // 확인용
}

// 임의의 수와 임의의 수를 비교했을때 strike ball 판정을 하는 비교문 생성



// 마지막에 모든것을 종합해서 출력하는 출력문을 버튼클릭시 실행하도록 만들기

//console.log(randomNum); // 함수 pickNum을 실행한 후, 중복되지 않는 정수 3개가 생성되는지 확인해본다.
var Strike = 0;
var Ball = 0;
function countAnswer(){ //Strike 와 Ball을 판정하는 함수
    var Strike = 0;
    var Ball = 0;
    for(i = 0; i < 3; i++){
        if(randomNum[i] === secondRandomNum[i]){ // 각 인덱스의 같은 값이 있는지 비교
            Strike++ ;          
        }else if(secondRandomNum.indexOf(randomNum[i]) < 0 != true){ // 임의의수 2개를 비교하는 중 각 인덱스에 숫자가 비교대상 배열에 있는지 확인 하는 로직
            Ball++;
        }

    }
    document.write('Strike : ' + Strike);
    document.write(' Ball : ' + Ball);

}

startButton.onclick = () => { // startButton을 클릭시 startRoutine 함수 실행
    startRoutine();
}


pickNum();
function startRoutine(){
    counter = 9; // 남은 기회
    while (counter >= -0){
        if(randomNum === secondRandomNum){ // 정답을 맞췄을 시 게임을 종료
        break;
        document.write('승리하였습니다!!!')
        }
        pickNum2(); // 임의의 수를 생성하여
        countAnswer(); // Strike, Ball 을 비교
        document.write(' 남은 기회 : ' + counter + "<br><br>")
        secondSampleNum = [1,2,3,4,5,6,7,8,9] // 샘플숫자의 배열을 초기화
        secondRandomNum = []; // 임의의수2 를 초기화
        counter--; // 카운트다운

    }

    document.write('Your Lose ' + "<br>" + 'The End Game.') // 게임이 종료되었다는 것을 알림
}