const basePath = process.cwd();
const { MODE } = require(`${basePath}/constants/blend_mode.js`);
const { NETWORK } = require(`${basePath}/constants/network.js`);

const network = NETWORK.eth;

// General metadata for Ethereum
const namePrefix = "小动物乐园";
const description = "一群可爱的小动物";//可以随便修改
const baseUri = "ipfs://QmRgpxQii6Mxm33joYPrVcPcGj9GGmqTpiw2qXT7E4qmxM";//node utils /updateBaseUri.js

const solanaMetadata = {
  symbol: "AG",
  seller_fee_basis_points: 1000, // Define how much % you want from secondary market sales 1000 = 10%
  external_url: "https://www.youtube.com/channel/UCPMvS2rBDyTxQKHyBeiHvKg",
  creators: [
    {
      address: "0x65BCa6e57210d8eb7f7754AC28C6725fC60fe248",
      share: 100,
    },
  ],
};

// 啦啦啦
const layerConfigurations = [
  {
    growEditionSizeTo: 5,//修改生成的图片数量
    layersOrder: [
      { name: "Background" },//可以在后面多加一些{name: ""}
  //layer 中的#n 代表稀有度为n  a#10 b#10 c#10 d#10 中为1/4 
  
    //layer的顺序可以修改 
      { name: "Bottom" },
      { name: "Top" },
      { name: "Animal" },
      { name: "Text" },
    ],
  },
];

const shuffleLayerConfigurations = false;//随机图片排列，适用于多套图

const debugLogs = false;

const format = {
  width: 640,
  height: 640,
  smoothing: false,
};

const gif = {
  export: false,
  repeat: 0,
  quality: 100,
  delay: 500,
};

const text = {
  only: false,
  color: "#ffffff",
  size: 20,
  xGap: 40,
  yGap: 40,
  align: "left",
  baseline: "top",
  weight: "regular",
  family: "Courier",
  spacer: " => ",
};

const pixelFormat = {//可以改变pixelate
  ratio: 3 / 128,
};

const background = {
  generate: true,
  brightness: "80%",
  static: false,
  default: "#000000",
};

const extraMetadata = {
  // artist:"fuker"
  // surname:"Mike"
};

const rarityDelimiter = "#";

const uniqueDnaTorrance = 10000;

const preview = {
  thumbPerRow: 5,
  thumbWidth: 50,
  imageRatio: format.height / format.width,
  imageName: "preview.png",
};

const preview_gif = {
  numberOfImages: 5,
  order: "ASC", // ASC, DESC, MIXED
  repeat: 0,
  quality: 100,
  delay: 500,
  imageName: "preview.gif",
};

module.exports = {
  format,
  baseUri,
  description,
  background,
  uniqueDnaTorrance,
  layerConfigurations,
  rarityDelimiter,
  preview,
  shuffleLayerConfigurations,
  debugLogs,
  extraMetadata,
  pixelFormat,
  text,
  namePrefix,
  network,
  solanaMetadata,
  gif,
  preview_gif,
};
