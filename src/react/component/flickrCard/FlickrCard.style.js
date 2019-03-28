import styled from 'styled-components'


const StyledCard = styled.article`
	border: 2px solid #000;
	background-color: #e6e6e6;
	min-height: 100%;
	position: relative;
	padding: 0 10px;
	display: flex;
	flex-direction: column;
`

const CardImage = styled.figure`
	background-position: 50%;
	background-repeat: no-repeat;
	background-size: cover;
	border: 2px solid #000;
	margin: 10px 0;
`

const CardHeader = styled.header`
`

const CardBody = styled.main`
	flex-grow: 1;
`

const CardFooter = styled.footer`
`

const ClipText = styled.a`
	text-overflow: ellipsis;
	overflow: hidden;
	display: inline-block;
	white-space: nowrap;
}
`

export {
	StyledCard,
	CardImage,
	CardHeader,
	CardBody,
	CardFooter,
	ClipText
}
