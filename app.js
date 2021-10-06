let number=[111,111,1222,33,,3,,1,4444,2224,44,4,444,657676];
var largest= 0;
var samllest ;

// Largest Number

for (i=0; i<=number.length;i++){
    if (number[i]>largest) {
         largest=number[i];
    }
}


// Samllest Number


for (j=0; j<number.length;j++){
    if (number[j]<largest) {
         samllest=number[j];
         }
}
for(k=0; k<number.length; k++){
    if(number[k]<samllest){
        samllest=number[k]
    }
}
console.log(largest);
console.log(samllest);