// LearnMore.jsx
import React from "react";
import AlgorithmOverview from "../components/AlgorithmOverview";
import MetricComparisonTable from "../components/MetricComparisonTable";
import SecurityFeature from "../components/SecurityFeature";

const LearnMore = () => (
  <div className="container mx-auto px-4 py-12 bg-gradient-to-b from-blue-50 to-indigo-100 min-h-screen">
    <AlgorithmOverview />
    <MetricComparisonTable />
    <SecurityFeature />
  </div>
);

export default LearnMore;
