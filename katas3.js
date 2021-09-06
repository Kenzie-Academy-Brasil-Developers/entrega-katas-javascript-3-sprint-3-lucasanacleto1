const sampleArray = [469, 755, 244, 245, 758, 450, 302, 20, 712, 71, 456, 21, 398, 339, 882, 848, 179, 535, 940, 472];

function showResults(valor){
    let pularLinha = document.createElement('br');
    let textoConteudo = document.createElement('p');
    let resultado = document.createTextNode(valor);

    textoConteudo.appendChild(resultado);
    document.body.appendChild(textoConteudo);
    document.body.appendChild(pularLinha);
}
// implemente o código do kata 1 aqui
function kata1() {
    let resultadokata = [];
    for(let i=1; i<=25; i++){
        resultadokata.push(i);
    }
    
    showResults('1.  Exibir os números de 1 a 25:');
    showResults(resultadokata);
    showResults('');
    showResults('');
    showResults('');
    return resultadokata;

}

kata1();

function kata2() {
    // implemente o código do kata 2 aqui
    let resultadokata = [];
    for(let i=25; i>0; i--){
        resultadokata.push(i);
    }
    
    showResults('2.  Exibir os números de 25 a 1:');
    showResults(resultadokata);
    showResults('');
    showResults('');
    showResults('');
    return resultadokata;
}
kata2();

function kata3() {
    let resultadokata = [];
    for(let i=-1; i>=-25; i--){
        resultadokata.push(i);
    }
    
    showResults('3.  Exibir os números de -1 a -25:');
    showResults(resultadokata);
    showResults('');
    showResults('');
    showResults('');
    return resultadokata;
    // implemente o código do kata 3 aqui
}
kata3();

function kata4() {
    // implemente o código do kata 4 aqui
    let resultadokata = [];
    for(let i=-25; i<=-1; i++){
        resultadokata.push(i);
    }
    
    showResults('4.  Exibir os números de -25 a -1:');
    showResults(resultadokata);
    showResults('');
    showResults('');
    showResults('');
    return resultadokata;
}
kata4();

function kata5() {
    // implemente o código do kata 5 aqui
    let resultadokata = [];
    for(let i=25; i>=-25; i--){
        if(i%2 !== 0){
        resultadokata.push(i);
        }
    }
    
    showResults('5.  Exibir os números de -25 a -1:');
    showResults(resultadokata);
    showResults('');
    showResults('');
    showResults('');
    return resultadokata;
}
kata5();

function kata6() {
    // implemente o código do kata 6 aqui
    let resultadokata = [];
    for(let i=3; i<=100; i++){
        if(i%3 == 0){
        resultadokata.push(i);
        }
    }
    
    showResults('6.  Exibir os números divisíveis por 3 até o 100:');
    showResults(resultadokata);
    showResults('');
    showResults('');
    showResults('');
    return resultadokata;
}
kata6();

function kata7() {
    // implemente o código do kata 7 aqui
    let resultadokata = [];
    for(let i=3; i<=100; i++){
        if(i%7 == 0){
        resultadokata.push(i);
        }
    }
    
    showResults('7.  Exibir os números divisíveis por 7 até o 100:');
    showResults(resultadokata);
    showResults('');
    showResults('');
    showResults('');
    return resultadokata;
}
kata7();

function kata8() {
    // implemente o código do kata 8 aqui
    let resultadokata = [];
    for(let i=100; i>=3; i--){
        if(i%3 == 0 || i%7 == 0){
        resultadokata.push(i);
        }
    }
    
    showResults('8.  Exibir os números divisíveis por 3 e os números divisíveis por 7 regressivamente a partir do 100:');
    showResults(resultadokata);
    showResults('');
    showResults('');
    showResults('');
    return resultadokata;
}
kata8();

function kata9() {
    // implemente o código do kata 9 aqui
    let resultadokata = [];
    for(let i=5; i<=100; i++){
        if(i%2 !== 0 && i%5 == 0){
        resultadokata.push(i);
        }
    }
    
    showResults('9.  Exibir os números ímpares divisíveis por 5 até o 100:');
    showResults(resultadokata);
    showResults('');
    showResults('');
    showResults('');
    return resultadokata;
}
kata9();

