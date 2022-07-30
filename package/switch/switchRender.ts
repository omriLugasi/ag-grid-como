export default class CustomSwitchRender {
    private eGui: any

    init(params) {

        this.eGui = document.createElement('div');
        this.eGui.innerHTML = params.value === 'true' ? 'TRUE': 'FALSE';

    }


    getGui() {
        return this.eGui;
    }

}
