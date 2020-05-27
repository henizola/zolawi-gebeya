import styled from 'styled-components';

export const Group = styled.div`
	position: relative;
	margin: 45px 0;
`;

export const FormInputField = styled.input`
	background: none;
	background-color: white;
	color: $sub-color;
	font-size: 18px;
	padding: 10px 10px 10px 5px;
	display: block;
	width: 100%;
	border: none;
	border-radius: 0;
	border-bottom: 1px solid black;
	margin: 25px 0;
	&:focus {
		outline: none;
	}
`;

export const FormInputLable = styled.label`
	color: $sub-color;
	font-size: 16px;
	font-weight: normal;
	position: absolute;
	pointer-events: none;
	left: 5px;
	top: 10px;
	transition: 300ms ease all;
	${FormInputField}&:focus {
		top: -14px;
		font-size: 18px;
		color: gray;
	}
	${FormInputField}&:focus {
		fill: rebeccapurple;
	}
	${({ length }) =>
		length &&
		`
        top: -14px;
  font-size: 18px;
  color: gray;
    `}
`;
