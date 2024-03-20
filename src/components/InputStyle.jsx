// import { styled } from "styled-components";

// const Label = styled.label`
//   display: block;
//   margin-bottom: 0.5rem;
//   font-size: 0.75rem;
//   font-weight: 700;
//   letter-spacing: 0.1em;
//   text-transform: uppercase;
//   color: ${({ $invalid }) => ($invalid ? "#f87171" : "#6b7280")};
// `;

// const Input = styled.input`
//   width: 100%;
//   padding: 0.75rem 1rem;
//   line-height: 1.5;
//   background-color: ${(props) => (props.$invalid ? "#fed2d2" : "#d1d5db")};
//   color: ${(props) => (props.$invalid ? "#ef4444" : "#374151")};
//   border: 1px solid ${(props) => (props.$invalid ? "#f73f3f" : "transparent")};
//   border-radius: 0.25rem;
//   box-shadow: 0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06);
// `;

export default function Input({ label, invalid, ...props }) {
  let labelBaseClass = "block mb-2 text-xs font-bold tracking-wide uppercase";
  let inputBaseClass = "w-full px-3 py-2 leading-tight  border rounded shadow";

  if (invalid) {
    labelBaseClass += " text-red-500";
    inputBaseClass += " text-red-500 bg-red-100 border-red-300";
  } else {
    labelBaseClass += " text-stone-300";
    inputBaseClass += " text-gray-700 bg-stone-300";
  }

  return (
    <p>
      <label className={labelBaseClass}>{label}</label>
      <input className={inputBaseClass} {...props} />
    </p>
  );
}
