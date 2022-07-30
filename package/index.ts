import { switchCell } from './switch/index.js'
import { checkmarkCell } from './checkmark/index.js'


export const agGridComoComponent = {
    switchCell,
    checkmarkCell
}


if (typeof window !== 'undefined') {
    Object.defineProperty(window, 'Romo', {
        value: agGridComoComponent,
        enumerable: false,
        writable: false,
        configurable: false
    })
}
