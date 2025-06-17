import { motion } from 'framer-motion';

export default function PlanCard({ plan, yearly }) {
	const price = yearly ? plan.yearly : plan.monthly;

	return (
		<motion.div
			whileHover={{ scale: 1.02 }}
			className={`w-full border rounded-2xl p-6 flex flex-col items-center shadow-sm transition-all duration-300
        ${
			plan.name === 'Pro'
				? 'bg-blue-50 border-blue-500 dark:bg-blue-900 dark:border-blue-400'
				: 'bg-white border-gray-300 dark:bg-gray-800 dark:border-gray-700'
		}`}>
			{plan.name === 'Pro' && (
				<div className='text-xs font-semibold text-white bg-blue-600 px-3 py-1 rounded-full mb-4 uppercase tracking-wide'>
					Recommended
				</div>
			)}

			<h2 className='text-lg font-semibold text-gray-800 dark:text-white mb-1'>
				{plan.name}
			</h2>

			<motion.div
				key={price}
				initial={{ opacity: 0 }}
				animate={{ opacity: 1 }}
				transition={{ duration: 0.4 }}
				className='text-4xl font-bold text-gray-900 dark:text-white mb-4'>
				${price}
				<span className='text-sm text-gray-500 dark:text-gray-300'>
					{' '}
					/ {yearly ? 'year' : 'month'}
				</span>
			</motion.div>

			<button
				className='bg-blue-600 hover:bg-blue-700 text-white font-medium px-5 py-2 rounded-lg transition shadow-md'
				aria-label={`Choose ${plan.name} plan`}>
				{plan.name === 'Enterprise' ? 'Contact Sales' : 'Get Started'}
			</button>
		</motion.div>
	);
}
