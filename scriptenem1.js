function myFunction() {
    var c = 0
    var re = []
    var q1 = document.quiz.resposta.value;
    var q2 = document.quiz.resposta1.value;
    var q3 = document.quiz.resposta2.value;
    var q4 = document.quiz.resposta3.value;
    var q5 = document.quiz.resposta4.value;
    var q6 = document.quiz.resposta5.value;
    var q7 = document.quiz.resposta6.value;
    var q8 = document.quiz.resposta7.value;
    var q9 = document.quiz.resposta8.value;
    var q10 = document.quiz.resposta9.value;

    if (q1 == "d1") {c++
    }else{
        var e1 = 'ERROU A 1'
        re.push(e1)
    }
    if (q2 == "a2") {c++
    }else{
        var e2 = ' ERROU A 2'
        re.push(e2)
    }
    if (q3 == "c3") {c++
    }else{
        var e3 = ' ERROU A 3'
        re.push(e3)
    }
    if (q4 == "c4") {c++
    }else{
        var e4 = ' ERROU A 4'
        re.push(e4)
    }
    if (q5 == "b5") {c++
    }else{
        var e5 = ' ERROU A 5'
        re.push(e5)
    }
    if (q6 == "d6") {c++
    }else{
        var e6 = ' ERROU A 6'
        re.push(e6)
    }
    if (q7 == "d7") {c++
    }else{
        var e7 = ' ERROU A 7'
        re.push(e7)
    }
    if (q8 == "a8") {c++
    }else{
        var e8 = ' ERROU A 8'
        re.push(e8)
    }
    if (q9 == "d9") {c++
    }else{
        var e9 = ' ERROU A 9'
        re.push(e9)
    }
    if (q10 == "b10") {c++
    }else{
        var e10 = ' ERROU A 10'
        re.push(e10)
    }
    

    if( c == 10){
        document.getElementById('demo').innerHTML = `Você acertou ${c} questões!<br>`
    }else if(c == 0){
        alert('Você errou todas as questões!')
              
    }else{
        alert(`Você acertou ${c} questão/questões `)  
        alert(`${re} `)
       
    }
    
   
   document.getElementById('demo3').innerHTML = 'Gabarito: <br> Questão 1 = D <br> Questão 2 = A <br> Questão 3 = C <br> Questão 4 = C <br> Questão 5 = B <br> Questão 6 = D <br> Questão 7 = D <br> Questão 8 = A <br> Questão 9 = D <br> Questão 10 = B'    
    
}