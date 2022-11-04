// Block Scope
{
    //BLOQUEA
    // Los bloques son agrupaciones de expresiones y se contienen dentro de las llaves 
    let x = 5;
    console.log(x);

    var y = 11;
    // Las variables declaradas con var tienen ambito o alcance global y pueden ser usadas fuera del bloque
}
{
    //BLOQUE B
    // Los bloques son independientes unos de otros
    let x = 7;
    console.log(x);

    var y = 0;
    {
        //BLOQUE B.1
        console.log(x + 1)
        // Esto funciona porque sigue estando dentro del bloque 

        // Sin embargo:
        let z = 1;
    }
    //  Esto no funciona porque ya me he salido del bloque donde z está declarada
    // console.log(z);
}
console.log(y + 1);


// Hosting
let coche;
coche = 'seat panda'
console.log(coche);

