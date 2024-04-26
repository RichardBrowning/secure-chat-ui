/**
 * UI handler and its WebSocketHelper
 */
import { Client } from '@stomp/stompjs';
import { WebSocket } from 'ws';

import CryptoHelper from "./CryptoHelper";
import Decoder from "./Decoder";
import Encoder from "./Encode";

Object.assign(global, { WebSocket });

var seed = null;
var token = null;

const delay = (ms) => {
	return new Promise((resolve, reject) => setTimeout(resolve, ms))
};

class UIHandler {
	constructor(seed) {
		// INPROVE: this seed is a global var
		this.websockethelper = new WebSocketHelper(seed);
        this.encoder = new Encoder();
	}

	register(username) {
		this.encoder.addInt(1);
		this.encoder.addString(username);
		this.websockethelper.send(this.encoder.finish());
	}

	send_private_message(recipient_id, message) {
		this.encoder.addInt(3);
		this.encoder.addString(token);
		this.encoder.addInt(1);
		this.encoder.addString(recipient_id);
		this.encoder.addString(message);
		this.websockethelper.send(this.encoder.finish());
	}

	send_group_message(recipient_id, message) {
		this.encoder.addInt(3);
		this.encoder.addString(token);
		this.encoder.addInt(2);
		this.encoder.addString(recipient_id);
		this.encoder.addString(message);
		this.websockethelper.send(this.encoder.finish());
	}

	create_group(name, password) {
		this.encoder.addInt(4);
		this.encoder.addString(token);
		this.encoder.addString(name);
		this.encoder.addString(password);
		this.websockethelper.send(this.encoder.finish());
	}

	join_group(group_id, password) {
		this.encoder.addInt(5);
		this.encoder.addString(token);
		this.encoder.addString(group_id);
		this.encoder.addInt(1);
		this.encoder.addString(password);
		this.websockethelper.send(this.encoder.finish());
	}

	leave_group(group_id) {
		this.encoder.addInt(5);
		this.encoder.addString(token);
		this.encoder.addString(group_id);
		this.encoder.addInt(2);
		this.websockethelper.send(this.encoder.finish());
	}

}

class WebSocketHelper {
	constructor(seed, serverUrl = 'ws://localhost:8080/websocket') {
		this.serverUrl = serverUrl;
		this.cryptoHelper = new CryptoHelper(seed);
		this.users = {};
		this.groups = {};
		
		this.stompClient = new Client({
			brokerURL: serverUrl,
			onConnect: (frame) => {
				console.log("connected to the server");
				this.stompClient.subscribe("/user/queue/listen", (packet) =>{
					packet = Array.from(packet._binaryBody);
					this.parse_packet(this.cryptoHelper.decrypt_packet(packet));
				});
			},
			onWebSocketError: (error) => {
				console.error("Websocket error: ", error);
			},
			onStompError: (frame) => {
				console.error("Stomp error: ", frame.headers.message);
			},
		});

		console.log("Connecting to the server");
		this.stompClient.activate();
	}

	parse_packet = (packet) => {
		const decoder = new Decoder(packet);
		const header = decoder.getInt();
		var type;
		console.log(header);
		switch (header) {
			case 1: // get token
				token = decoder.getString();
				console.log(token);
				// get group ids and names
				// call ui
				break;

			case 2: // alert
				var alert = decoder.getString();
				// alert window with message
				// call ui
				break;

			case 3:
				type = decoder.getInt();
				switch (type) {
					case 1: // private message
						var sender_id = decoder.getString();
						var sender_name = decoder.getString();
						var message = decoder.getString();
						// call ui
						break;
					case 2: // group message
						var group_id = decoder.getString();
						var sender_id = decoder.getString();
						var message = decoder.getString();
						// call ui
						break;
				}
				
				break;

			case 4:
				var group_id = decoder.getString();
				var group_name = decoder.getString();
				var updates = decoder.getInt();
				for (let i = 0; i < updates; i++) {
					switch (decoder.getInt()) {
						case 0: // add user to group
							var user_id = decoder.getInt();
							var user_id = decoder.getInt();
							// call ui
							break;
						case 1: // delete user from group
							var user_id = decoder.getInt();
							// call ui
							break;
					}
				}
				
				break;
		}
	}

	disconnect() {
		this.stompClient.deactivate();
		console.log("Disconnected");
	}

	send(packet) {
		const encrypted = this.cryptoHelper.encrypt_packet(packet);
		console.log(encrypted);
		this.stompClient.publish({
			destination: "/app/endpoint",
			binaryBody: encrypted
		});
		// console.log(this.stompClient.brokerURL);
	}

}

export default UIHandler;