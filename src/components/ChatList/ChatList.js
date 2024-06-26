import React from 'react';
import { useMediaQuery } from 'react-responsive';
import './ChatList.css';
import { Container, ListGroup, Row } from 'react-bootstrap';
import ChatListTitleBar from '../../UI/modules/ChatListTitleBar';
import { BG_COLOR, THEME_COLOR } from '../../config';

function ChatList({ isXs, selectedChatId, setSelectedChatId }) {
	// parse url parameters
	const chatIdList = ["club"]; // TODO: Sample messages
	
	return (
		<Container fluid className="h-100 p-0" style={{backgroundColor: BG_COLOR}}>
			<Row style={{ backgroundColor: THEME_COLOR }}>
				<ChatListTitleBar chatIdList={chatIdList} selectedChatId={selectedChatId}/>
			</Row>
			{isXs ? null : (
				<ListGroup className='m-3'>
					{chatIdList.map((thisChatId, index) => (
						<ListGroup.Item id={thisChatId} variant='dark' action href={`/chat/${thisChatId}`} key={index} active={thisChatId === selectedChatId}>
							{thisChatId}
						</ListGroup.Item>
					))}
				</ListGroup>
			)}
		</Container>
	);
}

export default ChatList;

// <Link to={`/chat/${index}`} key={index} className="list-group-item list-group-item-action">