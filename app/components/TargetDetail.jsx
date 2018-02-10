import React from 'react';
import TargetElement from "./TargetElement.jsx"
import { Modal} from 'react-bootstrap';
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';

export default class TargetDetail extends React.Component{
	constructor(props) {
		super(props);
	}


	render(){

			
			if (this.props.alltg){
				var alltargets = this.props.alltg
		
			
			return(
				<Grid>
				<Modal.Title className="subtitulo">Targets</Modal.Title>
					{
						alltargets.map((target, index)=>{

							return(
								<Row>
								<li key={index} className="lista">
								
									<TargetElement target = {target} index = {index} />	
								
								</li>
								</Row>
							);

						}
						)

					}
				</Grid>);

			}

	}

}