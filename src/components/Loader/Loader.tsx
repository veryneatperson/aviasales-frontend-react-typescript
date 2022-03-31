import './Loader.scss';

export default function Loader() {
  return (
    <div className="loader">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="218"
        height="29"
        version="1"
        viewBox="0 0 457 60"
      >
        <rect width="100%" height="100%" fill="#F3F7FA" />
        <g>
          <circle cx="-31" cy="30" r="30" fill="#2196f3" />
          <circle cx="-97" cy="30" r="24" fill="#4dabf5" />
          <circle cx="-163" cy="30" r="19" fill="#78bff8" />
          <circle cx="-229.5" cy="30.5" r="13.5" fill="#cfe8fc" />
          <circle cx="-295" cy="31" r="11" fill="#e5f3fe" />
          <animateTransform
            attributeName="transform"
            calcMode="discrete"
            dur="1920ms"
            repeatCount="indefinite"
            type="translate"
            values="61 0;127 0;193 0;259 0;325 0;391 0;457 0;523 0;589 0;655 0;721 0;787 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;"
          />
        </g>
        <g>
          <circle cx="488" cy="30" r="30" fill="#2196f3" />
          <circle cx="554" cy="30" r="24" fill="#4dabf5" />
          <circle cx="620" cy="30" r="19" fill="#78bff8" />
          <circle cx="686.5" cy="30.5" r="13.5" fill="#cfe8fc" />
          <circle cx="753" cy="31" r="11" fill="#e5f3fe" />
          <animateTransform
            attributeName="transform"
            calcMode="discrete"
            dur="1920ms"
            repeatCount="indefinite"
            type="translate"
            values="0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;0 0;-61 0;-127 0;-193 0;-259 0;-325 0;-391 0;-457 0;-523 0;-589 0;-655 0;-721 0;-787 0;"
          />
        </g>
      </svg>
    </div>
  );
}
