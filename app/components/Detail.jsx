import React from 'react';
import VisitDetail from "./VisitDetail.jsx"
import TargetDetail from "./TargetDetail.jsx"
import CustomerDetail from "./CustomerDetail.jsx"
import SalesmanDetail from "./SalesmanDetail.jsx"
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Modal} from 'react-bootstrap';



export default class Detail extends React.Component{


	render(){

			if(this.props.visita){

				var plannedFor = this.props.visita.plannedFor
				var fulfilledAt = this.props.visita.fulfilledAt

				var alltargets = this.props.visita.Targets

				var customer = this.props.visita.Customer

				var salesman = this.props.visita.Salesman


			
			
			return(
				<Grid>

					<Row>
						<VisitDetail pf={plannedFor} fa={fulfilledAt} />
					</Row>
					<br/>
					<Row>
					<TargetDetail alltg = {alltargets}/>
					</Row>
					<br/>
					<Row>
						<Col xs={4} sm={4} md={4}>
						<Modal.Title className="subtitulo">Customer</Modal.Title>

							<CustomerDetail cust={customer}/>
						</Col>
						<Modal.Title className="subtitulo">Salesman</Modal.Title>

						<Col xs={4} sm={4} md={4}>

							<SalesmanDetail sales={salesman}/>
						</Col>
					</Row>
				</Grid>

				);

			}
			else {return <h1>Click a visit for watching its details</h1>}
	}



}