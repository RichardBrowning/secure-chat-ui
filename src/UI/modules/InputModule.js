import React, { useEffect, useState, useRef } from 'react';
/*  need emoji, file, and send icons */
import { HappyOutline, DocumentAttachOutline, SendOutline } from 'react-ionicons';
import { Button, Form, InputGroup } from 'react-bootstrap';
import { sendMessage, sendFile } from '../../helpers/sendHelper';

function InputModule({ chatId }) {
    // monitors input text
    const [inputText, setInputText] = useState('');
    // monitors file Path of the attachment
    const [filePath, setFilePath] = useState(null);
    const [isTyping, setIsTyping] = useState(false);
    const [emojiDialog, setEmojiDialog] = useState(false);

    const fileInputRef = useRef(null);

    useEffect(() => {
        setInputText('');
    }, [chatId]);
    
    const selectFile = () => {
        // open file selection dialog
        fileInputRef.current.click();
    }
    const handleFileChange = (e) => {
        // pop-up file selection dialog
        const file = e.target.files[0];
        if (file) {
            setFilePath(URL.createObjectURL(file));
        }
    }
    const toggleEmojiDialog = () => {
        // if emoji dialog

    }

    const sendMessageOrFile = () => {
        // if file path is selected, send file
        if (filePath) {
            // send file
            sendFile(filePath).then((response) => {
                console.log(response);
                // reset file path
                setFilePath(null);
            });
        } else {
            // send message 
            if (inputText) {
                // send message
                sendMessage(inputText).then((response) => {
                    console.log(response);
                    // reset input text
                    setInputText('');
                });
            } else {
                alert('Please enter a message or select a file to send.');
            }
        }
    }
    
    return (
        <Form onSubmit={sendMessageOrFile}>
            <InputGroup>
                {/** Input field for text message */}
                <Form.Control
                    type="text"
                    placeholder="Type a message"
                    value={inputText}
                    onChange={(e) => setInputText(e.target.value)}
                    disabled={filePath ? true : false}
                />
                {/** Emoji Icon */}
                <Button variant='outline-secondary' onClick={toggleEmojiDialog}>
                    <HappyOutline color="white" height="25px" width="25px" title={'Emoji'} />
                </Button>
                {/** send button */}
                <Button variant="primary" type="submit" onClick={sendMessageOrFile}>
                    <SendOutline color="white" height="25px" width="25px" title={'Send'} />
                </Button>
            {/* <DocumentAttachOutline color={filePath ? "green" : "white"} height="25px" width="25px" title={'Attachment'} /> */}
            </InputGroup>
        </Form>
    );
}

export default InputModule;