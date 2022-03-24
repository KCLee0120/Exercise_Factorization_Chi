//(y+mx)(xy+n), where m and n are variables
function FactorizationQuestionType1(){

  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  do{
    var m = getRndInteger(-6, 6);
  }while(m==0||m==1||m==-1);
  do{
    var n = getRndInteger(-4, 4);
  }while(n==0);

  document.getElementById("Q1a").innerHTML = "$" + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "^2" + value2Coe(m) + unknowns[unknownNumber][0] + "^2" + unknowns[unknownNumber][1] + "$,";
  document.getElementById("Q1b").innerHTML = "$" + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "^2" + value2Coe(m) + unknowns[unknownNumber][0] + "^2" + unknowns[unknownNumber][1] + value2Coe(n) + unknowns[unknownNumber][1] + value2Coe(n*m) + unknowns[unknownNumber][0] + "$.";
  document.getElementById("Ans_1a").innerHTML = "$" + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "(" + unknowns[unknownNumber][1] + value2Coe(m) + unknowns[unknownNumber][0] + ")$";
  document.getElementById("Ans_1b").innerHTML = "$(" + unknowns[unknownNumber][1] + value2Coe(m) + unknowns[unknownNumber][0] + ")(" + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Constant(n) + ")$";
}

//(ap+bq)(cpq+d), where a, b, c and d are variables
function FactorizationQuestionType2(){

  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var a = getRndInteger(2, 3);
  do{
    var b = getRndInteger(-1, 1);
  }while(b==0);
  var c = getRndInteger(2, 6);
  do{
    var d = getRndInteger(-5, 5);
  }while(d==0||d==1);
  document.getElementById("Q2a").innerHTML = "$" + value2FirstCoe(a*c) + unknowns[unknownNumber][0] + "^2" + unknowns[unknownNumber][1] + value2Coe(b*c) +  unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "^2,$";
  document.getElementById("Q2b").innerHTML = "$" + value2FirstCoe(a*c) + unknowns[unknownNumber][0] + "^2" + unknowns[unknownNumber][1] + value2Coe(b*c) +  unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "^2" + value2Coe(b*d) + unknowns[unknownNumber][1] + value2Coe(a*d) + unknowns[unknownNumber][0] + ".$";
  document.getElementById("Ans_2a").innerHTML = "$" + value2FirstCoe(c) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")$";
  document.getElementById("Ans_2b").innerHTML = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(c) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Constant(d) + ")$";
}

//(a-x)(a+x+ky), where a and k are variables
function FactorizationQuestionType3(){

  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var a = getRndInteger(1, 10);
  do{
    var k = getRndInteger(-6, 6);
  }while(k==0);
  document.getElementById("Q3a").innerHTML = "$" + a*a + "-" + unknowns[unknownNumber][0] + "^2$,";
  document.getElementById("Q3b").innerHTML = "$" + a*a + "-" + unknowns[unknownNumber][0] + "^2" + value2Coe(a*k) + unknowns[unknownNumber][1] + value2Coe(-k) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "$."
  document.getElementById("Ans_3a").innerHTML = "$(" + a + "+" + unknowns[unknownNumber][0] + ")(" + a + "-" + unknowns[unknownNumber][0] + ")$";
  document.getElementById("Ans_3b").innerHTML = "$(" + a + "-" + unknowns[unknownNumber][0] + ")(" + a + "+" + unknowns[unknownNumber][0] + value2Coe(k) + unknowns[unknownNumber][1] + ")$";
}

//(ax+b)(ax-b+ky), where a, b and k are variables
function FactorizationQuestionType4(){

  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var a = getRndInteger(2, 5);
  do{
    var b = getRndInteger(1, 10);
  }while(gcd_two_numbers(a, b)!=1);
  do{
    var k = getRndInteger(-10, 10);
  }while(k==0);
  document.getElementById("Q4a").innerHTML = "$" + a*a + unknowns[unknownNumber][0] + "^2-" + b*b + "$,";
  document.getElementById("Q4b").innerHTML = "$" + a*a + unknowns[unknownNumber][0] + "^2-" + b*b + value2Coe(b*k) + unknowns[unknownNumber][1] + value2Coe(a*k) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + "$.";
  document.getElementById("Ans_4a").innerHTML = "$(" + a + unknowns[unknownNumber][0] + "+" + b + ")(" + a + unknowns[unknownNumber][0] + "-" + b + ")$";
  document.getElementById("Ans_4b").innerHTML = "$(" + a + unknowns[unknownNumber][0] + "+" + b + ")(" + a + unknowns[unknownNumber][0] + "-" + b + value2Coe(k) + unknowns[unknownNumber][1] + ")$";
}

