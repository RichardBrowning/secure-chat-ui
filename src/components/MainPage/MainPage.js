import React, { useEffect, useRef, useState } from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, Row, Col } from 'react-bootstrap';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import ChatList from '../ChatList/ChatList';
import ChatPage from '../ChatPage/ChatPage';
import { BG_COLOR } from '../../config';


// buildCode is parsed from the sessionStorage in previous level
function MainPage() {
	const [selectedChatId, setSelectedChatId] = useState(null);
	const isXs = useMediaQuery({ maxWidth: 767 });

	useEffect(()=>{
		
	});

	return (
		<Router>
			<Container fluid style={{backgroundColor: BG_COLOR}}>
				{isXs ? (
					<Col className='vh-100 d-flex flex-column'>
						<Row sm={12}>
							<Routes>
								<Route path="*" element={<ChatList isXs={isXs} selectedChatId={selectedChatId} setSelectedChatId={setSelectedChatId}/>} />
							</Routes>
						</Row>
						<Row sm={12}>
							<Routes>
								<Route path="chat/:chatId" element={<ChatPage isXs={isXs} selectedChatId={selectedChatId} setSelectedChatId={setSelectedChatId}/>} /> 
							</Routes>
						</Row>
					</Col>
				 ) : (
					<Row className="vh-100">
						<Col md={3} className="px-0 border-right">
							<Routes>
								<Route path="*" element={<ChatList isXs={isXs} selectedChatId={selectedChatId} setSelectedChatId={setSelectedChatId}/>} />
							</Routes>
						</Col>
						<Col md={9} className="px-0 d-md-block">
							<Routes>
								<Route path="chat/:chatId" element={<ChatPage isXs={isXs} selectedChatId={selectedChatId} setSelectedChatId={setSelectedChatId}/>} /> 
							</Routes>
						</Col>
					</Row>
				)}
			</Container>
		</Router>
	);
}

const delay = (ms) => {
	return new Promise((resolve, reject) => setTimeout(resolve, ms))
};

export default MainPage;