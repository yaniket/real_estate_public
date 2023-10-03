import { Box } from '@chakra-ui/layout';
import { useState, useEffect } from 'react';
import bot from '../assets/images/Bot.gif'
import Image from 'next/image'

const Shop = () => {
  const [currentAdIndex, setCurrentAdIndex] = useState(0);

  const ads = [
    '<div style=text-align: center;margin-left: 76px"><a href="https://www.amazon.in/Braxton-Rolando-Seater-Living-Maroon/dp/B09HNTJCZ9?crid=XTWLNZG3YITX&keywords=sofa+set+for+living+room&qid=1693117791&s=kitchen&sprefix=sofa%2Cfurniture%2C181&sr=1-6&linkCode=li2&tag=aniket07a-21&linkId=69fc5f8fe4d11762d96fdd134b13dd02&language=en_IN&ref_=as_li_ss_il" target="_blank" text-align:"center"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09HNTJCZ9&Format=_SL160_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=aniket07a-21&language=en_IN" ></div>',
    '<div style=text-align: center;margin-left: 76px"><a href="https://www.amazon.in/Home-furniture-Wooden-Living-Office/dp/B0952675DG?crid=XTWLNZG3YITX&keywords=sofa+set+for+living+room&qid=1693121275&s=kitchen&sprefix=sofa%2Cfurniture%2C181&sr=1-18&linkCode=li2&tag=aniket07a-21&linkId=5bb77e760a8a573e3acb6ea4b7397449&language=en_IN&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B0952675DG&Format=_SL160_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=aniket07a-21&language=en_IN" ></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=aniket07a-21&language=en_IN&l=li2&o=31&a=B0952675DG" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></div>',
    '<div style=text-align: center;margin-left: 76px"><a href="https://www.amazon.in/SKYGLAMOUR-Supreme-Ornate-Cushion-Outdoor/dp/B09T9DMVKH?crid=Z3NL9HEC5OKH&keywords=chairs+for+living+room&qid=1693121474&s=kitchen&sprefix=chai%2Ckitchen%2C188&sr=1-5&linkCode=li2&tag=aniket07a-21&linkId=fd3778b71554d1b45094e90f69847f2b&language=en_IN&ref_=as_li_ss_il" target="_blank"><img border="0" src="//ws-in.amazon-adsystem.com/widgets/q?_encoding=UTF8&ASIN=B09T9DMVKH&Format=_SL160_&ID=AsinImage&MarketPlace=IN&ServiceVersion=20070822&WS=1&tag=aniket07a-21&language=en_IN" ></a><img src="https://ir-in.amazon-adsystem.com/e/ir?t=aniket07a-21&language=en_IN&l=li2&o=31&a=B09T9DMVKH" width="1" height="1" border="0" alt="" style="border:none !important; margin:0px !important;" /></div>'
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentAdIndex((prevIndex) => (prevIndex + 1) % ads.length);
    }, 10000); // 10000ms = 10 seconds

    return () => clearInterval(interval); // Cleanup the interval on unmount
  }, []);

  return (
    <Box p='5' margin-left="790px" color='green' borderTop='1px' borderColor='gray.100'>
      <Image color="red" padding-right="1000px"width='50%' height="50%" src={bot} />
      <div dangerouslySetInnerHTML={{ __html: ads[currentAdIndex] }} />
    </Box>
  );
};

export default Shop;
