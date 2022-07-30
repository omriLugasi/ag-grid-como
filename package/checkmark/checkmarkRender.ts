export default class CheckmarkRender {
    private eGui: any

    init(params) {
        this.eGui = document.createElement('div');
        this.eGui.innerHTML = params.value ? 'Check': 'Nope';
    }


    getGui() {
        return this.eGui;
    }

}
