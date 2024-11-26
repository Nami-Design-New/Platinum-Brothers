import HowItWorks from "../components/employers/HowItWorks";
import HowWeDoIT from "../components/employers/HowWeDoIT";
import Why from "../components/employers/Why";
import PageHeader from "../ui/layout/PageHeader";

export default function Employers() {
  return (
    <>
      <PageHeader title="Employers" />
      <HowItWorks />
      <Why />
      <HowWeDoIT/>
    </>
  );
}
