import Head from 'next/head';
import PricingTable from '../components/PricingTable';
import DarkModeToggle from '../components/DarkModeToggle';

export default function Home() {
  return (
    <>
      <Head>
        <title>Pricing Table</title>
      </Head>
      <main className="bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors">
        <DarkModeToggle />
        <PricingTable />
      </main>
    </>
  );
}