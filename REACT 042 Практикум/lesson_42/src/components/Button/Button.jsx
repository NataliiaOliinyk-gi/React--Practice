import styled from "@emotion/styled";

const Button = styled.button`
background-color: red;
border-radius: 6px;
text-transform: uppercase;
border: 1px solid red;
padding: 10px 20px;
cursor: pointer;
color: #fff;

:hover {
background-color: #fff;
color: red;
border: 1px solid red;
}
`

export default Button;

// const Button = ()=>{
//     return (
//         <button></button>
//     )
// };

// export default Button;