//(x-a)(x-a+by)
function FactorizationQuestionType5(){
  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var a = getRndInteger(1, 10);
  do{
    var b = getRndInteger(-10, 10);
  }while(b==0||b==1);

  document.getElementById("Q5a").innerHTML = "$" + unknowns[unknownNumber][0] + "^2-" + 2*a + unknowns[unknownNumber][0] + "+" +  a*a + "$,";
  document.getElementById("Q5b").innerHTML = "$" + unknowns[unknownNumber][0] + "^2-" + 2*a + unknowns[unknownNumber][0] + "+" +  a*a + value2Coe(b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(-a*b) + unknowns[unknownNumber][1] + "$.";
  document.getElementById("Ans_5a").innerHTML = "$(" + unknowns[unknownNumber][0] + "-" + a + ")^2$";
  document.getElementById("Ans_5b").innerHTML = "$(" + unknowns[unknownNumber][0] + "-" + a + ")(" + unknowns[unknownNumber][0] + "-" + a + value2Coe(b) + unknowns[unknownNumber][1] + ")$";
}

//(x+a)(x+a+by)
function FactorizationQuestionType6(){
  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var a = getRndInteger(1, 10);
  do{
    var b = getRndInteger(-10, 10);
  }while(b==0||b==1);

  document.getElementById("Q6a").innerHTML = "$" + unknowns[unknownNumber][0] + "^2+" + 2*a + unknowns[unknownNumber][0] + "+" +  a*a + "$,";
  document.getElementById("Q6b").innerHTML = "$" + unknowns[unknownNumber][0] + "^2+" + 2*a + unknowns[unknownNumber][0] + "+" +  a*a + value2Coe(b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(a*b) + unknowns[unknownNumber][1] + "$.";
  document.getElementById("Ans_6a").innerHTML = "$(" + unknowns[unknownNumber][0] + "+" + a + ")^2$";
  document.getElementById("Ans_6b").innerHTML = "$(" + unknowns[unknownNumber][0] + "+" + a + ")(" + unknowns[unknownNumber][0] + "+" + a + value2Coe(b) + unknowns[unknownNumber][1] + ")$";
}

//(x+a)(x+b+cy)
function FactorizationQuestionType7(){
  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  do{
    var a = getRndInteger(-5, 5);
  }while(a==0);
  do{
    var b = getRndInteger(-12, 12);
  }while(b==0||b==a||b==-a);
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0);

  document.getElementById("Q7a").innerHTML = "$" + unknowns[unknownNumber][0] + "^2" + value2Coe(a+b) + unknowns[unknownNumber][0] + value2Coe(a*b) + "$,";
  document.getElementById("Q7b").innerHTML = "$" + unknowns[unknownNumber][0] + "^2" + value2Coe(a+b) + unknowns[unknownNumber][0] + value2Coe(a*b) + value2Coe(c) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(a*c) + unknowns[unknownNumber][1] + "$.";
  document.getElementById("Ans_7a").innerHTML = "$(" + unknowns[unknownNumber][0] + value2Constant(a) + ")(" + unknowns[unknownNumber][0] + value2Constant(b) + ")$";
  document.getElementById("Ans_7b").innerHTML = "$(" + unknowns[unknownNumber][0] + value2Constant(a) + ")(" + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + value2Constant(b) + ")$";
}

//(ax+b)(x+c+dy)
function FactorizationQuestionType8(){
  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var a = getRndInteger(1, 2);
  do{
    var b = getRndInteger(-9, 9);
  }while(b==0||gcd_two_numbers(a, b)!=1);
  do{
    var c = getRndInteger(-9, 9);
  }while(c==0||((c==b || c==-b) && a==1));
  do{
    var d = getRndInteger(-10, 10);
  }while(d==0);

  document.getElementById("Q8a").innerHTML = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "^2" + value2Coe(a*c+b) + unknowns[unknownNumber][0] + value2Constant(c*b) + "$,";
  document.getElementById("Q8b").innerHTML = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "^2" + value2Coe(a*c+b) + unknowns[unknownNumber][0] + value2Constant(c*b) + value2Coe(a*d) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(b*d) + unknowns[unknownNumber][1] + "$,";
  document.getElementById("Ans_8a").innerHTML = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Constant(b) + ")(" + unknowns[unknownNumber][0] + value2Constant(c) + ")$";
  document.getElementById("Ans_8b").innerHTML = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Constant(b) + ")(" + unknowns[unknownNumber][0] + value2Constant(c) + value2Coe(d) + unknowns[unknownNumber][1] + ")$";
}

//(ax+y)(ax-y+b)
function FactorizationQuestionType9(){
  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var a = getRndInteger(2, 10);
  do{
    var b = getRndInteger(-9, 9);
  }while(b==0);
  document.getElementById("Q9a").innerHTML = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2-" + unknowns[unknownNumber][1] + "^2$,";
  document.getElementById("Q9b").innerHTML = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2-" + unknowns[unknownNumber][1] + "^2" + value2Coe(a*b) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + "$,";
  document.getElementById("Ans_9a").innerHTML = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "+" + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "-" + unknowns[unknownNumber][1] + ")$";
  document.getElementById("Ans_9b").innerHTML = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "+" + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "-" + unknowns[unknownNumber][1] + value2Constant(b) + ")$";
}

//(ax-by)(ax+by+c)
function FactorizationQuestionType10(){
  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var a = getRndInteger(1, 10);
  do{
    var b = getRndInteger(1, 10);
  }while(gcd_two_numbers(a, b)!=1);
  do{
    var c = getRndInteger(-9, 9);
  }while(c==0);
  document.getElementById("Q10a").innerHTML = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(-b*b) + unknowns[unknownNumber][1] + "^2$,";
  document.getElementById("Q10b").innerHTML = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(-b*b) + unknowns[unknownNumber][1] + "^2" + value2Coe(a*c) + unknowns[unknownNumber][0] + value2Coe(-b*c) + unknowns[unknownNumber][1] + "$.";
  document.getElementById("Ans_10a").innerHTML = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "-" + b + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "+" + b + unknowns[unknownNumber][1] + ")$";
  document.getElementById("Ans_10b").innerHTML = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "-" + b + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "+" + b + unknowns[unknownNumber][1] + value2Constant(c) + ")$";
}

//(ax+by)(ax+by+c)
function FactorizationQuestionType11(){
  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var a = getRndInteger(1, 6);
  do{
    var b = getRndInteger(1, 10);
  }while(gcd_two_numbers(a, b)!=1);
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0);

  document.getElementById("Q11a").innerHTML = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(2*a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] +  value2Coe(b*b) + unknowns[unknownNumber][1] + "^2$,";
  document.getElementById("Q11b").innerHTML = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(2*a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] +  value2Coe(b*b) + unknowns[unknownNumber][1] + "^2" + value2Coe(a*c) + unknowns[unknownNumber][0] + value2Coe(b*c) + unknowns[unknownNumber][1] + "$.";
  document.getElementById("Ans_11a").innerHTML = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0]  + value2Coe(b) + unknowns[unknownNumber][1] + ")^2$";
  document.getElementById("Ans_11b").innerHTML = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0]  + value2Coe(b) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0]  + value2Coe(b) + unknowns[unknownNumber][1] + value2Constant(c) + ")$";
}

