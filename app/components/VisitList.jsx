import React from 'react';
import VisitListElement from "./VisitListElement.jsx"

export default class VisitList extends React.Component{
	constructor(props) {
		super(props);
		this.visitClick = this.visitClick.bind(this);
	}


	visitClick(index){
		
		this.props.appClick(index)

	}

	render(){

			var visitlist = this.props.visits
			
			return(
				<ul>
					{
						visitlist.map((visita, index)=>{

							return(
								
								<li key={index} className="lista">
								
									<VisitListElement visita = {visita} index = {index} visitClick = {this.visitClick}/>	
								
								</li>

							);

						}
						)

					}
				</ul>);


	}

}