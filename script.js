
function start() {
    let questions = [
        {
            question: "What does HTML stand for?",
            options: [
              "Hyper Text Markup Language",
              "Hyperlink and Text Markup Language",
              "High Tech Markup Language",
              "Hyper Transfer Markup Language"
            ],
            answer: 1
          },
          {
            question: "Which programming language is primarily used for client-side scripting in web development?",
            options: [
              "Java",
              "Python",
              "JavaScript",
              "PHP"
            ],
            answer: 3
          },
          {
            question: "What is the purpose of CSS in web development?",
            options: [
              "To define the structure and content of a webpage",
              "To provide interactivity and dynamic behavior to a webpage",
              "To enhance the visual presentation of a webpage",
              "To perform server-side operations in web applications"
            ],
            answer: 3
          },
          {
            question: "Which of the following is NOT a valid HTTP status code?",
            options: [
              "404",
              "200",
              "503",
              "600"
            ],
            answer: 4
          },
          {
            question: "What is the purpose of responsive web design?",
            options: [
              "To optimize websites for search engines",
              "To improve website performance",
              "To make websites compatible with various devices and screen sizes",
              "To enhance website security"
            ],
            answer: 3
          },
          {
            question: "Which of the following is a front-end JavaScript framework/library commonly used for building user interfaces?",
            options: [
              "Django",
              "Angular",
              "Express.js",
              "Flask"
            ],
            answer: 2
          },
          {
            question: "What is the purpose of AJAX in web development?",
            options: [
              "To provide server-side processing of web requests",
              "To enable asynchronous communication between the client and server",
              "To manage database operations in web applications",
              "To validate user input in web forms"
            ],
            answer: 2
          },
          {
            question: "Which of the following is NOT a valid HTTP request method?",
            options: [
              "GET",
              "POST",
              "PUSH",
              "DELETE"
            ],
            answer: 3
          },
          {
            question: "What is the purpose of a CMS (Content Management System) in web development?",
            options: [
              "To facilitate collaboration among developers",
              "To manage website content easily without needing extensive technical knowledge",
              "To enhance website security",
              "To improve website performance"
            ],
            answer: 2
          },
          {
            question: "Which protocol is commonly used for secure communication over the internet?",
            options: [
              "HTTP",
              "FTP",
              "HTTPS",
              "SMTP"
            ],
            answer: 3
          }
    ]
    
    let startBtn = document.getElementById('start')
    let quizContainer = document.getElementById('quizContainer')
    let ques = document.getElementById('ques')
    let opt1 = document.getElementById('opt1')
    let opt2 = document.getElementById('opt2')
    let opt3 = document.getElementById('opt3')
    let opt4 = document.getElementById('opt4')
    let nextBtn = document.getElementById('nextBtn')
    let scoreEle = document.getElementById('score')
    let queEle = document.getElementById('queEle')
    let result = document.getElementById('result')
    let total = document.getElementById('total')
    let resultContainer = document.getElementById('resultContainer')
    
    let selectedOpt;
    
    let n=0;
    ques.innerText = questions[n].question
    opt1.innerText = questions[n].options[0]
    opt2.innerText = questions[n].options[1]
    opt3.innerText = questions[n].options[2]
    opt4.innerText = questions[n].options[3]
    queEle.innerText = `Questions ${n+1}/${questions.length}`

    startBtn.classList.toggle('hidden')
    quizContainer.classList.toggle('hidden')
 
    
    opt1.addEventListener('click',()=>{
        opt1.style.backgroundColor = 'lightblue'
        selectedOpt = 1;
        nextBtn.toggleAttribute('disabled')
        opt2.style.backgroundColor = 'white'
        opt3.style.backgroundColor = 'white'
        opt4.style.backgroundColor = 'white'
    })
    opt2.addEventListener('click',()=>{
        opt2.style.backgroundColor = 'lightblue'
        selectedOpt = 2;
        nextBtn.toggleAttribute('disabled')
        opt1.style.backgroundColor = 'white'
        opt3.style.backgroundColor = 'white'
        opt4.style.backgroundColor = 'white'
    })
    opt3.addEventListener('click',()=>{
        opt3.style.backgroundColor = 'lightblue'
        selectedOpt = 3;
        nextBtn.toggleAttribute('disabled')
        opt2.style.backgroundColor = 'white'
        opt1.style.backgroundColor = 'white'
        opt4.style.backgroundColor = 'white'
    })
    opt4.addEventListener('click',()=>{
        opt4.style.backgroundColor = 'lightblue'
        selectedOpt = 4;
        nextBtn.toggleAttribute('disabled')
        opt2.style.backgroundColor = 'white'
        opt3.style.backgroundColor = 'white'
        opt1.style.backgroundColor = 'white'
    })


     let score = 0;

     
        nextBtn.addEventListener('click',()=>{
            if(selectedOpt==questions[n].answer){
                if(selectedOpt==1) opt1.style.backgroundColor = 'green'
                else if(selectedOpt==2) opt2.style.backgroundColor = 'green'
                else if(selectedOpt==3) opt3.style.backgroundColor = 'green'
                else opt4.style.backgroundColor = 'green'
    
                score++;
                scoreEle.innerText = `score:${score}`
             }else {
                    if(selectedOpt==1) opt1.style.backgroundColor = 'red'
                    else if(selectedOpt==2) opt2.style.backgroundColor = 'red'
                    else if(selectedOpt==3) opt3.style.backgroundColor = 'red'
                    else opt4.style.backgroundColor = 'red'
    
                    if(questions[n].answer=='1') opt1.style.backgroundColor = 'green'
                    else if(questions[n].answer=='2') opt2.style.backgroundColor = 'green'
                    else if(questions[n].answer=='3') opt3.style.backgroundColor = 'green'
                    else opt4.style.backgroundColor = 'green'
             }
             n++;
             
             if(n==questions.length){
                result.innerText = score
                total.innerText = questions.length
                resultContainer.classList.toggle('hidden')
                quizContainer.classList.toggle('hidden')
                let tryAgain = document.getElementById('tryAgain')
                tryAgain.classList.toggle('hidden')
                tryAgain.addEventListener('click',()=>{
                    location.reload()
                })
        
             }else {
             setTimeout(()=>{
               
               ques.innerText = questions[n].question
               opt1.innerText = questions[n].options[0]
               opt2.innerText = questions[n].options[1]
               opt3.innerText = questions[n].options[2]
               opt4.innerText = questions[n].options[3]
               queEle.innerText = `Questions ${n+1}/${questions.length}`
               
             
               opt1.style.backgroundColor = 'white'
               opt2.style.backgroundColor = 'white'
               opt3.style.backgroundColor = 'white'
               opt4.style.backgroundColor = 'white'
             },500)
             
             nextBtn.toggleAttribute('disabled')
             }
             
    })
     }
    

