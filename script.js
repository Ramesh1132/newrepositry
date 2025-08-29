function beforeSubmit()
{
    let inputdate = document.querySelector(".inputdate");
    let outputdate = document.querySelector(".outputdate");
    
    console.log(inputdate.value);//string --> date(en_US) is my local --> system.debug(UserInfo.getLocale()); 

    let fromatedDate =  new Date(inputdate.value).toLocaleDateString('en-US'); //dd/mm/yyyy
    console.log(fromatedDate);
    outputdate = fromatedDate;
    console.log(outputdate);
}