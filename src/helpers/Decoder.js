class Decoder {
	constructor(buffer) {
		this.buffer = buffer;
		this.at = 0;
	}

	getInt() {
		return this.buffer[this.at++];
	}

	getString() {
		const length = this.buffer[this.at++];
		let s = '';
		for (let i = 0; i < length; i++) {
			s += String.fromCharCode(this.buffer[this.at++]);
		}
		return s;
	}
}

export default Decoder;