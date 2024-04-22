import React from "react";
import "./MessageBubble.css";

function MessageBubble({ messageText, messageFile, isFirstPerson }) {
    return (
        <div className={(isFirstPerson?"ms-auto rounded-top-4 rounded-start-4 isFirstPerson":"rounded-top-4 rounded-end-4")+" m-1 py-2 px-3 messageMainContainer"} >
            <p>{messageText}</p>
                {/** TODO: make a file receiver */}
                {messageFile && (
                    <a href={messageFile} target="_blank" rel="noreferrer" download={true}>
                        Download File
                    </a>
                )}
        </div>
        // <div className="d-flex justify-content-start my-2">
        //     <div className="bg-light rounded p-2">
        //         
        //     </div>
        // </div>
    );
}

export default MessageBubble;