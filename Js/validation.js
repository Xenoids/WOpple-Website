// Validasi Checkout
// const submits = document.getElementsByClassName('submitbutton')

const errorTxt = document.getElementById('error')

const submit = document.getElementById('idsubmit')

submit.addEventListener('click',(e) =>{
    // disable refresh
    var errorMSG = ''
    e.preventDefault()
    console.log('Clicked')
  

    // Email Validation (@binus.ac.id)
    const Emailinput = document.getElementById('emailid')

    if(!Emailinput.value.includes('@binus.ac.id')){
        errorMSG = 'Email harus @binus.ac.id!'
    }

    // Nama Validation (ga boleh empty + panjang harus lebih dari 5)

    const Namainput = document.getElementById('namaid')

    if(Namainput.value.length < 5)
    {
        errorMSG = 'Panjang Nama minimal 5 huruf!'
        if(Namainput.value.length == 0)
        {
            errorMSG = 'Nama harus diisi!'
        }
    }

    // Hp validation (harus 62 & ga boleh empty)

    const Hpinput = document.getElementById('Hpid')

    if(!Hpinput.value.startsWith('62'))
    {
        errorMSG = 'No Hp harus diawali dengan 62!'
    }

    else if(Hpinput.value.startsWith('62'))
    {
        if(Hpinput.value.length != 13)
        {
            errorMSG = 'No Hp harus 13 digit!'
        }
    }

    if(Hpinput.value.length == 0)
    {
        errorMSG = 'Hp harus diisi!'
    }

  

     // Kartu Kredit Validation (harus 16 digit)
    
    const Kreditinput = document.getElementById('idkredit')

     if(Kreditinput.value.length != 16)
     {
         errorMSG = 'Kartu Kredit harus 16 digit!'
     }

    // Checkbox Validation (Minimal centang 1)
    const Checkboxinput = document.getElementById('checkboxid')
    const Checkboxinput2 = document.getElementById('checkboxid2')

    if(!Checkboxinput.checked && !Checkboxinput2.checked)
    {
        errorMSG = 'Harus Check setidaknya satu!'
    }

    if(!errorMSG)
    {
        if(confirm('yakin mau checkout?'))
        {
            alert('Sukses Melakukan Checkout!')
            location.reload()
        }
        else{
            errorMSG ='Checkout Dibatalkan!'
            location.reload()
        }
    }

    errorTxt.innerHTML = errorMSG
})