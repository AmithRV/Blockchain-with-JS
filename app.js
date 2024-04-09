window.createElement = (coin) => {
  const listDiv = document.getElementById('list');
  coin.chain.forEach((item) => {
    const itemaDiv = document.createElement('div');
    itemaDiv.id = 'parent';

    const indexSpan = document.createElement('span');
    indexSpan.textContent = `___index : ${item.index}`;

    const timeStamp = document.createElement('span');
    timeStamp.textContent = `timeStamp : ${item.timeStamp}`;

    const hash = document.createElement('span');
    hash.textContent = `____hash : ${item.hash}`;

    const prevHash = document.createElement('span');
    prevHash.textContent = `prevHash : ${item.previousHash}`;

    const data = document.createElement('span');
    data.textContent = ` ____data : ${JSON.stringify(item.data).toString()}`;

    itemaDiv.appendChild(indexSpan);
    itemaDiv.appendChild(timeStamp);
    itemaDiv.appendChild(hash);
    itemaDiv.appendChild(prevHash);
    itemaDiv.appendChild(data);

    itemaDiv.classList.add('box');
    listDiv.appendChild(itemaDiv);
  });
};

window.appendElement = (coin, arCoin) => {
  console.log('arCoin : ', arCoin);
  const listDiv = document.getElementById('list');
  const item = coin;

  const itemaDiv = document.createElement('div');

  const indexSpan = document.createElement('span');
  indexSpan.textContent = `___index : ${item.index}`;

  const timeStamp = document.createElement('span');
  timeStamp.textContent = `timeStamp : ${item.timeStamp}`;

  const hash = document.createElement('span');
  hash.textContent = `____hash : ${item.hash}`;

  const prevHash = document.createElement('span');
  prevHash.textContent = `prevHash : ${item.previousHash}`;

  const data = document.createElement('span');
  data.textContent = ` ____data : ${JSON.stringify(item.data).toString()}`;

  itemaDiv.appendChild(timeStamp);
  itemaDiv.appendChild(indexSpan);
  itemaDiv.appendChild(hash);
  itemaDiv.appendChild(prevHash);
  itemaDiv.appendChild(data);

  itemaDiv.classList.add('box');
  listDiv.appendChild(itemaDiv);
};
