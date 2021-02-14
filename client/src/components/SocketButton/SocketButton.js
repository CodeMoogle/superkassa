import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { switchStatus, toggleStatusSocket } from '../../store/buttonReducer'
import { io } from 'socket.io-client'

import './SocketButton.css'

const socket = io('http://localhost:5000')

const SocketButton = () => {
	const dispatch = useDispatch()
	const isActive = useSelector(state => state.isActive)

	useEffect(() => {
		socket.on('button-status-change', data => {
			dispatch(switchStatus(data))
		})
	}, [isActive])

	const toggleHandler = () => {
		dispatch(toggleStatusSocket(socket, !isActive))
	}

	return (
		<button className='toggle-btn' onClick={toggleHandler}>
			{isActive ? 'ON' : 'OFF'}
		</button>
	)
}

export default SocketButton
