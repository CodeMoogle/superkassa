//В данном примере не будет доп файлов для констант, отдельных папок под экшены и редьюсеры, так как смысла в этом нет
//Все необходимое будет в самом файле редьюсера

// constants
const SWITCH_STATUS = 'SWITCH_STATUS'

// reducer
const defaultState = {
	isActive: false,
}

export const buttonReducer = (state = defaultState, action) => {
	switch (action.type) {
		case SWITCH_STATUS:
			return { ...state, isActive: action.payload }
		default:
			return state
	}
}

// sync actions
export const switchStatus = payload => ({ type: 'SWITCH_STATUS', payload })

// socket actions
export const toggleStatusSocket = (socket, status) => {
	return dispatch => {
		socket.emit('button-click', status)
	}
}
