import { useEffect, useState } from 'react';
import { Moon, Sun } from 'lucide-react'; 

export default function DarkModeToggle() {
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		const root = window.document.documentElement;
		const storedTheme = localStorage.getItem('theme');
		if (storedTheme === 'dark') {
			root.classList.add('dark');
			setIsDark(true);
		} else {
			root.classList.remove('dark');
			setIsDark(false);
		}
	}, []);

	const toggleTheme = () => {
		const root = window.document.documentElement;
		if (isDark) {
			root.classList.remove('dark');
			localStorage.setItem('theme', 'light');
		} else {
			root.classList.add('dark');
			localStorage.setItem('theme', 'dark');
		}
		setIsDark(!isDark);
	};

	return (
		<button
			onClick={toggleTheme}
			aria-label='Toggle Dark Mode'
			className='fixed top-4 right-4 z-50 p-2 rounded-full bg-gray-200 dark:bg-gray-800 shadow-md transition hover:scale-105'>
			{isDark ? (
				<Sun className='w-5 h-5 text-yellow-500' />
			) : (
				<Moon className='w-5 h-5 text-gray-800' />
			)}
		</button>
	);
}
