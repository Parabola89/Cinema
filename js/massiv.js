const d=[0, 2, 5, -4, 6, 22, -9, -12, ,13, 78];
let a1=[];
let a1index=0;
let a2=[];
let a2index=0;
for (let dindex=0; dindex < 11; dindex++){ 
    if (d[dindex] % 2 == 0) {a1[a1index] = d[dindex]; a1index++;}
        else {a2[a2index] = d[dindex]; a2index++;}};
alert (a1)
alert (a2)