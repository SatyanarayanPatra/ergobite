export const plans = [
	{
		name: 'Free',
		monthly: 0,
		yearly: 0,
		features: ['Basic Support', 'Community Access'],
	},
	{
		name: 'Pro',
		monthly: 20,
		yearly: 200,
		features: [
			'Priority Support',
			'Advanced Analytics',
			'Community Access',
		],
	},
	{
		name: 'Enterprise',
		monthly: 50,
		yearly: 500,
		features: [
			'Dedicated Manager',
			'Custom Integrations',
			'Priority Support',
			'Advanced Analytics',
		],
	},
];

export const features = [
	{
		label: 'Community Access',
		availability: { Free: true, Pro: true, Enterprise: true },
	},
	{
		label: 'Priority Support',
		availability: { Free: false, Pro: true, Enterprise: true },
	},
	{
		label: 'Advanced Analytics',
		availability: { Free: false, Pro: true, Enterprise: true },
	},
	{
		label: 'Custom Integrations',
		availability: { Free: false, Pro: false, Enterprise: true },
	},
	{
		label: 'Dedicated Manager',
		availability: { Free: false, Pro: false, Enterprise: true },
	},
];
