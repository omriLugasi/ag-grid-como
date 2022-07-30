type ParamsType = {
    props: {
        text?: string,
        style?: string,
        clssases?: string,
        hrefValue?: (columnData: object) => string
    },
    node: {
        data: Record<string, unknown>
    },
    value: unknown
}

export default class HyperlinkRender {
    private eGui: any
    private params: ParamsType

    init(params: ParamsType) {
        console.log(params)
        this.params = params
        this.eGui = document.createElement('div');
        const {
            text = 'Link',
            style = 'color: blue;',
            classes = '',
            hrefValue
        } = (params?.props || {})

        const hrefAttributeValue = hrefValue ? this.getDynamicValue() : params.value

        this.eGui.innerHTML = `
            <a class="${classes}" style="${style}" href="${hrefAttributeValue}">
               ${text}
            </a>`
    }

    getDynamicValue() {
        const str = this.params.props?.hrefValue?.(this.params.node.data)
        if (typeof str !== 'string') {
            throw new Error('the supplied value must be from type string')
        }
        return str
    }

    getGui() {
        return this.eGui;
    }

}
