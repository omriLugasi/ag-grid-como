class CustomSwitchRender {
  init(params) {

    this.eGui = document.createElement('div');
    this.eGui.innerHTML = params.value === 'true' ? 'TRUE': 'FALSE';

  }


  getGui() {
    return this.eGui;
  }

}

window.CustomSwitchRender = CustomSwitchRender
