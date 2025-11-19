export class MensagemView {
    constructor(seletor) {
        this.element = document.querySelector(seletor);
    }
    template(model) {
        return ` 
            <p class="alert alert-info">${model}</p>
        `;
    }
    update(model) {
        this.element.innerHTML = this.template(model);
    }
}
