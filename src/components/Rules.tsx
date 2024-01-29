const Rules = () => {
	return (
		<div className='flex flex-col bg-[#FBF1F1] p-[20px] max-w-[794px] mt-16 mx-auto'>
			<h2 className='text-2xl font-bold'>How to play dice game</h2>
			<ul className='list-none mt-6 flex flex-col gap-1'>
				<li className='font-semibold'>Select any number</li>
				<li className='font-semibold'>Click on dice image</li>
				<li className='font-semibold'>
					After click on dice if selected number is equal to dice number you
					will get same point as dice
				</li>
				<li className='font-semibold'>
					If you get wrong guess then 2 point will be dedcuted
				</li>
			</ul>
		</div>
	)
}

export default Rules
