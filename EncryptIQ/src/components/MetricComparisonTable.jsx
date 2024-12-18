// MetricComparisonTable.jsx
import SectionHeader from './SectionHeader';

const MetricComparisonTable = () => (
  <div className="mt-8">
    <SectionHeader title="Performance Metrics" />
    <table className="min-w-full bg-white rounded-lg shadow-md">
      <thead className="bg-gradient-to-r from-blue-500 to-green-500 text-white">
        <tr>
          <th className="px-4 py-3">Metric</th>
          <th className="px-4 py-3">AES</th>
          <th className="px-4 py-3">RSA</th>
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
        {/* Add more rows as needed */}
      </tbody>
    </table>
  </div>
);

export default MetricComparisonTable;
