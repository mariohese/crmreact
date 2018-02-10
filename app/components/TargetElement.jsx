import React from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';



export default class TargetElement extends React.Component{
	constructor(props) {
		super(props);
	}

	


	render(){

	var target = this.props.target
	if (target.success ==false){
		var success = "Pending"
	}
	else {
		var success = "Succeded"
	}


	return(
		<Grid>
			<Row>
				<Col xs={3} sm={3} md={3}>
				<strong> {target.Company.name} </strong>
				</Col>
				<Col xs={3} sm={3} md={3}>
				{target.TargetType.name}
				</Col>
				<Col xs={2} sm={2} md={2}>
				{success}
				</Col>
			</Row>
		</Grid>
		
	)
		

	}

}