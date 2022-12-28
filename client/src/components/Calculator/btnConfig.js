export const BTN_ACTIONS = {
    ADD: 'ADD',
    THEME: 'THEME',
    CALC: 'CALC',
    DELETE: 'DELETE'
}

export const btns = [
    {
        display: 'C',
        action: BTN_ACTIONS.DELETE,
        class: 'btn__op'
    },
    {
        display: '(',
        action: BTN_ACTIONS.ADD,
        class: 'btn__op'
    },
    {
        display: ')',
        action: BTN_ACTIONS.ADD,
        class: 'btn__op'
    },
    {
        display: '/',
        action: BTN_ACTIONS.ADD,
        class: 'btn__op'
    },
    {
        display: 'x',
        action: BTN_ACTIONS.ADD,
        class: 'btn__op'
    },
    {
        display: '9',
        action: BTN_ACTIONS.ADD,
        class: ''
    },
    {
        display: '8',
        action: BTN_ACTIONS.ADD,
        class: ''
    },
    {
        display: '7',
        action: BTN_ACTIONS.ADD,
        class: ''
    },
    {
        display: '-',
        action: BTN_ACTIONS.ADD,
        class: 'btn__op'
    },
    {
        display: '+',
        action: BTN_ACTIONS.ADD,
        class: 'btn__op'
    },
    {
        display: '6',
        action: BTN_ACTIONS.ADD,
        class: ''
    },
    {
        display: '5',
        action: BTN_ACTIONS.ADD,
        class: ''
    },
    {
        display: '4',
        action: BTN_ACTIONS.ADD,
        class: ''
    },
    {
        display: 'sin',
        action: BTN_ACTIONS.ADD,
        type : 'sin',
        class: 'btn__op'
    },
    {
        display: 'cos',
        action: BTN_ACTIONS.ADD,
        type : 'sin',
        class: 'btn__op'
    },
    {
        display: '3',
        action: BTN_ACTIONS.ADD,
        class: ''
    },
    {
        display: '2',
        action: BTN_ACTIONS.ADD,
        class: ''
    },
    {
        display: '1',
        action: BTN_ACTIONS.ADD,
        class: ''
    },
    {
        display: 'tan',
        action: BTN_ACTIONS.ADD,
        type : 'sin',
        class: 'btn__op'
    },
    {
        display: 'log',
        action: BTN_ACTIONS.ADD,
        type : 'sin',
        class: 'btn__op'
    },
    {
        display: '',
        action: BTN_ACTIONS.THEME,
        class: ''
    },
    {
        display: '0',
        action: BTN_ACTIONS.ADD,
        class: ''
    },
    {
        display: '.',
        action: BTN_ACTIONS.ADD,
        class: ''
    },
    {
        display: '!',
        action: BTN_ACTIONS.ADD,
        type : 'sin',
        class: 'btn__op'
    },
    {
        display: '=',
        action: BTN_ACTIONS.CALC,
        class: 'btn__op'
    }
];
