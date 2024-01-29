interface RoleDiceProps {
	roleDice: () => void
	currentDice: number
}

const RoleDice: React.FC<RoleDiceProps> = ({ roleDice, currentDice }) => {
	return (
		<div className='flex flex-col items-center mt-12 gap-[15px]'>
			<div className='cursor-pointer' onClick={roleDice}>
				<img src={`/images/dice_${currentDice}.png`} alt='dice 1' />
			</div>
			<p className='text-2xl'>Click on Dice to roll</p>
		</div>
	)
}

export default RoleDice
