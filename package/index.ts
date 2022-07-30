import { switchCell } from './switch/index.js'


export const agGridComoComponent = {
    switchCell
}


if (typeof window !== 'undefined') {
    Object.defineProperty(window, 'Romo', {
        value: agGridComoComponent,
        enumerable: false,
        writable: false,
        configurable: false
    })
}
