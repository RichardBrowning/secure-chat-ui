/** 
 * Chat Page Title Bar
*/
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Navbar, Nav, Col, Row, Button } from 'react-bootstrap';
import { ArrowBackOutline, ChatbubblesOutline } from 'react-ionicons';
import {THEME_COLOR} from '../../config';
import { useMediaQuery } from 'react-responsive';

function ChatTitleBar({ chatId, lastMessageTime }) {
	const isXs = useMediaQuery({ maxWidth: 767 });
	// let { chatId } = useParams();
	let navigate = useNavigate();

	return (
		<Navbar className='p-0' bg="dark" variant="dark" style={{ backgroundColor: THEME_COLOR }}>
			{isXs ? (null) : (
				<Nav.Link onClick={() => navigate('/')}>
					<ArrowBackOutline color="white" height="25px" width="25px" title={'Back'} style={{ margin: '15px' }} />
				</Nav.Link>
			)}
			<Navbar.Brand className="mx-auto">
				<Row>
					<Col xs={2} className='my-auto'>
						<ChatbubblesOutline color="white" title={'Chat'} height="25px" width="25px" />
					</Col>
					<Col xs={8}>
						<div style={{ fontSize: '20px', fontWeight: 'bold', color:"lightgray", marginBottom: '5px'}}>{ chatId }</div>
						<div style={{ fontSize: '14px', color:"darkgray"}}>last message at { lastMessageTime }</div>
					</Col>
					<Col xs={2} className='my-auto'>
						<Button id="join" variant="primary" title='Join' type='submit' >Join</Button>
					</Col>
				</Row>
				
			</Navbar.Brand>
		</Navbar>
	);
}

// original color #007bff

export default ChatTitleBar;
