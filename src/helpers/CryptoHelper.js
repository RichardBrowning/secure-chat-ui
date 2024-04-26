/**
 * Encrypt packet and decrypt packet helper class
 */
import RandomNumberGenerator from './RandomNumberGenerator';

class CryptoHelper {
    constructor(seed) {
        this.generator = new RandomNumberGenerator(seed = seed);

        // create encryptor
        this.encryptor = new Array(256);

        for (let i = 0; i < 256; i++) {
            this.encryptor[i] = i;
        }
        for (let i = 0; i < 1000; i++) {
            let pos_1 = this.generator.nextRange(1, 256);
            let pos_2 = this.generator.nextRange(1, 256);
            let int_1 = this.encryptor[pos_1];
            let int_2 = this.encryptor[pos_2];
        
            this.encryptor[pos_2] = int_1;
            this.encryptor[pos_1] = int_2;
        }

        // create decryptor
        this.decryptor = new Array(256);
        for (let i = 0; i < 256; i++) {
            let num = this.decryptor[i];
            this.decryptor[num] = i;
        }
    }

    encrypt_packet(packet) {
        const new_ = [];
        for (let i = 0; i < packet.length; i++) {
            new_[i] = this.encryptor[packet[i]];
        }
        return new_;
    }

    decrypt_packet(packet) {
        const new_ = [];
        for (let i = 0; i < packet.length; i++) {
            new_[i] = this.decryptor[packet[i]];
        }
        return new_;
    }
}

export default CryptoHelper;