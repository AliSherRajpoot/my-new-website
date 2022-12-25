
function checkPalindrome(string) {
    var  chararray=Array.from(string);
    
  var reversenewarray=  chararray.reverse();
    let newreversestring="";
    for(let j=0;j<reversenewarray.length;j++){
        newreversestring+=reversenewarray[j];
    }
           if(string===newreversestring){
            document.getElementById('result').innerHTML="THIS IS A PALENDROME";

           }
           else{
            document.getElementById('result').innerHTML="THIS IS NOT A PALENDROME";

           }

    // const len = string.length;

    // for (let i = 0; i < len / 2; i++) {

    //     if (string[i] !== string[len - 1 - i]) {
    //         return 'It is not a palindrome';
    //     }
    // }
    // return 'It is a palindrome';
}

