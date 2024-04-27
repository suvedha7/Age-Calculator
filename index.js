function calculate(){
    let day;
    let month;
    let year;
    let cday=parseInt(cd.value.slice(8,10),10);
    let cmonth=parseInt(cd.value.slice(5,7),10);
    let cyear=parseInt(cd.value.slice(0,4),10);
    let bday=parseInt( dob.value.slice(8,10),10);
    let bmonth=parseInt( dob.value.slice(5,7),10);
    let byear=parseInt( dob.value.slice(0,4),10);
    if (cday>=bday){
        day=cday-bday;
    }
    else{
        day=cday+new  Date(cyear,cmonth).getDate() - bday;
        cmonth --;
    }
    if (cmonth>=bmonth){
        month=cmonth-bmonth;
    }
    else{
        month=cmonth+12-bmonth;
        cyear--;
    }
    year=cyear-byear;
    if(year<0){
        aget.innerHTML="Wrong input !!!";
    }
    else{
        aget.innerHTML= year + " years, " + month + " months, " + day + " days."
    }
}