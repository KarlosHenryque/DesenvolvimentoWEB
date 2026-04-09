function criarElemento() {
//alert("Funcionou!");

const title = document.querySelector("#titulo-principal");

/* title.textContent = "Titulo alterado";*/

setTimeout(() => {
    title.textContent = "Titulo alterado";
}, 3000);

title.style.color = "blue";

const qtdFilhos =container.children.length;

    if (qtdFilhos < 5) {
        const container = document.getElementById("container");

        const h3 = document.createElement("h3");
        h3.textContent = "Titulo tres";
        container.appendChild(h3);

        const p = document.createElement("p");
        p.textContent = "Um texto bala";
        container.appendChild(p);

        const bntRemove = document.createElement("button");
        bntRemove.textContent = "Remover";
        
        bntRemove.addEventListener("click", removerUltELement);

        function removerUltELement() {
            container.removeChild(container.lastElementChild);
        }

        container.appendChild(bntRemove);
    } else {
        alert("Limite de elementos atingido");
    }
}