document.addEventListener('DOMContentLoaded', function () {
    let array =[];
    let commentForm = document.getElementById('commentForm');

    commentForm.addEventListener('submit', function (event){
        event.preventDefault();
        var handle = document.getElementById("handle").value;
        var comment = document.getElementById("comment").value;
        let parentElement = document.getElementById('showComment');
        if(handle===''||comment===''){
            window.alert('Invalid Info! Handle and Comment are both needed to filled in!');
            document.getElementById("handle").value='';
            document.getElementById("comment").value='';
            return;
        }
        let user = {
            handle: handle,
            comment: comment,
        };
        array.push(user);
        parentElement.innerHTML = '';
        for(let i=0;i<array.length;i++){
            if(array[i].handle.toLowerCase()==='hacker'.toLowerCase()){
                continue;
            }
            let newParagraph1 = document.createElement('p');
            newParagraph1.textContent = 'Handle: ' + array[i].handle;
            parentElement.appendChild(newParagraph1);
            let newParagraph2 = document.createElement('p');
            newParagraph2.textContent = 'Comment: ' + array[i].comment;
            parentElement.appendChild(newParagraph2);
            let lineBreak = document.createElement('br');
            parentElement.appendChild(lineBreak);
        }
        document.getElementById("handle").value='';
        document.getElementById("comment").value='';
    })
});