//(ax-by)(ax-by+c)
function FactorizationQuestionType12(){
  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var a = getRndInteger(1, 6);

  do{
    var b = getRndInteger(1, 10);
  }while(gcd_two_numbers(a, b)!=1);
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0);

  document.getElementById("Q12a").innerHTML = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(-2*a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] +  value2Coe(b*b) + unknowns[unknownNumber][1] + "^2$,";
  document.getElementById("Q12b").innerHTML = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(-2*a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] +  value2Coe(b*b) + unknowns[unknownNumber][1] + "^2" + value2Coe(a*c) + unknowns[unknownNumber][0] + value2Coe(-b*c) + unknowns[unknownNumber][1] + "$.";
  document.getElementById("Ans_12a").innerHTML = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0]  + value2Coe(-b) + unknowns[unknownNumber][1] + ")^2$";
  document.getElementById("Ans_12b").innerHTML = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0]  + value2Coe(-b) + unknowns[unknownNumber][1] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0]  + value2Coe(-b) + unknowns[unknownNumber][1] + value2Constant(c) + ")$";
}

//(ax+by)(d-x-cy)
function FactorizationQuestionType13(){
  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var a = getRndInteger(1, 2);
  do{
    var b = getRndInteger(-9, 9);
  }while(b==0||gcd_two_numbers(a, b)!=1||b==a);
  do{
    var c = getRndInteger(-6, 6);
  }while(c==0||(a==1 && c==-b));
  var d = getRndInteger(1, 5);
  document.getElementById("Q13a").innerHTML = "$" + value2FirstCoe(a*d) + unknowns[unknownNumber][0] + value2Coe(b*d) + unknowns[unknownNumber][1] + "$,"
  document.getElementById("Q13b").innerHTML = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "^2" + value2Coe(a*c+b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(b*c) + unknowns[unknownNumber][1] + "^2$,";
  document.getElementById("Q13c").innerHTML = "$" + value2FirstCoe(a*d) + unknowns[unknownNumber][0] + value2Coe(b*d) + unknowns[unknownNumber][1] + value2FirstCoe(-a) + unknowns[unknownNumber][0] + "^2" + value2Coe(-a*c-b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(-b*c) + unknowns[unknownNumber][1] + "^2$.";
  document.getElementById("Ans_13a").innerHTML = "$" + value2FirstCoe(d) + "(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")$";
  document.getElementById("Ans_13b").innerHTML = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")(" + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")$";
  document.getElementById("Ans_13c").innerHTML = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")(" + d + "-" + unknowns[unknownNumber][0] + value2Coe(-c) + unknowns[unknownNumber][1] + ")$";
}

//(ax+by)(x+cy+d)
function FactorizationQuestionType14(){
  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var a = getRndInteger(1, 3);
  do{
    var b = getRndInteger(-9, 9);
  }while(b==0||gcd_two_numbers(a, b)!=1);
  do{
    var c = getRndInteger(-8, 8);
  }while(c==0||(a==1&&b==-c));
  do{
    var d = getRndInteger(-9, 9);
  }while(d==0);
  document.getElementById("Q14a").innerHTML = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "^2" + value2Coe(b+a*c) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(b*c) + unknowns[unknownNumber][1] + "^2$,";
  document.getElementById("Q14b").innerHTML = "$" + value2FirstCoe(a) + unknowns[unknownNumber][0] + "^2" + value2Coe(b+a*c) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] + value2Coe(b*c) + unknowns[unknownNumber][1] + "^2" + value2Coe(a*d) + unknowns[unknownNumber][0] + value2Coe(b*d) + unknowns[unknownNumber][1] + "$.";
  document.getElementById("Ans_14a").innerHTML = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")(" + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + ")$";
  document.getElementById("Ans_14b").innerHTML = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")(" + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + value2Constant(d) + ")$";
}

