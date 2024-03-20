import "../SectionDetail.scss";
import bukaLogo from "../../assets/buka.jpeg";

export default function WorkExp1() {
  return (
    <div className="section-detail work-section">
      <div className="company-title">
        <img src={bukaLogo} alt="" />
        <div className="company-subtitle">
          <h1>Bukalapak</h1>
          <h2>Software Engineer</h2>
        </div>
      </div>
      <div className="features">
        <h3>Trust-and-Fraud</h3>
        <h3>Micro-services</h3>
        <h3>Go</h3>
        <h3>Kubernetes</h3>
        <h3>Docker</h3>
        <h3>Terraform</h3>
      </div>
    </div>
  );
}
