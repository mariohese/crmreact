import React from 'react';
import './../assets/scss/main.scss';

import VisitList from "./VisitList.jsx"
import Detail from "./Detail.jsx"
import { Col } from 'react-bootstrap';
import { Row } from 'react-bootstrap';
import { Grid } from 'react-bootstrap';
import { Modal} from 'react-bootstrap';
import axios from 'axios';

export default class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			visits: [],
			visita: 0,
		};
		this.appClick = this.appClick.bind(this)
	}


	appClick(index){
		let visit = this.state.visits[index]

		this.setState({

			visita: visit

		});
	}



	componentDidMount() {
            var x = location.search;
            console.log(x)
            axios.get('https://dcrmt.herokuapp.com/api/visits/flattened?token=77b8e332ce25369a3285&' + x.substring(1))
                .then(function(response){
                    this.setState({visits: response.data});

                }.bind(this));

	}


	render() {

		var listavisita = this.state.visits
		console.log(listavisita)
		var visita = this.state.visita

		return (
			<Grid>
				<Modal.Title className="titulo">Visits</Modal.Title>
				<Row>
					<Col className="listavisitas" xs={4} md={4} sm={4}>
					<VisitList visits={listavisita} appClick={this.appClick}/>
					</Col>
					<Col className="detallesvisita" xs={8} md={8} sm={8}>
					<Detail visita={visita}/>
					</Col>
				</Row>
			</Grid>

			);
		}
}

