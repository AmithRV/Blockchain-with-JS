class Block {
  constructor(index = '', timeStamp, data, previousHash = '') {
    this.index = index;
    this.timeStamp = timeStamp;
    this.data = data;
    this.previousHash = previousHash;
    this.hash = this.calculateHash();
    this.nonce = 0;
  }

  calculateHash() {
    return CryptoJS.SHA256(
      this.index +
        this.timeStamp +
        this.previousHash +
        JSON.stringify(this.data) +
        this.nonce
    ).toString();
  }

  mineBlock(difficulty) {
    console.log('-----------------------------------------------');
    console.log('mining...');

    // While generating the new hash we can only update the nonce,
    // since all other attributes are details of the block, so we can't change it

    const targetPrefix = '0'.repeat(difficulty);

    while (this.hash.substring(0, difficulty) !== targetPrefix) {
      this.hash = this.calculateHash();
      this.nonce++;
    }

    console.log('block mined : ', this.hash);
    console.log('-----------------------------------------------');
  }
}

class Blockchain {
  constructor() {
    this.difficulty = 4;
    this.chain = [this.createGenesisBlock()];
  }

  createGenesisBlock() {
    // The index value is given to Genesis block manually
    return new Block(0, '09/04/2024', 'Genesis block', '0');
  }

  getLatestBlock() {
    return this.chain[this.chain.length - 1];
  }

  addBlock(newBlock) {
    newBlock.index = this.chain.length;
    newBlock.previousHash = this.getLatestBlock().hash;
    // newBlock.hash = newBlock.calculateHash();
    newBlock.mineBlock(this.difficulty);
    this.chain.push(newBlock);
  }

  isChainValid() {
    for (let i = 1; i < this.chain.length; i++) {
      const currentBlock = this.chain[i];
      const previousBlock = this.chain[i - 1];

      if (currentBlock.hash !== currentBlock.calculateHash()) {
        return false;
      }

      if (currentBlock.previousHash !== previousBlock.hash) {
        return false;
      }

      return true;
    }
  }
}

const arCoin = new Blockchain();
arCoin.addBlock(new Block('', '09-04-2024', { amount: 10 }));
window.parent.createElement(arCoin);

window.addBlock = () => {
  const date = new Date();

  arCoin.addBlock(
    new Block('', date, {
      amount: arCoin.getLatestBlock().data.amount - 1,
    })
  );
  window.parent.appendElement(arCoin.getLatestBlock(), arCoin);
};
