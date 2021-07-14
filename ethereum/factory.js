import web3 from './web3';
import compiledFactory from './build/CampaignFactory.json';

const instance = new web3.eth.Contract(
  JSON.parse(compiledFactory.interface),
  '0x7FA1EA63Ab1518b0aFFb928A8b9D46654D87f4F6'
);

export default instance;
