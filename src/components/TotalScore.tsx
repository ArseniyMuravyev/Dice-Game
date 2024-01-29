import React from 'react'

interface TotalScoreProps {
	score: number
}

const TotalScore: React.FC<TotalScoreProps> = ({ score }) => {
	return (
		<div className='flex flex-col gap-[3px] text-center max-w-[200px]'>
			<h1 className='text-[100px] font-semibold max-h-[112px]'>{score}</h1>
			<p className='text-2xl font-semibold'>Total Score</p>
		</div>
	)
}

export default TotalScore
