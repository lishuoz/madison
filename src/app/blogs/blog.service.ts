import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class BlogService {
  blogs: any[] = [
    {
      title: '投票选出你最爱的窗帘（参与投票有奖）',
      tags: [
        'Blinds',
        'Curtains',
        'Drapes',
        'Shades',
        'Sheers',
        'Shutters',
        'Window Coverings',
      ],
      image: 'assets/images/blog/1979263237.jpg',
      date: 'February 1st, 2020',
      path: '/多伦多窗帘最爱',
      slug: '<p>​2020&nbsp;爱你爱你<br>投票选出你最爱的窗帘</p> <p>票数最高的三位老客户，现金奖励如下：</p> <p> 	一等奖：$150&nbsp;现金<br>    二等奖：$100 现金<br>    三等奖：$50&nbsp; &nbsp;现金</p> <p>如果您选中的最爱窗帘获奖，关注公众号的投票者奖励如下：</p> <p> 	一等奖的投票者：&nbsp;$150 coupon<br>    二等奖的投票者：&nbsp;$100 coupon<br>    三等奖的投票者：&nbsp;$50&nbsp;&nbsp; coupon</p> <p>投票链接：<br> 点击此处文字进入窗帘投票通道<br> 投票截止日期：<br> 2020年 2月8日 23点55分<br> 兑奖请联系：<br> 手机/微信 647-333-0303</p></div>',
      contents: '',
    },
    {
      title: '新的一年，为了你的家园，我们一起砥砺前行',
      tags: [
        'Shades',
        'Sheers',
        'Shutters',
        'Window Coverings',
        'Wood Shutters',
      ],
      image: 'assets/images/blog/IMG_0122.jpg',
      date: 'January 4th, 2020',
      path: '/oakville窗帘',
      slug: '<p>​尊敬的麦迪森窗帘客户：</p><p>时光荏苒，岁月如梭<br>我们怀揣感恩和希望<br>踏入新的征程<br>回首2019<br>无论风雨或是晴好<br>无论你身在中国或是加国<br>通过手机，通过微信<br>通过公众号，通过网站<br>我们都与你相连<br>我们都相伴度过</p><p></p><p>你的需求，我们都用情服务<br>你的家园，我们都用心呵护<br>正是你的信任和肯定<br>支持着我们从未停止前进的脚步<br>我们与你<br>共同在多伦多这片热土上拼搏<br>我们致力于高端窗帘的私人订制<br>以中端价格作为市场切入点</p></div>',
      contents: '',
    },
    {
      title: '5 Major Benefits of Solid Wood Shutters 木百叶窗的优点',
      tags: ['California Shutters', 'Shutters'],
      image: 'assets/images/blog/shutter-1.jpg',
      date: 'December 11th, 2019',
      path: '/5-major-benefits-of-solid-wood-shutters-oakville',
      slug: '<div class="fusion-post-content-container"><p>1. Solid wood shutters, natural materials, ecological safety, environmental friendly</p><p>California Shutters (Wood Shutters) are made from natural solid wood, it provides environmental protection and reduces pollution. Wood shutters is an important decoration to your lovely home.</p><p>2. Easy to clean &amp; Durable</p><p>The wood shutters only need to be wiped with a piece of cotton cloth, without […]</p></div>',
      contents: '',
    },
    {
      title: '为什么选择麦迪森窗帘的斑马帘？',
      tags: ['Shades'],
      image:
        'assets/images/blog/C85EFCB5-C89D-4541-94C1-ED429446FC28-2034-0000035A8762BFA4_tmp.jpg',
      date: 'December 4th, 2019',
      path: '/斑马帘-麦迪森窗帘oakville',
      slug: '<div class="fusion-post-content-container"><p>斑马帘是一种由纺织物制作的木百叶窗的替代品，目前在市场上非常流行。</p><p>斑马帘由滚轴式设计，可以使用手动拉链或电动操作窗帘。斑马帘的拉链，底部栏杆和盒式帷幔可以自由搭配设计。</p><p>斑马帘的条纹有2英寸和3&nbsp;英寸供您选择，操作时对齐或错开斑纹，可以在光控或黑暗之间调整，让您在视野和隐私之间进行自由转换。</p><p>斑马帘加上遮光层能够阻隔光亮，使房间变得黑暗，它们通常是卧室或起居室的绝佳选择。</p></div>',
    },
    {
      title: '为什么卷帘Roller Shades这么流行？',
      tags: ['Shades'],
      image: 'assets/images/blog/roller-shades-designer-roller-category.jpg',
      date: 'November 22nd, 2019',
      path: '/卷帘roller-shades-窗帘-oakville',
      slug: '<div class="fusion-post-content-container"><p>卷帘（Roller Shades）是窗饰产品中的一种经典窗帘，是将窗帘材料经树脂加工，卷成滚筒状，采用拉绳进行上升下降的方式。<br>​<br>根据控制方式的不同，卷帘可以分为电动卷帘和手动卷帘。根据面料不同，卷帘可分为半遮光卷帘、半透光卷帘和全遮光卷帘。</p><p>卷帘（Roller Shades）适用于多种场所，尤其是家居。卷帘操作简单方便，具有外表美观简洁，结构牢固耐用等诸多优点。使得窗框显得干净利落，让整个房间看上去宽敞优雅。</p><p>当卷帘放下时，能让室内光线柔和，免受直射阳光的困扰，达到很好遮阳效果，保护隐私。</p><p>当卷帘升起时，它的体积又非常小，让房间充分沐浴在阳光中，光线明亮。</p><p>在过去，卷帘多使用于办公室和公寓。随着材质、图案和设计的不断更新，卷帘也越来越多地被用于别墅。</p><p>麦迪森窗帘公司提供数百种面料、颜色、纹理、和遮光设计组合的卷帘，供您自由选择。在这里，您可以轻松找到适合您家居的量身定做的优质家居饰品。</p><p>您可以选择经典的色调，为您的房间散发优雅的气息。或者您可以选择柔和的设计，为您的窗户增添温柔的触感。</p><p>在麦迪森窗帘Madison Avenue Window Fashion 的倾力打造下，简约现代或知性优雅的家，触手可及。</p></div>',
    },
    {
      title: '蜂巢帘那么好看，为什么只有少数人用它？',
      tags: ['Blinds', 'Curtains', 'Shades', 'Window Coverings'],
      image: 'assets/images/blog/Mira-Vista-Pleated-Shades.jpg',
      date: 'November 9th, 2019',
      path: '/蜂巢帘-blinds-oakville',
      slug: '<div class="fusion-post-content-container"><p>Top 10私人定制窗帘Oakville</p><p>蜂巢帘（Pleated Shades），又叫风琴帘，因为侧面形似蜂巢，故得名而来。它的灵感源于蜂巢的设计。因为蜂窝结构使空气存储于中空层，让室内保持恒温。</p><p>简约现代却不失高级的蜂巢帘是当今非常受欢迎的一种窗户饰品，适用于不同的窗户形状和各种空间，尤其是用于餐厅、浴室、卧室的窗户上。</p><p>蜂巢帘 Pleated Shades 是一层简洁的单层面料，可以减少较高的窗户堆叠。</p><p>虽然蜂巢帘看上去很简单，技术含量却很高。它具有隔热、保暖、防紫外线以及隔音的功能，能有效保持室内温度和保持空间清静。</p><p>根据打开的方式，蜂巢帘可以自上而下打开，或者自下而上打开，拉绳隐藏在中空层，简单实用。</p><p>根据遮光的不同，可以分为全遮光蜂巢帘和半遮光蜂巢帘，帮助您有效保护隐私，或允许柔和的自然光过滤。</p><p>蜂巢帘采用防污剂和防静电处理，清洗非常容易。为了保持蜂巢帘的优质外观，偶尔用真空吸尘器清理表面，或者轻轻用湿海绵擦拭。</p><p>麦迪森窗帘公司提供数百种面料、颜色、纹理、和遮光设计组合的蜂巢帘供您自由选择。从单色调到渐变色彩，从柔和的中性色调到鲜艳的色彩……</p><p>在麦迪森窗帘公司会为您量身定做适合您的家居的优质蜂巢帘，兼具现代感和高雅感。它独特的色泽、设计和纹理一定会增添您家中空间的无限魅力。</p></div>',
    },
    {
      title: '天然木百叶窗: 来自大自然的气息',
      tags: ['Shutters', 'Wood Shutters'],
      image:
        'assets/images/blog/D1FDB46E-005D-44C7-960C-1797F14EBD51-2034-0000035AA899984B_tmp.jpg',
      date: 'October 20th, 2019',
      path: '/天然木百叶窗-shutters-oakville',
      slug: '<div class="fusion-post-content-container"><p>无论当今的时尚潮流是什么，在窗户装饰方面，木制百叶窗在市场中总是需求旺盛。</p><p>加利福尼亚百叶窗天然，简单，耐用，并能根据设计涂染各种颜色的外观。</p><p>自1985年以来，麦迪森窗帘一直在加拿大大多伦多地区提供百叶窗的私人订制。</p><p>所有的百叶窗均采用计算机化设备精确制造，然后手工精加工，来实现我们对高端木制品的高品质要求。</p><p>窗帘的安装均由经过工厂多年培训的专业安装人员上门服务，确保用户满意。</p><p>No matter what the latest fashion trend may be, when it comes to window fashions, wood shutters are always be in demand.</p><p>California shutters are simple, durable and have a timeless look available in painted or stained finishes.</p><p>Madison Avenue Window Fashions has been supplying shutters across Canada for a long time.</p><p>All shutters are made using computerised […]</p></div>',
    },
    {
      title: '传统布艺窗帘，一帘一世界，有爱更有情',
      tags: ['Curtains', 'Drapes'],
      image: 'assets/images/blog/drape-51.jpg',
      date: 'October 10th, 2019',
      path: '/传统布艺窗帘-oakville',
      slug: '<div class="fusion-post-content-container"><p>选择定制窗帘来装饰您的爱巢，将为您的房间增添优雅，柔和及整洁的外观。布艺窗帘可以灵活搭配几乎任何形状的窗户，既能间隔空间，又能保护隐私。</p><p>很多时候，布艺窗帘是增强窗户美观的装饰。通常来说，布艺，帷幔，床罩，被套，枕头是家居装饰中的五个黄金搭配，其中窗帘是首要配件。</p><p>在麦迪森窗帘，我们经验丰富的设计顾问将帮助您选择最适合您家居装饰的窗帘款式，面料和独特设计。我们定制的窗帘是当今市场上性价比最高的产品之一。</p><p>麦迪森提供数百种不同的窗帘款式，面料，颜色和设计供您选择。无论您钟情现代或传统，素雅或富丽堂皇，麦迪森窗帘的私人订制适应各种不同风格。</p><p>当您致电时，我们经验丰富的设计师将向您展示所有最新窗帘款式和面料，并将您的需求变为现实。所有的布艺窗帘都是由才华横溢的，拥有多年布艺制作经验的专业裁缝手工制作。</p><p>最后，安装工作由经过工厂专业培训的安装人员完成，安装人员将在安装后对您的布艺进行最后润色，确保您满意。</p><p>Why choose stylish custom curtains and drapery?</p><p>Decorating your home with custom curtains and drapery will add an elegant, stylish and cleaner look to the space they embody. Drapery provides the flexibility to cover almost any window and can be used to block the elements and provide privacy.</p><p>In many instants drapes are cosmetic and designed to […]</p></div>',
    },
    {
      title: '窗帘的起源说Origin of Blinds & Shutters',
      tags: [
        'Blinds',
        'Curtains',
        'Drapes',
        'Shades',
        'Sheers',
        'Shutters',
        'Window Coverings',
      ],
      image: 'assets/images/blog/asset-13.jpg',
      date: 'October 3rd, 2019',
      path: '/窗帘的起源说blinds-oakville/',
      slug: '<div class="fusion-post-content-container"><p>The Origin of Curtains, Blinds, Shutters, Shades, and Drapes</p><p>美观精致的窗帘不仅赏心悦目，更是灵魂家居中画龙点睛的一部分。</p><p>窗帘(blinds, curtains, shutters, shades, drapes etc.)，体现着主人的品位，也赋予家特殊的涵义。</p><p>门帘<br>早期人类的住所并没有成型的窗户，窗不过是为了通风和采光而在墙上凿出的空洞。</p><p>我们今天看到的窗帘，最初是以“门帘”的面貌出现的。</p><p>大块的兽皮，细密的藤须，宽大的树叶、竹片或芦苇，成为人类最早所使用的“帘”。</p><p>麻毛丝棉<br>据记载，古埃及时代，人们陆续纺出了亚麻、棉、羊毛、丝等织物。</p><p>而在古老的东方，古中国、古波斯和古印度，各种精美的丝织品被心灵手巧的人们生产出来，点缀着房门。</p><p>纸<br>汉代，蔡伦改进了造纸术，人们把白色的粱纸贴到窗户上做成窗户的遮掩物。</p><p>人们发现，相比兽皮和树叶，纸做的“窗帘”具有一定的厚度和韧性，并且更加便利干净。</p><p>慢慢地，随着民间剪纸艺术的盛行，人们将纸裁剪成好看的图案，贴在窗户上，给房间增添了别样的味道。</p><p>布艺 Drapes<br>宋朝出现布艺之后，因为布的花纹雅观丰富，而且轻柔实用，人们便把布用作窗饰，让窗帘变得风情万众。</p><p>不同的颜色、材质、纹理、图案相互搭配，形成了风格迥异的布帘，以适应不同风格的室内装潢。</p><p>直到今天，布艺窗帘仍然广受大众欢迎，尤其是在亚洲家庭中广为流传。</p><p>古罗马帷幔 Curtains<br>庞贝古城的马赛克壁画上，能看到古罗马早期华丽的殿堂建筑室内装饰的描画，那可以算是“窗帘”最早的视觉记录。</p><p>那个年代盛行的装饰风赋予了“窗帘”更深厚的意义。</p><p>窗帘除了阻隔空间的功效之外，匠心独具而造型丰满的“帷幔”也起着装饰室内的作用。</p><p>取暖挂毯 Shades<br>古罗马帷幔登上历史舞台，算是“窗帘”的初步成型。</p><p>从中世纪古堡的建筑风格可以推测，很少看到室内有窗户，偶尔有很小的窗，玻璃在当时也不曾出现。</p><p>那时，人们对于取暖的需求远远大于采光度。在寒冬季节，人们挂上厚厚的挂毯等布帘以保持室内温度。</p><p>玻璃窗 Shutters<br>13世纪的意大利，&nbsp;玻璃得到进一步完善，逐渐登上了新时代的家居舞台。</p><p>文艺复兴时期，建筑风格也发生了巨变，有的窗户被设计成了金属条框镶嵌玻璃结合而成的组合。</p><p>那个年代，木质百叶窗成为当时主要的窗饰，用来阻挡雨水或阳光。</p><p>窗帘 Blinds<br>1840年左右，纺织品机械化时代的来临，手工低效费时的劳作被取代。人们开始追求时尚，追求品质。</p><p>在各行各业的设计师共同努力下，精致的窗幔和窗饰终于成为了“纯粹”意义的窗帘。</p><p>维多利亚时期，蕾丝纱帘成了当时人们追捧的对象，成了无数家庭的心头好。</p><p>19世纪，在建筑和风格不断的创新和改进中，窗帘也不甘落后，被打造得更加精致华丽。</p><p>随着科技日新月异，各类元素的广泛应用，色彩丰富和质地优异的窗帘深深地影响了室内装饰的风格，丰富着人们的视觉审美。</p><p>人们把窗帘已经不只是当作软装配饰，而是对窗帘的功能和美观度提出了更高的需求，让它成为点缀格调生活空间不可或缺的选项。</p><p>总之，专注打造您的良好家居品质的麦迪森窗帘公司认为，优质的窗帘（百叶窗，斑马帘，布艺窗帘，卷帘等）会提升房间的舒适感，让家居生活倍添逸趣。</p><p>Madison Avenue Window Fashions, which specializes in offering customers customized window coverings at surprisingly affordable rates, believes that high-quality curtains, blinds, shutters, shades, and drapes will enhance the comfort of the room and make your lovely home […]</p></div>',
    },
    {
      title: '无人能敌的天然木百叶窗Wood Shutters',
      tags: ['California Shutters', 'Shutters'],
      image: 'assets/images/blog/1012372436.jpg',
      date: 'October 1st, 2019',
      path: '/天然木百叶窗california-shutters-oakville',
      slug: '<div class="fusion-post-content-container"><p>木百叶窗California Shutters 的五大优点</p><p>1、实木材质，生态安全，天然环保</p><p>木百叶窗由天然实木制造，环保材料，有效减少污染。木百叶窗是家居中的重要装饰，美观高档。</p><p>&nbsp;</p><p>2、容易清洁，经久耐用</p><p>实木百叶窗只需要用棉布轻拭清，无需花费力气拆卸清洗，省时省力。</p><p>&nbsp;</p><p>木百叶窗材质高档，使用年限也很长。</p><p>&nbsp;</p><p>3、隔音和隔热效果俱佳</p><p>夏季，木百叶窗像天然空调一样，能起到自动隔热降温的作用。</p><p>冬天，木百叶窗能有效降低室内热量散发的速度，起到保暖保温的作用。</p><p>4、既遮阳又通风</p><p>实木百叶窗，通过自由调节木百叶片的角度，既遮阳，又通风，还可以有效保持室内空气流通。</p><p>&nbsp;</p><p>5、防紫外线，保护家具</p><p>防虫挡雨，阻挡紫外线效率高达95%以上。白色或浅色叶片的防紫外线效果更好，在加拿大以及整个北美地区都很受欢迎。</p><p>&nbsp;</p><p>专注打造您的良好家居品质的麦迪森窗帘公司Madison Avenue Window Fashion认为，优质的木百叶窗California Shutters 会提升房间的舒适度，提升家居生活的品位。</p></div>',
    },
  ];

  constructor() {}
}
