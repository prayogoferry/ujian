sen=('25 10 5 1')

sen=sen.split(' ')
console.log (sen)


const koin=(x)=>{

//  do {

     
//  } while (condition);

    for(i=0; i<sen.length; i++){
       var j = sen[i]++
        if(x==i){
            return j

        }
    }

}
console.log(koin(31))