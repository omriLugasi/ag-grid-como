import CheckmarkEditor from './checkmarkEditor.js'
import checkmarkRender from './checkmarkRender.js'

export const checkmarkCell = {
    cellRenderer: checkmarkRender,
    cellEditor: CheckmarkEditor,
}
