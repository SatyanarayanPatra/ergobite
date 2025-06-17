import { useState } from 'react';
import { Switch } from '@headlessui/react';
import { plans, features } from '../data/pricingData';
import PlanCard from './PlanCard';

export default function PricingTable() {
	const [yearly, setYearly] = useState(false);

	return (
		<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 text-gray-800 dark:text-gray-100'>
			{/* Billing toggle */}
			<div className='flex items-center justify-center mb-12'>
				<span className='mr-3 text-sm font-medium'>Monthly</span>
				<Switch
					checked={yearly}
					onChange={setYearly}
					className={`${
						yearly ? 'bg-blue-600' : 'bg-gray-300'
					} relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-200`}>
					<span
						className={`${
							yearly ? 'translate-x-6' : 'translate-x-1'
						} inline-block h-4 w-4 transform rounded-full bg-white transition-transform`}
					/>
				</Switch>
				<span className='ml-3 text-sm font-medium'>Yearly</span>
			</div>

			{/* Plan Cards */}
			<div className='grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
				{plans.map((plan) => (
					<PlanCard key={plan.name} plan={plan} yearly={yearly} />
				))}
			</div>

			{/* Feature Comparison Table */}
			<div className='mt-16 overflow-x-auto'>
				<table className='w-full table-auto border-collapse text-sm text-left shadow-sm rounded-xl overflow-hidden'>
					<thead className='bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-100'>
						<tr>
							<th className='p-4 font-semibold text-base'>
								Features
							</th>
							{plans.map((plan) => (
								<th
									key={plan.name}
									className='p-4 font-semibold text-center'>
									{plan.name}
								</th>
							))}
						</tr>
					</thead>
					<tbody>
						{features.map((feature, i) => (
							<tr
								key={feature.label}
								className={`${
									i % 2 === 0
										? 'bg-white dark:bg-gray-800'
										: 'bg-gray-50 dark:bg-gray-700'
								} border-t dark:border-gray-600`}>
								<td className='p-4'>{feature.label}</td>
								{plans.map((plan) => (
									<td
										key={plan.name}
										className='text-center p-4'>
										{feature.availability[plan.name] ? (
											<span className='text-green-600 dark:text-green-400 text-lg'>
												✔
											</span>
										) : (
											<span className='text-red-500 dark:text-red-400 text-lg'>
												✖
											</span>
										)}
									</td>
								))}
							</tr>
						))}
					</tbody>
				</table>
			</div>
		</div>
	);
}
