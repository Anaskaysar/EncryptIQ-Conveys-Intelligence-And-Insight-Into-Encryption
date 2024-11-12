// MetricComparisonTable.jsx
import React from 'react';
import SectionHeader from './SectionHeader';

const MetricComparisonTable = () => (
  <div>
    <SectionHeader title="Performance Metrics" subtitle="Compare encryption times, key sizes, etc." />
    <table className="min-w-full bg-white rounded-lg shadow-md my-4">
      <thead className="bg-gradient-to-r from-purple-500 to-pink-500 text-white">
        <tr>
          <th className="px-4 py-2">Metric</th>
          <th className="px-4 py-2">AES</th>
          <th className="px-4 py-2">RSA</th>
        </tr>
      </thead>
      <tbody>
        <tr className="bg-blue-50 hover:bg-blue-100 transition duration-300">
          <td className="border px-4 py-2">Encryption Time</td>
          <td className="border px-4 py-2">Fast</td>
          <td className="border px-4 py-2">Slower</td>
        </tr>
        <tr className="bg-white hover:bg-blue-100 transition duration-300">
          <td className="border px-4 py-2">Key Size Options</td>
          <td className="border px-4 py-2">128, 192, 256 bits</td>
          <td className="border px-4 py-2">1024, 2048, 4096 bits</td>
        </tr>
      </tbody>
    </table>
  </div>
);

export default MetricComparisonTable;
