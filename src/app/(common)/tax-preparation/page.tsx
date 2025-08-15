import Testimonials from "@/components/Home/Testimonials";
import CommitmentToExcellence from "@/components/pages-components/CommitmentToExcellence";
import TaxPreparation from "@/components/pages-components/TaxPreparation";
import TaxServiceSpecialties from "@/components/pages-components/TaxServiceSpecialties";
import WhatDocuments from "@/components/pages-components/WhatDocuments";

export default function page() {
  return (
    <div className="">
      <TaxPreparation />
      <WhatDocuments />
      <TaxServiceSpecialties />
      <CommitmentToExcellence />
      <Testimonials />
    </div>
  );
}
