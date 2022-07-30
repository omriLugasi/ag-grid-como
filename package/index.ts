import { switchCell } from './switch/index.js'
import { checkmarkCell } from './checkmark/index.js'
import { hyperLinkCell } from './hyperLink/index.js'


export const agGridComoComponent = {
    switchCell,
    checkmarkCell,
    hyperLinkCell
}


if (typeof window !== 'undefined') {
    Object.defineProperty(window, 'Romo', {
        value: agGridComoComponent,
        enumerable: false,
        writable: false,
        configurable: false
    })
}