//(x+a-y)(x+a+y)
function FactorizationQuestionType15(){
  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  do{
    var a = getRndInteger(-10, 10);
  }while(a==0);
  document.getElementById("Q15a").innerHTML = "$" + unknowns[unknownNumber][0] + "^2" + value2Coe(2*a) + unknowns[unknownNumber][0] + value2Constant(a*a) + "$,";
  document.getElementById("Q15b").innerHTML = "$" + unknowns[unknownNumber][0] + "^2" + value2Coe(2*a) + unknowns[unknownNumber][0] + value2Constant(a*a) + "-" + unknowns[unknownNumber][1] + "^2$.";
  document.getElementById("Ans_15a").innerHTML = "$(" + unknowns[unknownNumber][0] + value2Constant(a) + ")^2$";
  document.getElementById("Ans_15b").innerHTML = "$(" + unknowns[unknownNumber][0] + value2Constant(a) + "-" + unknowns[unknownNumber][1] + ")(" + unknowns[unknownNumber][0] + value2Constant(a) + "+" + unknowns[unknownNumber][1] + ")$";
}

//(ax+b-cy)(ax+b+cy)
function FactorizationQuestionType16(){
  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var a = getRndInteger(1, 8)
  do{
    var b = getRndInteger(-10, 10);
  }while(b==0||gcd_two_numbers(a, b)!=1);
  do{
    var c = getRndInteger(-10, 10);
  }while(c==0);
  document.getElementById("Q16a").innerHTML = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(2*a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] +value2Coe(b*b) + unknowns[unknownNumber][1] + "^2$,"
  document.getElementById("Q16b").innerHTML = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2" + value2Coe(2*a*b) + unknowns[unknownNumber][0] + unknowns[unknownNumber][1] +value2Coe(b*b) + unknowns[unknownNumber][1] + "^2" + value2Coe(-c*c) + unknowns[unknownNumber][2] + "^2$.";
  document.getElementById("Ans_16a").innerHTML = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + ")^2$";
  document.getElementById("Ans_16b").innerHTML = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + value2Coe(c) + unknowns[unknownNumber][2] + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Coe(b) + unknowns[unknownNumber][1] + value2Coe(-c) + unknowns[unknownNumber][2] + ")$";
}

