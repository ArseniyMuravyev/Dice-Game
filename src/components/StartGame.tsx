import styles from '../global.module.css'

interface StartGameProps {
	toggle: () => void
}

const StartGame: React.FC<StartGameProps> = ({ toggle }) => {
	return (
		<div className='flex justify-center h-screen items-center max-h-[528px] mt-[180px]'>
			<div>
				<img src='/images/dices.png' alt='' />
			</div>
			<div className='flex flex-col items-end'>
				<h1 className='text-[96px] font-semibold'>DICE GAME</h1>
				<button className={styles.button} onClick={toggle}>
					Play Now
				</button>
			</div>
		</div>
	)
}

export default StartGame
