'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';

export default function Dashboard() {
  const router = useRouter();

  // This is where you'd typically check if the user is authenticated
  useEffect(() => {
    // Simulate checking authentication
    const isAuthenticated = true; // Replace with actual auth check
    
    if (!isAuthenticated) {
      router.push('/signin');
    }
  }, [router]);

  return (
    <div className="min-h-screen p-8">
      <div className="max-w-7xl mx-auto">
        <h1 className="text-3xl font-bold mb-8">Welcome to your Dashboard</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Recent Invoices</h2>
            <p className="text-gray-600 dark:text-gray-300">No invoices yet</p>
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Tax Estimates</h2>
            <p className="text-gray-600 dark:text-gray-300">No estimates available</p>
          </div>
          
          <div className="p-6 bg-white dark:bg-gray-800 rounded-lg shadow">
            <h2 className="text-xl font-semibold mb-4">Recent Expenses</h2>
            <p className="text-gray-600 dark:text-gray-300">No expenses tracked</p>
          </div>
        </div>
      </div>
    </div>
  );
} 