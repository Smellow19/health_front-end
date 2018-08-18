import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Link } from 'react-router-dom';



const linkStyle = {
	listStyle: 'none',
	display: 'inline-block',
	marginLeft: '5px',
	marginRight: '5px',
}


class Navigation extends React.Component {
	constructor(props) {
		super(props);

	}



	render() {

		return (
			<div>
				<h1> Navbar </h1>

				<ul>
					<li style = {linkStyle}> Link </li>
					<li style = {linkStyle}> Link</li>
					<li style = {linkStyle}> Link</li>
				</ul>

			</div>


		);

	}
}



export default Navigation;
