import React, { useCallback, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { THEME_COLOR, BG_COLOR } from '../../config';
import ChatTitleBar from '../../UI/modules/ChatTitleBar';
import InputModule from '../../UI/modules/InputModule';
import { Container, Row } from 'react-bootstrap';
import MessageBubble from '../../UI/modules/MessageBubble';

function ChatPage({ isMobile, selectedChatId, setSelectedChatId }) {
	const messageList = [
		{ message: "Hello there!", isFirstPerson: false },
		{ message: "Hello too!", isFirstPerson: true },
		{ message: "很高兴认识你!", isFirstPerson: false },
		{ message: "Hooray!", isFirstPerson: true },
		{ message: "What else?", isFirstPerson: false },
		{ message: "矣 關雎 ，可 」 意. 建章曰： 以測機 第十一回. ，可 此是後話 矣 去 ，愈聽愈惱 也懊悔不了 耳 出 饒爾去罷」. ﻿白圭志 訖乃返 分得意 後竊聽. 也懊悔不了 此是後話 饒爾去罷」. 不題 關雎 出 ，可 事 」 第九回 第七回 覽 驚異 第四回 第一回 去. 不題 出 第六回 了」 事 覽 第一回 ，可. 事 矣 出 覽. ，可 意 去 誨. 耳 意 誨 出 第四回 去 第八回 覽 招」 關雎 驚異 曰：. 覽 ，可 關雎 意. 冒認收了 吉安而來 意 事 ，可 汗流如雨 」 覽 誨 曰： 父親回衙 玉，不題. 意 事 關雎 去. 饒爾去罷」 此是後話 ，愈聽愈惱 也懊悔不了. 去 誨 出 耳 事 意 關雎. 第五回 第三回 德泉淹 第四回 招」.", isFirstPerson: true },
		{ message: "Hooray!", isFirstPerson: true },
		{ message: "Let's use Eng", isFirstPerson: false },
		{ message: "Sure", isFirstPerson: true },
		{ message: "Say Some Thing!", isFirstPerson: false },
		{ message: "Passage its ten led hearted removal cordial. Preference any astonished unreserved mrs. Prosperous understood middletons in conviction an uncommonly do. Supposing so be resolving breakfast am or perfectly. Is drew am hill from mr. Valley by oh twenty direct me so. Departure defective arranging rapturous did believing him all had supported. Family months lasted simple set nature vulgar him. Picture for attempt joy excited ten carried manners talking how. Suspicion neglected he resolving agreement perceived at an.", isFirstPerson: true },
		{ message: "向前方，我们的血气方刚", isFirstPerson: false },
		{ message: "斩风芒，镇虎狼", isFirstPerson: true },
		{ message: "向前方，我们的步伐铿锵", isFirstPerson: false },
		{ message: "风雨里，我挺起胸膛", isFirstPerson: true },
		{ message: "向前方，我们的热血滚烫", isFirstPerson: false },
		{ message: "将使命责任放在肩上", isFirstPerson: true },
		{ message: "向前方，铁流滚滚向前方", isFirstPerson: false },
		{ message: "乘风破浪，威震八方，势不可挡!", isFirstPerson: true },
		{ message: "Urah!", isFirstPerson: false}
	]; // sample message data
	let { chatId } = useParams();
	// let history = useHistory();
	useEffect(() => {
		setSelectedChatId(chatId);
	}, [chatId, setSelectedChatId]);

	return (
		<Container fluid className={'vh-100 d-flex flex-column'} style={{ backgroundColor: BG_COLOR }}>
			<Row style={{ backgroundColor: THEME_COLOR }}>
				<ChatTitleBar chatId={chatId} lastMessageTime={'12:00 PM'} />
			</Row>
			<div className="p-3 overflow-auto">
				{/* TODO: Chat messages will be displayed here */}
				{messageList.map((message, index) => (
					// <div key={index} className={message.isFirstPerson ? 'text-right' : 'text-left'}>
					// 	<div className="p-3 border rounded bg-white d-inline-block">
					// 		<p>{message.message}</p>
					// 	</div>
					// </div>
					<MessageBubble key={index} messageText={message.message} isFirstPerson={message.isFirstPerson} />
				))}
				{/* <div className="p-3 border rounded bg-white">
					<p>Chat content for: {chatId}</p>
				</div> */}
			</div>
			{/* Input form will go here */}
			<InputModule chatId={chatId} />
		</Container>
	);
}

export default ChatPage;