import { Puff } from "@agney/react-loading";
export default function Loader() {
  return (
    <div id="loading-page">
      <div id="puff-box">
        <Puff />
      </div>
      <h1>Loading...</h1>
    </div>
  );
}
