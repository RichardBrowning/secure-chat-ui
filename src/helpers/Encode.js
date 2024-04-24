class Encoder {
	constructor() {
		this.buffer = [];
		this.position = 0;
	}

	getPosition() {
		return this.position;
	}

	addInt(i) {
		this.buffer[this.position++] = i;
	}

	addString(s) {
		this.buffer[this.position++] = s.length;
		for (let i = 0; i < s.length; i++) {
			this.buffer[this.position++] = s.charCodeAt(i);
		}
	}

	finish() {
		return this.buffer;
	}
}

export default Encoder;