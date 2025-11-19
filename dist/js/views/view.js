export class View {
    constructor(seletor) {
        this.elemento = document.querySelector(seletor);
    }
    update(model) {
        this.elemento.innerHTML = this.template(model);
    }
    template(model) {
        throw Error('Daught classes should be implements template metod');
    }
}
