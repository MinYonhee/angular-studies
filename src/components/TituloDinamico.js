//case sensitive, maiusculas e minusculas fazem diferença
class TituloDinamico extends HTMLElement {
    constructor() {
        super();

        const shadow = this.attachShadow({mode: "open"});
        
        //base do componente <h1>Bea</h1>
        const componentRoot = document.createElement("h1");
        //conteúdo do h1 vai ser o que vier da prop 'titulo'
        componentRoot.textContent = this.getAttribute("titulo"); 

        //estilizar o componente
        const style = document.createElement("style");
        style.textContent = `
            h1{
            color: red;
            }
        `

        //enviar para a shadow
        //pendura elementos filho na shadow, tudo que foi criado separado é anexado na shadow
        shadow.appendChild(componentRoot)
        shadow.appendChild(style)


    }
}
//selector sempre com '-' para diferenciar as tags padrões de uma customizada
customElements.define('titulo-dinamico', TituloDinamico);