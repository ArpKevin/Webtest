$(function(){
    let helyesValaszok = [3,3,2,1,2,0];

    let gombokLista = [];

    $k1Array = $(".valasz1 input");
    
    console.log($k1Array);

    for (let i = 1; i <= 6; i++) {
        $atmeneti = $(`.valasz${i} input`);

        gombokLista.push($atmeneti);
    }

    gombokLista.forEach(element => {
        console.log(element);
    });

    

    let bepipaltGombokSzama = 0;

    for (const gomb of gombokLista) {
        for (const g of gomb) {
            console.log(g.checked);
        }
    }
})