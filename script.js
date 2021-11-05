var nomeA = document.getElementById('nome1');
var nomeB = document.getElementById('nome2');
var chance = Math.ceil (Math.random () * 100);

function calcular()
{
    alert("A chance de " + nomeA.value + " e " + nomeB.value + " darem certo é de: " + chance + "%");
}

function refreshPage(){
    window.location.reload();
  }