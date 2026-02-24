import './LoadingSpinner.css';

export default function LoadingSpinner() {
  return (
    <div className="spinner-wrapper">
      <div className="spinner">
        <div className="spinner-ring" />
        <span className="spinner-text">ProVizion</span>
      </div>
    </div>
  );
}
