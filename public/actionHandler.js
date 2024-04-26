const GROUP = {"groupId": "club", "password": "club"}

window.onload = function() {
    const joinButton = document.getElementById('join');
    const sendButton = document.getElementById('send');

    if (joinButton) {
        joinButton.addEventListener("click", function() {
            ui.join_group(GROUP.groupId, GROUP.password);
            console.log("joined");
        });
    }

    if (sendButton) {
        sendButton.addEventListener("click", function() {
            console.log("sent");
            // if nothing in the input field, 
            if (!sessionStorage.getItem('messageList')){
                //set a empty JSON string
                sessionStorage.setItem('messageList', JSON.stringify([]));
            }
            const messageListString = sessionStorage.getItem('messageList');
            var messageList = JSON.parse(messageListString);

            // get the input text
            const inputText = sessionStorage.getItem('inputText');
            // if inputText is not empty string
            if (inputText){
                ui.send_group_message(GROUP.groupId, inputText)
                // create json and append to the messageList
                messageList.push({ message: inputText, isFirstPerson: true });
                // store the updated messageList
                sessionStorage.setItem('messageList', JSON.stringify(messageList));
                // reset 
                sessionStorage.setItem('inputText', '');
            }
        });
    }
};

function joinGroup(gId, passwd){
    // call ui method
    ui.joinGroup(gId, passwd);
}