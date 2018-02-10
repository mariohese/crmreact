import React from 'react';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Modal} from 'react-bootstrap';

export default class VisitDetail extends React.Component{
	constructor(props) {
		super(props);
		
	}

	render(){

	var pf = this.props.pf
	var fa = this.props.fa
	if(fa==null){
		fa="Not fulfilled yet"
	}
	return(
		
		<Grid>
			<Modal.Title className="subtitulo">Info</Modal.Title>
			<Row>
				<Col xs={4} sm={4} md={4}>
				<strong> Planned for: </strong> {pf}
				</Col>
				<Col xs={4} sm={4} md={4}>
				<strong> Fulfilled at: </strong> {fa}
				</Col>
			</Row>
		</Grid>
	)
		

	}

}