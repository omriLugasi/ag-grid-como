export default class CustomSwitchRender {
    private eGui: any

    init(params) {

        this.eGui = document.createElement('div');
        this.eGui.innerHTML = params.value ? 'TRUE': 'FALSE';

    }


    getGui() {
        return this.eGui;
    }

}
