export default class CustomSwitchEditor {
    private container: any
    private value: any

    constructor() {}

    init(params) {
        this.container = document.createElement('div');

        this.container.innerHTML = '<button>X</button>'
        this.container.innerHTML += '<button>Y</button>'

    }


    // gets called once when grid ready to insert the element
    getGui() {
        return this.container;
    }

    afterGuiAttached() {
        this.container.focus();
    }

    getValue() {
        return this.value;
    }

    // any cleanup we need to be done here
    destroy() {}

    isPopup() {
        return true;
    }

}

