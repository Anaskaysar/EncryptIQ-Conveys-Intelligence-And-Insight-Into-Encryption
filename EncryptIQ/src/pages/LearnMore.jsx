//learmore.jsx

import AlgorithmOverview from "../components/AlgorithmOverview";
import MetricComparisonTable from "../components/MetricComparisonTable";
import RealWorldUseCases from "../components/RealWorldUseCases";
import SecurityFeature from "../components/SecurityFeature";

const LearnMore = () => (
  <div className="container mx-auto px-4 py-1 mt-2">
    <AlgorithmOverview />
    <MetricComparisonTable />
    <SecurityFeature />
    <RealWorldUseCases/>
  </div>
);

export default LearnMore;