function kata10() {
    // implemente o código do kata 10 aqui
    let resultadokata = sampleArray;
    showResults('10. Exibir os 20 elementos de sampleArray:');
    showResults(resultadokata);
    showResults('');
    showResults('');
    showResults('');
    return resultadokata;
}
kata10();

function kata11() {
    // implemente o código do kata 11 aqui
    let resultadokata =[];
    for(let i=0; i<=sampleArray.length; i++){
        if(sampleArray[i]%2 ==0){
        resultadokata.push(sampleArray[i]);
        }
    }
    
    showResults('11. Exibir todos os números pares contidos em sampleArray:');
    showResults(resultadokata);
    showResults('');
    showResults('');
    showResults('');
    return resultadokata;
}
kata11();

function kata12() {
    // implemente o código do kata 12 aqui
    let resultadokata =[];
    for(let i=0; i<=sampleArray.length; i++){
        if(sampleArray[i]%2 !==0){
        resultadokata.push(sampleArray[i]);
        }
    }
    
    showResults('12. Exibir todos os números ímpares contidos em sampleArray:');
    showResults(resultadokata);
    showResults('');
    showResults('');
    showResults('');
    return resultadokata;
}
kata12();

function kata13() {
    // implemente o código do kata 13 aqui
    let resultadokata =[];
    for(let i=0; i<=sampleArray.length; i++){
        if(sampleArray[i]%8 ==0){
        resultadokata.push(sampleArray[i]);
        }
    }
    
    showResults('13. Exibir os números divisíveis por 8 em sampleArray:');
    showResults(resultadokata);
    showResults('');
    showResults('');
    showResults('');
    return resultadokata;
}
kata13();

function kata14() {
    // implemente o código do kata 14 aqui
    let resultadokata =[];
    for(let i=0; i<sampleArray.length; i++){
        resultadokata.push(sampleArray[i] * sampleArray[i])
    }
    
    showResults('14. Exibir o quadrado de cada elemento de sampleArray:');
    showResults(resultadokata);
    showResults('');
    showResults('');
    showResults('');
    return resultadokata;
}
kata14();

function kata15() {
    // implemente o código do kata 15 aqui
    let resultadokata = 0;
    for(let i=1; i<=20; i++){
        resultadokata += i
    }
    
    showResults('15. Exibir a soma de todos os números de 1 a 20:');
    showResults(resultadokata);
    showResults('');
    showResults('');
    showResults('');
    return resultadokata;
}
kata15();

function kata16() {
    // implemente o código do kata 16 aqui
    let resultadokata = 0;
    for(let i=0; i<sampleArray.length; i++){
        resultadokata += sampleArray[i]
    }
    
    showResults('16. Exibir a soma de todos os elementos de sampleArray:');
    showResults(resultadokata);
    showResults('');
    showResults('');
    showResults('');
    return resultadokata;
}
kata16();

function kata17() {
    // implemente o código do kata 17 aqui
    let resultadokata = sampleArray[0];
    for(let i=0; i<sampleArray.length; i++){
        if(sampleArray[i] < resultadokata){
            resultadokata = sampleArray[i];
        }
    }
    
    showResults('17. Exibir o menor elemento de sampleArray:');
    showResults(resultadokata);
    showResults('');
    showResults('');
    showResults('');
    return resultadokata;
}
kata17();

function kata18() {
    // implemente o código do kata 18 aqui
    let resultadokata = sampleArray[0];
    for(let i=0; i<sampleArray.length; i++){
        if(sampleArray[i] > resultadokata){
            resultadokata = sampleArray[i];
        }
    }
    
    showResults('18. Exibir o maior elemento de sampleArray:');
    showResults(resultadokata);
    showResults('');
    showResults('');
    showResults('');
    return resultadokata;
}
kata18();
/**
 * Daqui em diante são os bônus, por sua conta e risco
 */

function kataBonus1() {
    // implemente o código do kata bonus 1 aqui
}

function kataBonus2() {
    // implemente o código do kata bonus 2 aqui
}

function kataBonus3() {
    // implemente o código do kata bonus 3 aqui
}

function kataBonus4() {
    // implemente o código do kata bonus 4 aqui
}

function kataBonus5() {
    // implemente o código do kata bonus 5 aqui
}