//(ax+b)(ax-b)(x+cy+d)
function FactorizationQuestionType17(){
  var unknowns = [
    ["a", "b", "c"], ["x", "y", "z"], ["p", "q", "r"]
  ];
  var unknownNumber = getRndInteger(0, 2);
  var a = getRndInteger(1, 3);
  do{
    var b = getRndInteger(1, 4);
  }while(gcd_two_numbers(a, b)!=1);
  do{
    var c = getRndInteger(-3, 3);
  }while(c==0);
  do{
    var d = getRndInteger(-5, 5);
  }while(d==0);
  document.getElementById("Q17a").innerHTML = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^3" + value2Coe(a*a*c) + unknowns[unknownNumber][0] + "^2" + unknowns[unknownNumber][1] + value2Coe(a*a*d) + unknowns[unknownNumber][0] + "^2$,";
  document.getElementById("Q17b").innerHTML = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^3" + value2Coe(a*a*c) + unknowns[unknownNumber][0] + "^2" + unknowns[unknownNumber][1] + value2Coe(a*a*d) + unknowns[unknownNumber][0] + "^2" + value2Coe(-b*b) + unknowns[unknownNumber][0] + value2Coe(-b*b*c) + unknowns[unknownNumber][1] + value2Constant(-b*b*d) + "$.";
  document.getElementById("Ans_17a").innerHTML = "$" + value2FirstCoe(a*a) + unknowns[unknownNumber][0] + "^2(" + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + value2Constant(d) + ")$";
  document.getElementById("Ans_17b").innerHTML = "$(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Constant(b) + ")(" + value2FirstCoe(a) + unknowns[unknownNumber][0] + value2Constant(-b) + ")(" + unknowns[unknownNumber][0] + value2Coe(c) + unknowns[unknownNumber][1] + value2Constant(d) + ")$";
}



// returns H.C.F. of x and y
function gcd_two_numbers(x, y) {
  if ((typeof x !== 'number') || (typeof y !== 'number'))
    return false;
  x = Math.abs(x);
  y = Math.abs(y);
  while(y) {
    var t = y;
    y = x % y;
    x = t;
  }
  return x;
}



// returns a random integer between min and max (both included)
function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min + 1) ) + min;
}

function value2FirstCoe(n){
  if(n<0)
    if(n!=-1)
      return n;
    else
      return "-";
  else if(n>0)
    if(n!=1)
      return n;
    else
      return "";
}

function value2Constant(n){
  if(n>0)
    return "+" + n;
  else if(n<0)
    return "-" + Math.abs(n);
  else
    return "";
}

function value2Coe(n){
  if(n<0)
    if(n!=-1)
      return n;
    else
      return "-";
  else if(n>0)
    if(n!=1)
      return "+" + n;
    else
      return "+";
}
