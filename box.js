        const CorrectAnswer = ['A','B','A','B'];
        const form = document.querySelector('.quiz-form');


        form.addEventListener('submit',e => {
            e.preventDefault();
        // chaek answer
        let score = 0;
          const userAnswer = [form.q1.value,form.q2.value,form.q3.value,form.q4.value]
        userAnswer.forEach((value,index) =>{

        if(CorrectAnswer[index] === value){
            score += 25;

        }

        });
        scrollTo(0,0);


         let output=0;

         const timer = setInterval(() => {
         result = document.querySelector('span').textContent = `${output}%`

             if( output === score){
                 clearInterval(timer)
             } else{

                 output++;
             }
         },10)
         })
