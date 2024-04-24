class RandomNumberGenerator {
	constructor(seed) {
		this.m = 0x80000000;
		this.a = 1103515245;
		this.c = 12345;
		this.state = 0;

		for (let i = 0; i < seed.length; i++) {
			const c = seed.charCodeAt(i);
			this.state += c * i;
		}
	}

	nextInt() {
		this.state = (this.a * this.state + this.c) % this.m;
		return Math.floor(this.state);
	}

	nextRange(start, end) {
		const range = end - start;
		return start + Math.floor(this.nextFloat() * range);
	}

	nextFloat() {
		return this.nextInt() / (this.m - 1);
	}
}

export default RandomNumberGenerator;