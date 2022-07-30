export default class CheckmarkEditor {
    private container: any
    private value: any
    private randomId: string = Math.random().toString(16)

    init(params) {
        this.container = document.createElement('div');
        this.container.innerHTML = `
         <input type="checkbox" id="${this.randomId}" ${params.value ? 'checked="checked"' : ''} />
        `
    }

    onChange(event) {
        this.value = event.target.checked
    }


    // gets called once when grid ready to insert the element
    getGui() {
        return this.container;
    }

    afterGuiAttached() {
        this.container.focus()
        document.getElementById(this.randomId).addEventListener('change', this.onChange.bind(this))
    }

    getValue() {
        return this.value;
    }

    // any cleanup we need to be done here
    destroy() {}

    isPopup() {
        return false;
    }

}

