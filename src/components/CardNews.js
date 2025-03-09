class CardNews extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        //pendura dois filhos na shadow, referente ao build e o style
        shadow.appendChild(this.build());
        shadow.appendChild(this.styles());
    }
    //método pra construir a estrutura
    build() {
        const componentRoot = document.createElement("div");
        //pega a raiz e seta o atributo classe e o nome dela
        componentRoot.setAttribute("class", "card");
        
        const cardLeft = document.createElement("div");
        cardLeft.setAttribute("class", "cardLeft");

        const autor = document.createElement("span");
        autor.textContent = "By" + (this.getAttribute("autor") || "Anonymous");
        
        const linkTitle = document.createElement("a");
        //apenas chamando a prop padrão de um link
        linkTitle.href = this.getAttribute("link-url");

        linkTitle.textContent = this.getAttribute("title");
        
        const newsContent = document.createElement("p");
        newsContent.textContent = this.getAttribute("content");

        cardLeft.appendChild(autor);
        cardLeft.appendChild(linkTitle);
        cardLeft.appendChild(newsContent);

        const cardRight = document.createElement("div");
        cardRight.setAttribute("class", "cardRight");

        const newsImage = document.createElement("img");
        newsImage.src = this.getAttribute("photo") || "assets/default-img.jpg";
        newsImage.alt = "capa";

        cardRight.appendChild(newsImage);


        //informa que as outras divs são filhas da div principal
        componentRoot.appendChild(cardLeft);
        componentRoot.appendChild(cardRight);
       

        return componentRoot;
    }

    //aplica todos os estilos
    styles() {
        const style = document.createElement("style");
        style.textContent = `
.cardRight > img {
  width: 250px;
  height: 250px;
}

.card {
    width: 80%;
    display: flex;
    flex-direction: row;
    box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
    -webkit-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 9px 9px 27px 0px rgba(0,0,0,0.75);
    justify-content: space-between;
}

.cardLeft {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding-left: 10px;
}
.cardLeft > span {
    font-weight: 400;
}

.cardLeft > a {
    margin: 15px;
    font-size: 25px;
    color: black;
    text-decoration: none;
    font-weight: bold;

}

.cardLeft > p {
    color: rgb(70, 70, 70);
}

        
        `

        return style;
    }
}

customElements.define('card-news', CardNews);