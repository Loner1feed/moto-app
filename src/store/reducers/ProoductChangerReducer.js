//actions
const ADD_FIELD = 'ADD-FIELD'
const UPDATE_TEXT_STATE = 'SAVE-CHANGES'
const CATEGORY_CHANGE_CHECKBOX_STATE = 'CHANGE-CHECKBOX-STATE'
const SIZE_CHANGE_CHECKBOX_STATE = 'SIZE-CHANGE-CHECKBOX-STATE'
const PRICE_CHANGE = 'PRICE-CHANGE'
const COLOR_PICK = 'COLOR-PICK'
const REMOVE_COLOR = 'REMOVE-COLOR'
const ADD_FILE = 'ADD-FILE'
const DELETE_FILE = 'DELETE-FILE'

let init = {

    // Initializing text fields
    // type: 1 - text input, 2 - textarea
    //
    fields: [
        {
            id: 1,
            type: 1,
            title: 'Product Name',
            text: '',
        },

        {
            id: 2,
            type: 2,
            title: 'Description',
            text: '',
        },

        {
            id: 3,
            type: 1,
            title: 'Details',
            text: '',
        },
    ],

    categoryBlock: {
        HelmetsItems: [
            {
                id: 1,
                type: 'helmets',
                text: 'Motocross Helmets',
                checked: false
            },
    
            {
                id: 2,
                type: 'helmets',
                text: 'Helmet Spare Parts',
                checked: false
            },
    
            {
                id: 3,
                type: 'helmets',
                text: 'Adventure Helmets',
                checked: false
            },
    
            {
                id: 4,
                type: 'helmets',
                text: 'Balaclavas & Face Masks',
                checked: false
            }
        ],

        Placeholder: [
            {
                id: 1,
                type: 'placeholder',
                text: 'Item',
                checked: false
            }
        ],
    },

    sizes: [
        {
            id: 1,
            type: 'size',
            text: 'S'
        },

        {
            id: 2,
            type: 'size',
            text: 'M'
        },

        {
            id: 3,
            type: 'size',
            text: 'L'
        },

        {
            id: 4,
            type: 'size',
            text: 'XL'
        },
    ],

    colorsBlock: {
        colors: [
            {
                id: 1,
                bgColor: 'E2352E',
                text: 'Red',
            },
        ],

        colorPickerValues: [
            {
                id: 1,
                bgColor: 'F3E246',
                text: 'Yellow'
            },

            {
                id: 1,
                bgColor: 'EC6032',
                text: 'Orange'
            },

            {
                id: 1,
                bgColor: '733788',
                text: 'Violet'
            },

            {
                id: 1,
                bgColor: '0098B8',
                text: 'Blue'
            },

            {
                id: 1,
                bgColor: '00905E',
                text: 'Green'
            }
        ],
    },

    imageFiles: [
        
    ],

    priceText: '',
}

const ProductChangerReducer = (state = init, action) => {
    switch (action.type) {
        case ADD_FIELD:
            let newField = {
                id: state.fields.length+1,
                type: 1,
                text: '',
            }
            state.fields.push(newField)
            // console.log(state)
            return state;
    
        case UPDATE_TEXT_STATE:
            console.log(action.text + ' ' + action.id)
            state.fields[action.id - 1].text = action.text;
            // console.log(state)
            return state;

        case CATEGORY_CHANGE_CHECKBOX_STATE:
            // state.categoryBlock.HelmetsItems.
            // state.categoryBlock.
            switch (action.itemType) {
                case 'helmets':
                    state.categoryBlock.HelmetsItems[action.id].checked = !state.categoryBlock.HelmetsItems[action.id].checked
                    break;
            
                case 'placeholder':
                    state.categoryBlock.Placeholder[action.id].checked = !state.categoryBlock.Placeholder[action.id].checked
                    break;

                default:
                    break;
            }
            return state

        case SIZE_CHANGE_CHECKBOX_STATE:
            state.sizes[action.id].checked = !state.sizes[action.id].checked
            return state;

        case PRICE_CHANGE:
            state.priceText = action.text;
            return state;

        case COLOR_PICK: 
            console.log('picked');
            let item = state.colorsBlock.colorPickerValues[action.id]
            state.colorsBlock.colors.push(item)
            delete state.colorsBlock.colorPickerValues[action.id];
            return state;

        case REMOVE_COLOR:
            console.log('removed')
            let item2 = state.colorsBlock.colors[action.id]
            state.colorsBlock.colorPickerValues.push(item2)
            delete state.colorsBlock.colors[action.id];
            return state;

        case ADD_FILE:
            console.log('file added')
            let file = {
                id: state.imageFiles.length + 1,
                file: action.file
            }

            // state.imageFiles.push(file);
            let fileReader = new FileReader()
            // console.log(action.file[0])
            fileReader.readAsDataURL(action.file[0])
            fileReader.onload = function() {
                let result = fileReader.result
                // console.log(result)
                state.imageFiles.push(result)
            };
            return state;

        case DELETE_FILE:
            console.log()
            delete state.imageFiles[action.id]
            return state;

        default:
            return state;
    }
}

export const addFieldAC = () => ({
    type: ADD_FIELD,
})

export const updateTextStateAC = (id, text) => ({
    type: UPDATE_TEXT_STATE,
    id: id,
    text: text
})

export const changeCheckboxStateAC = (id, itemType, checked) => ({
    type: CATEGORY_CHANGE_CHECKBOX_STATE,
    id: id,
    itemType: itemType,
    checked: checked
})

export const changeSizeStateAC = (id, itemType, checked) => ({
    type: SIZE_CHANGE_CHECKBOX_STATE,
    id: id,
    itemType: itemType,
    checked: checked
})

export const priceChangeAC = (text) => ({
    type: PRICE_CHANGE,
    text: text
})

export const colorPickAC = (id) => ({
    type: COLOR_PICK,
    id: id,
})

export const removeColorAC = (id) => ({
    type: REMOVE_COLOR,
    id: id
})

export const addFileAC = (file) => ({
    type: ADD_FILE,
    file: file
})

export const deleteFileAC = (id) => ({
    type: DELETE_FILE,
    id: id,
})

export default ProductChangerReducer