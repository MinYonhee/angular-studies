//Molde que herda os comportamentos de elementos HTML
class CardNews extends HTMLElement {
    //Dentro de uma classe o primeiro método executado é o construtor
    constructor() {
        //Invoca o método construtor de quem está herdando (herda de HTMLElement, executa da class tbm)
        //constructor() é construtor da class e o super() chamama o construtor de quem está herdando
        super();
        //essa classe vai anexar uma sombra
        const shadow = this.attachShadow({mode: "open"});

        shadow.innerHTML = "<h1>Hello Bea</h1>"
    }
}
//cria um elemento customizado e define como será chamado e o método construtor dele que é a classe de molde
customElements.define('card-news', CardNews)