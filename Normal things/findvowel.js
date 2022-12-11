const vowels=["a","e","i","o","u","A","E","I","O","U"];

function findVowel(sentence){
    let count=0;
    const letters= Array.from(sentence);

    letters.forEach(function(value){
        if(vowels.includes(value)){
            count++;
        }
    });
    return count;

}


console.log(findVowel("my name is nafis and i am reading cse in green university of bangladesh"));

