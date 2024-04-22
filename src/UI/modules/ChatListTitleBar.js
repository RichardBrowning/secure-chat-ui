/** 
 * Message List Title Bar
*/
import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Container, Navbar, NavDropdown } from 'react-bootstrap';
import {THEME_COLOR} from '../../config';

function ChatListTitleBar({ chatIdList, selectedChatId }) {
    const isXs = useMediaQuery({ maxWidth: 767 });
    return (
        <Navbar className='p-1' style={{ backgroundColor: THEME_COLOR }}>
            <Container>
                <Navbar.Brand style={{ marginInline: '20px', fontWeight: 'bold', fontSize: '30px' }}>
                    Secure Chat
                </Navbar.Brand>
                {isXs ? (
                    <NavDropdown title="Chat List" id="basic-nav-dropdown">
                        {chatIdList.map((thisChatId, index) => (
                            <NavDropdown.Item action href={`/chat/${thisChatId}`} key={index} active={thisChatId === selectedChatId}>
                                {thisChatId}
                            </NavDropdown.Item>
                        ))}
                    </NavDropdown>
                ) : (null)}
            </Container>
        </Navbar>
    );
}

// original color #007bff

export default ChatListTitleBar;
