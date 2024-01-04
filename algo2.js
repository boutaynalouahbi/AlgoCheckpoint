let tab1=new Array();
let tab2=new Array();
tab1=[3, 1, 7, 9,45,90];
tab2=[2, 4, 1, 9, 3,100];
const SumDistinctElm=(tab1,tab2)=>{
 let sum=0;
    for(let j = 0; j< tab2.length; j++ ){
       console.log(tab1.includes(tab2[j]));
       if(!tab1.includes(tab2[j])){
        sum=sum+tab2[j];
       }
    } 
    for(let j = 0; j< tab1.length; j++ ){
        console.log(tab2.includes(tab1[j]));
        if(!tab2.includes(tab1[j])){
         sum=sum+tab1[j];
        }
     } 

 return sum;
}
console.log(SumDistinctElm(tab1,tab2));