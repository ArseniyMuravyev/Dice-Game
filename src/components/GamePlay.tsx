import React, { useState } from 'react'
import styles from '../global.module.css'
import NumberSelector from './NumberSelector'
import RoleDice from './RoleDice'
import Rules from './Rules'
import TotalScore from './TotalScore'

interface GamePlayProps {
	score?: number
	selectedNumber?: number
	currentDice?: number
	error?: string
	showRules?: boolean
}

const GamePlay: React.FC<GamePlayProps> = () => {
	const [score, setScore] = useState(0)
	const [selectedNumber, setSelectedNumber] = useState<number | undefined>(
		undefined
	)
	const [currentDice, setCurrentDice] = useState(1)
	const [error, setError] = useState('')
	const [showRules, setShowRules] = useState(false)

	const generateRandomNumber = (min: number, max: number): number => {
		return Math.floor(Math.random() * (max - min) + min)
	}

	const roleDice = (): void => {
		const randomNumber = generateRandomNumber(1, 7)
		setCurrentDice(_prev => randomNumber)

		if (!selectedNumber) {
			setError('You have not selected any number')
			return
		}

		if (selectedNumber === randomNumber) {
			setScore(prev => prev + randomNumber)
		} else {
			setScore(prev => prev - 2)
		}

		setSelectedNumber(undefined)
	}

	const resetScore = (): void => {
		setScore(0)
	}

	return (
		<main className='pb-[146px]'>
			<div className='px-[80px] pt-16  flex justify-between'>
				<TotalScore score={score} />
				<NumberSelector
					error={error}
					setError={setError}
					selectedNumber={selectedNumber}
					setSelectedNumber={setSelectedNumber}
				/>
			</div>
			<RoleDice currentDice={currentDice} roleDice={roleDice} />
			<div className='flex flex-col gap-6 items-center mt-9'>
				<button
					className={`${styles.button} bg-white border-black text-black hover:border-white hover:text-white hover:bg-black`}
					onClick={resetScore}
				>
					Reset Score
				</button>
				<button
					className={styles.button}
					onClick={() => setShowRules(prev => !prev)}
				>
					{showRules ? 'Hide' : 'Show'} Rules
				</button>
			</div>
			{showRules && <Rules />}
		</main>
	)
}

export default GamePlay
