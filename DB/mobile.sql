# Host: localhost  (Version: 5.5.53)
# Date: 2018-12-11 18:56:02
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "addressc"
#

DROP TABLE IF EXISTS `addressc`;
CREATE TABLE `addressc` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `truename` varchar(255) DEFAULT NULL,
  `userTel` varchar(255) DEFAULT NULL,
  `userregion` varchar(255) DEFAULT NULL,
  `detailaddr` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=12 DEFAULT CHARSET=utf8;

#
# Data for table "addressc"
#

/*!40000 ALTER TABLE `addressc` DISABLE KEYS */;
INSERT INTO `addressc` VALUES (1,'1111','1111','河南 周口市 商水县','1111','4'),(2,'','','','','4'),(3,'11','111','河南 郑州市 郑东新区','111','4'),(4,'111','111','河南 周口市 淮阳县','111','4'),(5,'','','','','4'),(6,'111','1111','河南 周口市 商水县','1111','4'),(7,'111','1111','河南 周口市 商水县','1111','4'),(8,'111','1111','河南 周口市 商水县','1111','4'),(9,'111','1111','河南 周口市 商水县','1111','4'),(10,'111','1111','河南 周口市 商水县','1111','4'),(11,'孙','1232343232','北京 密云区 城区以外','qqq1','4');
/*!40000 ALTER TABLE `addressc` ENABLE KEYS */;

#
# Structure for table "addshops"
#

DROP TABLE IF EXISTS `addshops`;
CREATE TABLE `addshops` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=81 DEFAULT CHARSET=utf8;

#
# Data for table "addshops"
#

/*!40000 ALTER TABLE `addshops` DISABLE KEYS */;
INSERT INTO `addshops` VALUES (2,'5'),(77,'22'),(78,'23'),(79,'54'),(80,'26');
/*!40000 ALTER TABLE `addshops` ENABLE KEYS */;

#
# Structure for table "goods"
#

DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` varchar(6) DEFAULT NULL,
  `goods_info` varchar(255) DEFAULT '',
  `goods_name` varchar(255) DEFAULT NULL,
  `sale` decimal(10,2) DEFAULT NULL,
  `price` decimal(10,2) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `good_news` varchar(255) DEFAULT NULL,
  `goods_num` int(11) DEFAULT NULL COMMENT '销量',
  `advise` int(11) DEFAULT NULL COMMENT '推荐和新品：advise为1的为新品;2是推荐',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=167 DEFAULT CHARSET=utf8;

#
# Data for table "goods"
#

/*!40000 ALTER TABLE `goods` DISABLE KEYS */;
INSERT INTO `goods` VALUES (14,'dq','Dr.arrivo Zeus宙斯 第五代导入射频美容仪 标准款 套装含金色PE美容液','美容仪界的爱马仕',9512.00,8731.00,'dq/dq-01.webp','86%',889,1),(15,'dq','TESCOM 干湿两用负离子直发直板夹  ITH1805 亮粉色 1支','负离子护发',356.00,279.00,'dq/dq-02.webp','80%',456,1),(16,'dq','TRIA 家用小型激光脱毛器PRECISION 1个','轻松脱掉唇周汗毛',2351.00,1887.00,'dq/dq-03.webp','76%',888,2),(17,'dq','AMBIE 耳夹式骨传导耳机 橙色 1副','听歌聊天两不误',654.00,387.00,'dq/dq-04.webp','67%',1009,1),(18,'dq','SONY 索尼 Xperia Touch 智能隔空触控投影仪 G1109','体验未来科技',21012.00,10399.00,'dq/dq-05.webp','98%',222,2),(19,'dq','SONY 索尼 全无线降噪耳机 降噪豆 入耳式 WF-1000X','迷你尺寸的降噪耳机',2164.00,1549.00,'dq/dq-06.webp','87%',1009,1),(20,'dq','Dr.arrivo Zeus宙斯 第五代导入射频美容仪 镶钻款 套装含金色PE美容液','唤醒活力抵御衰老',1200.00,9928.00,'dq/dq-07.webp','78%',33,2),(21,'dq','TESCOM 干湿两用负离子直发直板夹  ITH1805 炫黑色 1支','负离子护发',345.00,279.00,'dq/dq-08.webp','98%',22,1),(22,'dq','TRIA 家用小型激光脱毛器PRECISION 1个','轻松脱掉唇周汗毛',2451.00,1887.00,'dq/dq-09.webp','76%',236,1),(23,'dq','waterpik 洁碧 冲牙器便携式水牙线电动洗牙器洁牙机WP-450J 白+蓝 100V','便捷携带随时清洗',1201.00,999.00,'dq/dq-10.webp','78%',124,2),(24,'dq','AMBIE 耳夹式骨传导耳机 白色 1副','AMBIE 耳夹式骨',421.00,374.00,'dq/dq-11.webp','76%',1234,1),(25,'dq','SONY 索尼 全无线降噪耳机 降噪豆 入耳式 WF-1000X','迷你尺寸的降噪耳机',1642.00,1549.00,'dq/dq-12.webp','89%',225,2),(26,'dq','beyerdynamic 拜亚动力 头戴式超宽频专业监听耳机 DT990 PRO','专业监听耳机',1542.00,1499.00,'dq/dq-13.webp','92%',111,1),(27,'dq','BOSE 博士  SOUNDSPORT FREE真无线蓝牙运动耳机 黑色',' FREE真无线蓝牙运动耳机',1899.00,1678.00,'dq/dq-14.webp','93%',34,2),(28,'dq','AMBIE 耳夹式骨传导 无线蓝牙耳机 淡蓝色','AMBIE 耳夹式骨传导',984.00,889.00,'dq/dq-15.webp','68%',12,1),(29,'dq','HOMESTAR 家庭用天象仪 藏蓝色 1个','把星空带回家',784.00,729.00,'dq/dq-16.webp','87%',23,2),(30,'dq','HOMESTAR 家庭用天象仪 珍珠白 1个','把星空带回家',762.00,739.00,'dq/dq-17.webp','98%',567,1),(31,'dq','HOMESTAR 天象仪 迪士尼 限定款','迪士尼之夜',789.00,749.00,'dq/dq-18.webp','86%',788,2),(32,'dq','HOMESTAR 天象仪 你的名字 限定款','浪漫星空，君の名は',789.00,749.00,'dq/dq-19.webp','89%',123,1),(33,'dq','SHARP 夏普 电子词典 商务用 PW-SB4-W 白色','地道日语近在咫尺',2100.00,1999.00,'dq/dq-20.webp','98%',345,2),(34,'dq','CASIO 卡西欧 电子词典 中国语向 XD-CV730','地道日语近在咫尺',1499.00,1399.00,'dq/dq-21.webp','84%',234,1),(35,'dq','CASIO 卡西欧 电子词典 中国语向 XD-Z7300WE 白色','地道日语近在咫尺',3210.00,2999.00,'dq/dq-22.webp','83%',3456,2),(36,'dq','CASIO 卡西欧 电子词典 中国语向 XD-Z7300RD 红色','地道日语近在咫尺',3459.00,3399.00,'dq/dq-23.webp','99%',3456,1),(37,'dq','CASIO 卡西欧 电子词典 中国语向 XD-G7300RD 红色','地道日语近在咫尺',2689.00,2599.00,'dq/dq-24.webp','97%',111,2),(38,'dq','Dr.arrivo Zeus宙斯 第五代导入射频美容仪 标准款','唤醒活力抵御衰老',7845.00,7738.00,'dq/dq-25.webp','86%',123,1),(39,'dq','Dr.arrivo Zeus宙斯 第五代导入射频美容仪 标准款 套装含金色PE美容液','美容仪界的爱马仕',8942.00,8731.00,'dq/dq-26.webp','93%',12412,1),(40,'dq','Dr.arrivo Zeus宙斯 第五代导入射频美容仪 镶钻款 套装含金色PE美容液','唤醒活力抵御衰老',9512.00,9228.00,'dq/dq-27.webp','76%',2,1),(41,'dq','Dr.Arrivo 小尖刀美容仪器 银色','塑造美丽光彩照人',3945.00,3565.00,'dq/dq-28.webp','87%',8886,1),(42,'dq','TESCOM 负离子直卷两用卷发棒 ITH1700 38mm 红色 1支','手残党也不怕',645.00,545.00,'dq/dq-29.webp','94%',3454,2),(43,'dq','TESCOM 负离子直卷三用卷发棒  ITH1810 亮粉色 1支','1支3用百变造型',320.00,279.00,'dq/dq-30.webp','76%',3457,1),(44,'dq','TESCOM 干湿两用负离子直发直板夹  ITH1805 亮粉色 1支','负离子护发',320.00,279.00,'dq/dq-31.webp','94%',100,2),(45,'dq','TESCOM 干湿两用负离子直发直板夹  ITH1805 炫黑色 1支','负离子护发',320.00,279.00,'dq/dq-32.webp','93%',1124,2),(46,'dq','TRIA 家用小型激光脱毛器PRECISION 1个','轻松脱掉唇周汗毛',1984.00,1887.00,'dq/dq-33.webp','98%',2324,1),(47,'dq','TRIA 家用眼周抗衰老激光美容仪 1个','恢复眼周青春活力',1599.00,1499.00,'dq/dq-34.webp','92%',7675,1),(48,'dq','belulu aquamarine高浓度水素水杯 白','高纯水素护航健康',2864.00,2679.00,'dq/dq-35.webp','94%',778,1),(49,'dq','belulu style溶脂减肥仪 香槟金','纤体美肤瘦身神器',1698.00,1488.00,'dq/dq-36.webp','84%',2354,1),(50,'dq','belulu caviup溶脂减肥仪 白','美体美肤瘦身甩脂',2254.00,2167.00,'dq/dq-37.webp','86%',4645,1),(51,'dq','belulu clearveilmini光子IPL多功能脱毛机 白','一闪而光丝滑肌肤',1984.00,1889.00,'dq/dq-38.webp','93%',666,2),(52,'dq','belulu clearveil光子IPL多功能脱毛机 白','一闪而光丝滑肌肤',2849.00,2579.00,'dq/dq-39.webp','99%',8874,2),(53,'dq','belulu aquarufa洁肤铲皮机 粉','改善黑头滋润肌肤',945.00,829.00,'dq/dq-40.webp','84%',965,2),(54,'dq','belulu RebirthGOLDU形电穿孔导入美容仪 粉','黄金美肤逆龄美肌',2984.00,2679.00,'dq/dq-41.webp','90%',905,2),(55,'dq','belulu PremiumGold射频美容仪 金','家庭美白一只搞定',2101.00,1959.00,'dq/dq-42.webp','98%',7856,2),(56,'dq','belulu premium射频美容仪 白','抗衰瘦脸一机搞定',3584.00,1368.00,'dq/dq-43.webp','84%',5643,1),(57,'dq','belulu ClassyGOLD黄金头超声波美容仪 金','奢华黄金升级护肤',1854.00,1779.00,'dq/dq-44.webp','90%',234,1),(58,'dq','Panasonic 松下 LUMIX DC-GF9W-D 双套机单反相机 橙色','复古典雅高清潮机',5121.00,4899.00,'dq/dq-45.webp','99%',643,1),(59,'dq','SONY 索尼 ILCE-6000L a6000微单数码相机含16-50mm与55-210mm 镜头 白色 标配','便携美观4D对焦',5620.00,5399.00,'dq/dq-46.webp','93%',346,2),(60,'dq','OLYMPUS 奥林巴斯 微单数码相机 PEN E-PL9 白色','高颜值轻松自拍',6999.00,5999.00,'dq/dq-47.webp','94%',356,1),(61,'dq','FUJIFILM 富士 单电自拍文艺复古微单相机 含XC15-45mm 镜头套装 X-A5套机  粉色','文艺青年包中必备',5484.00,5399.00,'dq/dq-48.webp','98%',3253,1),(62,'dq','SONY 索尼 酷拍摄像机 FDR-X3000R 4K摄像 白色','高清画质时尚便携',6777.00,4299.00,'dq/dq-49.webp','90%',36,2),(63,'dq','FUJIFILM 富士 防水数码相机 FinePix XP130 蓝色','防水便携畅享拍摄',2899.00,2399.00,'dq/dq-50.webp','99%',546,1),(64,'lz','ISHIZAWA LABS 石泽研究所 毛孔抚子日本大米面膜 10片','ISHIZAWA LABS ',50.00,78.00,'lz/cheap-top1.png','99%',230,1),(65,'lz','NATURIE 娥佩兰 薏仁水Naturie Imju保湿化妆水 500ML','NATURIE 娥佩兰',55.00,43.00,'lz/cheap-top2.png','96%',12,1),(66,'lz','KOSE 高丝 babyish婴儿肌面膜 高保湿润泽型 7片','KOSE 高丝',30.00,18.00,'lz/cheap-top3.png','86%',245,2),(67,'lz','DAISO 大创 粉扑&化妆海绵专用清洗剂 80ml','化妆海绵专用清洗剂',16.00,14.00,'lz/cheap-top4.png','96%',10,2),(68,'lz','ALOE 太阳社 玻尿酸透明质酸原液高效保湿 10ML',' 玻尿酸透明质酸原液高效保湿',50.00,30.00,'lz/cheap-top5.png','95%',136,2),(69,'lz','MANDOM 曼丹 Bifesta眼部卸妆液 145ML',' Bifesta眼部卸妆液 ',75.00,50.00,'lz/cheap-top6.png','94%',235,1),(70,'lz','CUREL 珂润 提亮肤色补水润浸保湿乳霜 40g','提亮肤色补水润浸保湿',160.00,146.00,'lz/cheap-top7.png','84%',54,2),(71,'lz','NURSERY 肌肤舒缓卸妆啫喱 180ML 柚子味',' 肌肤舒缓卸妆',90.00,85.00,'lz/cheap-top8.png','97%',26,1),(72,'lz','BCL Saborino早安面膜 滋润牛油果 32片','早安面膜 滋润牛油果',95.00,81.00,'lz/cheap-top9.png','99%',12,1),(73,'lz','SHISEIDO 资生堂 611棉花糖补水瘦脸拍拍棒 1支','补水瘦脸',45.00,33.00,'lz/cheap-top10.png','93%',1235,2),(74,'lz','LION 狮王 PAIRACNE粉刺暗疮药膏 14g','LION 狮王',66.00,51.00,'lz/cheap-top11.png','86%',230,1),(75,'lz','QUALITY 皇后秘密 超保湿抗老化面膜 豪华版 5片','QUALITY 皇后秘密 ',52.00,42.00,'lz/cheap-top12.png','96%',120,2),(76,'lz','Media 媚点 保湿粉底霜 PO-B1 粉肤色白皙肤色25g','粉肤色白皙肤色',72.00,68.00,'lz/cheap-top13.png','79%',195,1),(77,'lz','FANCL 芳珂 新版无添加纳米净化卸妆油 120ML','FANCL 芳珂',150.00,121.00,'lz/cheap-top14.png','99%',123,1),(78,'lz','ROSETTE 诗留美屋 海泥洗面奶 120g','ROSETTE 诗留美屋 ',51.00,33.00,'lz/cheap-top15.png','96%',65,2),(79,'lz','QUALITY 皇后秘密 缩毛孔提升面膜 豪华版 5片',' 缩毛孔提升面膜',56.00,42.00,'lz/cheap-top16.png','95%',125,2),(80,'lz','FREEPLUS 芙丽芳丝 净润洗面乳洗面奶 100g','FREEPLUS 芙丽芳丝 ',131.00,111.00,'lz/cheap-top17.png','86%',263,1),(81,'lz','ALOVIVI 清洁皇后卸妆水（新旧版本随机发） 500ML','ALOVIVI 清洁皇后卸妆水（',67.00,53.00,'lz/cheap-top18.png','96%',56,2),(82,'lz','CLUB 素颜粉 淡玫瑰香味 26g','CLUB 素颜粉',96.00,83.00,'lz/cheap-top19.png','89%',61,1),(83,'lz','ROHTO 乐敦 C3隐形眼镜护理液 保湿款 500ml','ROHTO 乐敦',75.00,65.00,'lz/cheap-top20.png','79%',33,1),(84,'lz','HABA 鲨烷美容油SQ油精油保湿补水 15ML','SQ油精油保湿补水',131.00,111.00,'lz/cheap-top21.png','98%',470,2),(85,'lz','BCL Saborino 小雏菊晚安面膜 28枚','BCL Saborino 小雏菊',99.00,84.00,'lz/cheap-top22.png','90%',568,2),(86,'lz','HABA 角鲨烷美白美容油 15ml','HABA 角鲨烷',136.00,126.00,'lz/cheap-top23.png','92%',98,1),(87,'lz','Enohonpu 惠之本铺 水润面膜 25ml x 5片','Enohonpu 惠之本铺 ',96.00,84.00,'lz/cheap-top24.png','95%',56,2),(88,'lz','CANMAKE 井田 五色哑光眼影 03 复古红色 3.3g','CANMAKE 井田',86.00,66.00,'lz/cheap-top25.png','77%',231,1),(89,'lz','QUALITY 皇后秘密 多效合一保湿补水懒人面膜EX 50片','QUALITY 皇后秘密 ',132.00,110.00,'lz/cheap-top26.png','96%',63,2),(90,'lz','CURE 活性水素去角质凝胶 250g','CURE 活性水素',175.00,154.00,'lz/cheap-top27.png','89%',98,1),(91,'lz','COSME DECORTE 黛珂 AQMW白檀舞蝶丝绒蜜粉 10 明亮肤色哑光雾面20g','白檀舞蝶丝绒蜜粉',370.00,344.00,'lz/cheap-top28.png','96%',890,2),(92,'lz','THREE 平衡卸妆油 200ml','THREE ',342.00,305.00,'lz/cheap-top29.png','86%',254,1),(93,'lz','ORBIS 奥蜜思 熬夜拜拜水凝精华 50g','ORBIS 奥蜜思',250.00,220.00,'lz/cheap-top30.png','83%',630,2),(94,'lz','TAKAMI 03毛孔闭合精华美容液 30ml','TAKAMI',356.00,329.00,'lz/cheap-top31.png','98%',230,1),(95,'lz','COVERMARK 中草药修护粉底霜 YN00 30g','COVERMARK 中草药修护粉底霜',378.00,364.00,'lz/cheap-top32.png','96%',333,2),(96,'lz','COVERMARK 中草药修护粉底霜  YO00 黄调最白 30g','COVERMARK 中草药修护粉底霜',401.00,385.00,'lz/cheap-top33.png','86%',36,1),(97,'lz','MUJI 无印良品 敏感肌用保湿乳液 清爽型 400mL','MUJI 无印良品',96.00,85.00,'lz/cheap-top34.png','87%',13,2),(98,'lz','Creer Beaute 克丽贝蒂 凡尔赛玫瑰眼线液笔 棕色 0.4ml','凡尔赛玫瑰眼线液笔',99.00,75.00,'lz/cheap-top35.png','78%',32,1),(99,'lz','CANMAKE 井田 水润腮红膏 CL01 圣诞红','CANMAKE 井田',68.00,57.00,'lz/cheap-top36.png','98%',63,1),(100,'lz','Cotton Labo 柔软化妆棉 80枚','Cotton Labo 柔软化妆棉',20.00,14.00,'lz/cheap-top37.png','99%',89,2),(101,'mmq','手慢无的限量发售！','手慢无的限量发售！',469.00,329.00,'mmq/index30.webp','87%',33,2),(102,'mmq','卸妆彻底更放心','卸妆彻底更放心',136.00,123.00,'mmq/index31.webp','94%',56,2),(103,'mmq','柔软舒适纠正腿型','柔软舒适纠正腿型',42.00,25.00,'mmq/index31-1.webp','87%',64,2),(104,'mmq','【全网独家】BCL限定蜜桃面膜粉嫩驾到','桃子控的福音',133.00,99.00,'mmq/index33.gif','92%',60,1),(105,'mmq','专业的生发液都讲究“男女有别”','LABOMO 生发液',58.00,48.30,'mmq/index33-1.webp','97%',214,1),(106,'mmq','皱纹克星，守护爱笑的眼睛','好眼霜根本不用按摩',88.00,79.00,'mmq/index33-2.webp','94%',411,1),(107,'mmq','超会买，爱挑剔，小编才是真闺蜜','点击查看更多推荐 >>',46.00,12.00,'mmq/index33-4.webp','77%',31,1),(108,'mmq','東京最IN','温和不伤头皮',44.00,11.00,'mmq/index63-1.webp','23%',121,1),(109,'mmq','限时福利','您也能有天使之足',12.00,11.00,'mmq/index63-2.webp','45%',456,1),(110,'mmq','新品速递','深层滋润有效保湿',123.00,1.00,'mmq/index63-3.webp','98%',14,1),(111,'mmq','24h热卖','平价版法尔曼冰凝平价版法尔曼冰凝',12.00,12.00,'mmq/index','12%',123,1),(112,'mmq','11','11',123.00,1.00,'mmq/index63-4.webp','92%',12,1),(113,'mmq','11','11',11.00,11.00,'mmq/index63-5.webp','98%',111,1),(114,'mmq','11','11',11.00,11.00,'mmq/index63-6.webp','68%',222,1),(115,'mmq','TOP10','限量虎头卫衣',11.00,11.00,'mmq/index64-1.webp','98%',331,1),(116,'mmq','豌豆独享','潮流羽绒服',123.00,121.00,'mmq/index64-2.webp','79%',411,1),(117,'mmq','新品速递','基础百搭简约实用',122.00,11.00,'mmq/index64-3.webp','98%',143,1),(118,'mmq ','大牌白菜价','LV经典老花秒抢',11.00,22.00,'mmq/index64-4.webp','98%',113,1),(119,'mmq','囤货精选','秋冬必备品',1212.00,11.00,'mmq/index64-5.webp','94%',1121,1),(121,'mmq','神秘多巴胺','每口都想谈恋爱',11.00,11.00,'mmq/index65-1.webp','95%',212,1),(122,'mmq','量贩区','专治吃什么难题',11.00,11.00,'mmq/index65-2.webp','95%',111,1),(123,'mmq','新品速递','寒冷冬天吃一碗面',11.00,11.00,'mmq/index65-3.webp','96%',223,1),(124,'mmq','实时热卖','抹茶控最爱',11.00,11.00,'mmq/index','97%',3321,1),(125,'mmq','11','11',11.00,11.00,'mmq/index65-4.webp','98%',122,1),(126,'mmq','11','11',11.00,11.00,'mmq/index65-5.webp','89%',123,1),(127,'mmq','11','11',11.00,11.00,'mmq/index65-6.webp','131%',131,1),(128,'mmq','萌破天际','保温杯',11.00,11.00,'mmq/index66-1.webp','87%',1355,1),(129,'mmq','本周热卖','营养均衡妈妈放心',11.00,11.00,'mmq/index66-2.webp','98%',443,1),(130,'mmq','新品速递','植物成分安全放心',11.00,11.00,'mmq/index66-3.webp','87%',331,1),(131,'mmq','防霾口罩','守护健康',11.00,11.00,'mmq/index66-4.webp','89%',1134,1),(132,'mmq','贝塔奶瓶','研制爆表',11.00,11.00,'mmq/index66-5.webp','87%',546,1),(133,'mmq','好物大赏','手套也能护手',11.00,11.00,'mmq/index67-1.webp','98%',644,1),(134,'mmq','解忧杂货铺','日式美学',11.00,11.00,'mmq/index67-2.webp','99%',1234,1),(135,'mmq','新品速递','洗衣变得更加简单',11.00,11.00,'mmq/index67-3.webp','88%',113,1),(136,'mmq','豌豆独享','只在豌豆能买到',11.00,11.00,'mmq/index67-4.webp','87%',134,1),(137,'mmq','限时福利','低至7.5折',11.00,11.00,'mmq/index67-5.webp','98%',11,1),(139,'mmq','当季必购','不收怎么过夏天',11.00,11.00,'mmq/index68-1.webp','100%',566,1),(140,'mmq','豌豆独享','女人必备',11.00,11.00,'mmq/index68-2.webp','98%',144,1),(141,'mmq','豌豆大药房','神奇小粉丸',11.00,11.00,'mmq/index68-3.webp','98%',4586,1),(142,'mmq','24h热卖','补钙加速器',11.00,11.00,'mmq/index','87%',1,1),(143,'mmq','11','11',11.00,11.00,'mmq/index68-4.webp','88%',313,1),(144,'mmq','11','11',11.00,11.00,'mmq/index68-5.webp','96%',312,1),(145,'mmq','11','11',11.00,11.00,'mmq/index68-6.webp','87%',131,1),(146,'mmq','美容仪器','全网最低价 ',11.00,11.00,'mmq/index69-1.webp','98%',889,1),(147,'mmq','生活家电','别样の生活',11.00,11.00,'mmq/index69-2.webp','68%',11,1),(148,'mmq','新品速递','国内同步发售',11.00,11.00,'mmq/index69-3.webp','87%',441,1),(149,'mmq','豌豆独享','只在豌豆买的到',11.00,11.00,'mmq/index69-4.webp','99%',321,1),(150,'mmq','爆款直降','低至7折',11.00,11.00,'mmq/index69-5.webp','88%',312,1),(151,'mmq','赠价值680元全年惊喜','豌豆公主 2019年日历 1本 限量发售 12月24日国内仓发货',59.00,59.00,'mmq/index119.webp','暂无评价',6546,1),(152,'mmq','平价版SK-II','ISHIZAWA LABS 石泽研究所 毛孔抚子日本大米面膜 10片',80.00,80.00,'mmq/index123.webp','99%',154,1),(153,'mmq','口碑爆表断货王','CPB 肌肤之钥 光凝妆前隔离霜 40g',394.00,394.00,'mmq/index123-1.webp','99%',654,1),(154,'mmq','满满桃子香气','TOMOMASU 友桝饮料 日本人气水果味碳酸汽水 白桃味 300ml',16.00,16.00,'mmq/index123-2.webp','99%',2,1),(155,'mmq','晒不黑的经典款','SHISEIDO 资生堂 ANESSA 安耐晒2018新版金瓶清透防水防晒护肤乳 SPF50+・PA++++ 60ml',189.00,189.00,'mmq/index123-3.webp','99%',226,1),(156,'mmq','一天一片祛痘美白','ROHTO 乐敦 CC美白祛斑祛痘印面膜 20片',68.00,68.00,'mmq/index126.webp','99%',125,1),(157,'mmq','全网爆款碰到就买','SHISEIDO 资生堂 ELIXIR怡丽丝尔日间抗皱滋润弹力保湿防晒美容液 金管 SPF50+ PA++++ 35ml',244.00,244.00,'mmq/index123-4.webp','99%',11,1),(158,'mmq','吸VC对抗雾霾','NEPIA 妮飘 贵族3D维他命C口罩 普通尺寸 3枚',35.00,35.00,'mmq/index123-5.webp','99%',1,1),(159,'mmq','出门气色急救能手','LULULUN 限定 One night一夜急救应急面膜 1片',21.00,21.00,'mmq/index123-6.webp','99%',11,1),(160,'mmq','化妆也不怕戴口罩','KOWA 興和 防脱妆口罩 3片装',23.00,23.00,'mmq/index123-7.webp','99%',11,1),(161,'mmq','干皮浮粉一瓶解决','SHISEIDO 资生堂 INTEGRATE GRACY 完美意境保湿粉底霜 PO10 粉调明亮肤色 25g',99.00,99.00,'mmq/index123-9.webp','99%',11,1),(162,'mmq','王菲张馨予同款','HABA 角鲨烷美白美容油 30ML',208.00,208.00,'mmq/index123-10.webp','99%',11,1),(163,'mmq','富含食物纤维美味不减','TARAMI 多良见 蒟蒻果汁果冻 蜜桃味 150g',11.00,11.00,'mmq/index123-11.webp','99%',155,1),(164,'mmq','最温柔的呵护','SHISEIDO 资生堂 ROSARIUM 玫瑰园 玫瑰香氛身体乳 200ml',127.00,127.00,'mmq/index123-12.webp','99%',11,1),(165,'mmq','给毛孔来个大清理','Dr.Ci:Labo 城野医生 超级毛孔清洁保湿化妆水 200ml',179.00,179.00,'mmq/index123-13.webp','99%',332,1),(166,'mmq','【BC】Miu Miu 缪缪','【中古】Miu Miu 缪缪 圆角拉链长钱包 粉色 （二手）(BC)',614.00,614.00,'mmq/index123-14.webp','99%',11,1);
/*!40000 ALTER TABLE `goods` ENABLE KEYS */;

#
# Structure for table "paygoods"
#

DROP TABLE IF EXISTS `paygoods`;
CREATE TABLE `paygoods` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `goodsId` varchar(255) DEFAULT NULL,
  `goodscount` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `recordcount` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=6 DEFAULT CHARSET=utf8;

#
# Data for table "paygoods"
#

/*!40000 ALTER TABLE `paygoods` DISABLE KEYS */;
INSERT INTO `paygoods` VALUES (1,'19','1','4','2'),(2,'29','1','4','2'),(3,'','','5','1'),(4,'19','1','4','1'),(5,'26','2','12345678910','2');
/*!40000 ALTER TABLE `paygoods` ENABLE KEYS */;

#
# Structure for table "shopcar"
#

DROP TABLE IF EXISTS `shopcar`;
CREATE TABLE `shopcar` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `pid` varchar(255) DEFAULT NULL,
  `username` varchar(255) DEFAULT NULL,
  `goodscount` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=17 DEFAULT CHARSET=utf8;

#
# Data for table "shopcar"
#

/*!40000 ALTER TABLE `shopcar` DISABLE KEYS */;
INSERT INTO `shopcar` VALUES (10,'19',NULL,'1'),(13,'19','1','1'),(14,'19','1','1'),(15,'19','1','1'),(16,'19','1','1');
/*!40000 ALTER TABLE `shopcar` ENABLE KEYS */;

#
# Structure for table "user"
#

DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `userTel` varchar(255) DEFAULT NULL,
  `psw` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=7 DEFAULT CHARSET=utf8;

#
# Data for table "user"
#

/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'12345678910','123456'),(2,'12345678911','1234567');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
