const lelang=(menit)=>{

var harga=10000
var hasil=0
for(i=1; i<=menit; i++){

    if(i%4==0){
        harga =Math.round (harga+(harga*10/100))
       // Console.log (hasil)
    } 
    else{
        harga = Math.round (harga+(harga*20/100))
        //Console.log(hasil)
    }

} if(harga>30000000){
    return 'baju terbeli'
}else{
    return harga
}

}
console.log(lelang(1))
console.log(lelang(2))
console.log(lelang(49))
console.log(lelang(50))