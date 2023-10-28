const Questions=[
    {
        'que':'Which of the following is a markup language',
        'a':'html',
        'b':'css',
        'c':'javascript',
        'd':'php',
        'correct':'a'
    },
    {
        'que':'In which of the following a programmer writes a program to multiply instead of divide two numbers by mistake, how can this error be detected?',
        'a':'interpreter only',
        'b':'none of the mentioned',
        'c':'compiler or interpreter',
        'd':'compiler only',
        'correct':'b'
    },
    {
        'que':'When was the Umang app launched in India?',
        'a':'	23 Nov 2017',
        'b':'	10 Dec 2017',
        'c':'	20 Nov 2017',
        'd':'	5 Nov 2017',
        'correct':'a'
    },
    {
        'que':'What is the username in  sample123@yahoo.com',
        'a':	'Sample',
        'b':	'Sample123',
        'c':	'@ ',
        'd':	'yahoo.com',
        'correct':'b'
    },
    {
        'que':'Who writes the content for the blog ?',
        'a':	'Blogger',
        'b':	'Blog',
        'c':	'Blogging',
        'd':	'Blockosphere',
        'correct':'a'
    },
    {
        'que':'What is the maximum size of the file we can attach in the g-mail?',
        'a':	'15mb',
        'b':	'20mb',
        'c':	'25mb',
        'd':	'10mb',
        'correct':'c'
    },
    {
        'que':'Which of the following is not an example of social site?',
        'a':	'Twitter',
        'b':	'Instagram',
        'c':	'Linkedin',
        'd':	'Amazon',
        'correct':'d'
    },
    {
        'que':'-What is the full form of POS?',
        'a':	'Point of sale',
        'b':	'Picture of sale',
        'c':	'Position of sale',
        'd':	'None',
        'correct':'a'
    },
    {
        'que':'Is there a protocol to download e-mail from the server to the mail box?',
        'a':	'IMAP',
        'b':	'POP 3 ',
        'c':	'STMP ',
        'd':	'FTP',
        'correct':'b'
    },
    {
        'que':'Where is the main content in e-mail?',
        'a':	'Body ',
        'b':	'Subject',
        'c':	'CC',
        'd':	'BCC',
        'correct':'a'        
    }
]
let index = 0;
let total = Questions.length;
let right = 0;
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll(".options")
const loadQuestions =()=>{
    if(index=== total){
        return endQuiz()
    }
    reset()
        const data = Questions[index]
        console.log(data)
        quesBox.innerText=`${index+1} ${data.que}`;
        optionInputs[0].nextElementSibling.innerText=data.a;
        optionInputs[1].nextElementSibling.innerText=data.b;
        optionInputs[2].nextElementSibling.innerText=data.c;
        optionInputs[3].nextElementSibling.innerText=data.d;
}
const submitQuiz = ()=>{
    const data= Questions[index];
    const ans= getAnswer()
    if(ans == data.correct){
        right++;
    }
    else{
        wrong++;
    }
    index++;
    loadQuestions();
    return;
}

const getAnswer=()=>{
    let answer;
    optionInputs.forEach(
        (input)=>{
            if(input.checked){
                answer=input.value;
            }
        }
    )
    return answer;
}

const reset=()=>{
    optionInputs.forEach(
        (input)=>{
            input.checked=false
        }
    )
}

const endQuiz=()=>{
    document.getElementById("box").innerHTML=`
    <div style="text-align:center">
        <h3>Thank you, quiz ended</h3>
        <h2>${right} / ${total} are correct</h2>
        </div> 
    `   
}

// var counter=10;setInterval(function(){
//     counter--;
//     if(counter>=0){
//         id=document.getElementById("count");
//         id.innerHTML=counter;
//     }
//     if(counter===0){
//         id.innerHTML="times up!"
//     }
// },1000);

//see from here

// var counter=10;
// var questionsCount=0;
// quesdivID= document.getElementById("quesBox");
// setInterval(function(){
//         counter--;
//     if(counter>=0){
//         id=document.getElementById("count");
//         id.innerHTML=counter;
//     }
//     if(counter===0){
//         id.innerHTML="times up!";
//         counter=10;
//         questionsCount++;
//     }
//     if (questionsCount===Questions.length){
//         quesdivID.innerHTML="thank you quiz end";
//         id.innerHTML="";
//     }
//     else{
//         quesdivID.innerHTML=Questions[questionsCount];
//     }
// },1000);

// function gotoNextQues(){
//     questionsCount++;
//     counter=10;
// }

loadQuestions();

console.log("hello")