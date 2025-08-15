import BusinessStrategyPlanning from "@/components/pages-components/BusinessStrategyPlanning";
import CtaSection from "@/components/pages-components/CtaSection";
import OperationsSystemsSetup from "@/components/pages-components/OperationsSystemsSetup";
import SalesProfitGrowthStrategy from "@/components/pages-components/SalesProfitGrowthStrategy";

export default function page() {
  return (
    <div>
      <BusinessStrategyPlanning />
      <OperationsSystemsSetup />
      <SalesProfitGrowthStrategy />
      <CtaSection />
    </div>
  );
}
