import styles from '../global.module.css'

interface NumberSelectorProps {
	error: string
	setError: React.Dispatch<React.SetStateAction<string>>
	selectedNumber: number | undefined
	setSelectedNumber: React.Dispatch<React.SetStateAction<number | undefined>>
}

const NumberSelector: React.FC<NumberSelectorProps> = ({
	error,
	setError,
	selectedNumber,
	setSelectedNumber
}) => {
	const arrNumber = [1, 2, 3, 4, 5, 6]

	const numberSelectorHandler = (value: number): void => {
		setSelectedNumber(value)
		setError('')
	}

	return (
		<div className='flex flex-col items-end'>
			<p className='text-2xl text-[#FF0C0C]'>{error}</p>
			<div className='flex gap-6'>
				{arrNumber.map((value, i) => (
					<div
						key={i}
						onClick={() => numberSelectorHandler(value)}
						data-is-selected={value === selectedNumber}
						className={`${
							value === selectedNumber ? 'bg-black text-white' : ''
						} ${styles.number_button}`}
					>
						{value}
					</div>
				))}
			</div>
			<div>
				<p className='text-2xl font-bold mt-[30px]'>Select Number</p>
			</div>
		</div>
	)
}

export default NumberSelector
