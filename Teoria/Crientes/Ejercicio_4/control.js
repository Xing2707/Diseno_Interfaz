let hoy=new Date()
let mes=hoy.getMonth() +1
let dia=hoy.getDate()
let anio=hoy.getFullYear()
console.log(mes , dia, anio)
let DiaR=dias(dia,mes,anio)

console.log(DiaR)

function dias(d, m, a){
    let diaF=0;
    while(a<2023){
        switch(m){
            case 1:
            case 3:
            case 5:
            case 7:
            case 8:
            case 10:
            case 12: diaF+=31; break;
            case 4:
            case 6:
            case 9:
            case 11: diaF+=30; break;
            case 2: diaF+=28;
        }
        m++;
        if(m==12){
            a++
        }
    }
    return diaF-d
}