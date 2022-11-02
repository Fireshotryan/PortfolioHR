 function message(){
        var naam = document.getElementById('naam');
        var email = document.getElementById('email');
        var onderwerp = document.getElementById('onderwerp');
        var msg = document.getElementById('msg');
        const success = document.getElementById('success');
        const danger = document.getElementById('danger');
    
        if(naam.value === '' || email.value === '' || onderwerp.value === '' || msg.value === ''){
            danger.style.display = 'block';
        }
        else{
            setTimeout(() => {
                naam.value = '';
                email.value = '';
                onderwerp.value = '';
                msg.value = '';
            }, 2000);
    
            success.style.display = 'block';
        }
    
    
        setTimeout(() => {
            danger.style.display = 'none';
            success.style.display = 'none';
        }, 4000);
    
    }
