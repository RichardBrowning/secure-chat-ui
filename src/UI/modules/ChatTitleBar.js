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
					<Col xs={10}>
						<div style={{ fontSize: '20px', fontWeight: 'bold', color:"lightgray", marginBottom: '5px'}}>{ chatId }</div>
						<div style={{ fontSize: '14px', color:"darkgray"}}>last message at { lastMessageTime }</div>
					</Col>
				</Row>
				<Button id="connect" variant="outline" title='connect' type='submit' >Connect</Button>
				<Button id="disconnect" variant="outline" title='disconnect' type='submit' disabled >Disconnect</Button>
			</Navbar.Brand>
		</Navbar>
	);
}

// original color #007bff

export default ChatTitleBar;
