let takimlar = [
    "images/besiktas.png",
    "images/fenerbahce.png",
    "images/galatasaray.png",
    "images/trabzonspor.png",
]
let takimlar1 = [
    "besiktas",
    "fenerbahce",
    "galatasaray",
    "trabzonspor",
]
const takim1=document.getElementById("takim1");
const takim2=document.getElementById("takim2");
const btnEslestir=document.getElementById("btnEslestir");
const sonucListe=document.getElementById("sonucListe");


btnEslestir.addEventListener("click",eslestir);


function eslestir(){
    if(takimlar.length<2){
        alert("Eşleşmler tamamlandı. Tüm takımlara başarılar dileriz. GS hariç!");
        return;
    }
    let rastgeleTakim1 = Math.floor(Math.random() * takimlar.length);
    takim1.src=takimlar[rastgeleTakim1];
    
    let rastgeleTakim2 = Math.floor(Math.random() * takimlar.length);
    takim2.src=takimlar[rastgeleTakim2];
   
    if(rastgeleTakim1==rastgeleTakim2){
        alert("Aynı takımlar birbiriyle eşleşemez. Yeniden deneyin!");
        return;
    }
    const kapsayici=document.getElementById("kapsayici");
    const yeniLi=document.createElement("li");
    yeniLi.className="liler";
    kapsayici.appendChild(yeniLi);
    yeniLi.innerHTML=takimlar1[rastgeleTakim1]+ " - " +takimlar1[rastgeleTakim2];
}