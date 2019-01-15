﻿# Host: localhost  (Version: 5.5.53)
# Date: 2018-12-11 18:55:08
# Generator: MySQL-Front 5.3  (Build 4.234)

/*!40101 SET NAMES utf8 */;

#
# Structure for table "goods"
#

DROP TABLE IF EXISTS `goods`;
CREATE TABLE `goods` (
  `Id` int(11) NOT NULL AUTO_INCREMENT,
  `type_id` varchar(6) DEFAULT NULL,
  `goods_info` varchar(255) DEFAULT '',
  `goods_name` varchar(255) DEFAULT NULL,
  `sale` decimal(10,0) DEFAULT NULL,
  `price` decimal(10,0) DEFAULT NULL,
  `pic` varchar(255) DEFAULT NULL,
  `good_news` varchar(255) DEFAULT NULL,
  `goods_num` int(11) DEFAULT NULL COMMENT '销量',
  `advise` int(11) DEFAULT NULL COMMENT '推荐和新品：advise为1的为新品;2是推荐',
  PRIMARY KEY (`Id`)
) ENGINE=MyISAM AUTO_INCREMENT=101 DEFAULT CHARSET=utf8;

#
# Data for table "goods"
#

/*!40000 ALTER TABLE `goods` DISABLE KEYS */;
INSERT INTO `goods` VALUES (14,'dq','Dr.arrivo Zeus宙斯 第五代导入射频美容仪 标准款 套装含金色PE美容液','美容仪界的爱马仕',9512,8731,'dq/dq-01.webp','86%',889,1),(15,'dq','TESCOM 干湿两用负离子直发直板夹  ITH1805 亮粉色 1支','负离子护发',356,279,'dq/dq-02.webp','80%',456,1),(16,'dq','TRIA 家用小型激光脱毛器PRECISION 1个','轻松脱掉唇周汗毛',2351,1887,'dq/dq-03.webp','76%',888,2),(17,'dq','AMBIE 耳夹式骨传导耳机 橙色 1副','听歌聊天两不误',654,387,'dq/dq-04.webp','67%',1009,1),(18,'dq','SONY 索尼 Xperia Touch 智能隔空触控投影仪 G1109','体验未来科技',21012,10399,'dq/dq-05.webp','98%',222,2),(19,'dq','SONY 索尼 全无线降噪耳机 降噪豆 入耳式 WF-1000X','迷你尺寸的降噪耳机',2164,1549,'dq/dq-06.webp','87%',1009,1),(20,'dq','Dr.arrivo Zeus宙斯 第五代导入射频美容仪 镶钻款 套装含金色PE美容液','唤醒活力抵御衰老',1200,9928,'dq/dq-07.webp','78%',33,2),(21,'dq','TESCOM 干湿两用负离子直发直板夹  ITH1805 炫黑色 1支','负离子护发',345,279,'dq/dq-08.webp','98%',22,1),(22,'dq','TRIA 家用小型激光脱毛器PRECISION 1个','轻松脱掉唇周汗毛',2451,1887,'dq/dq-09.webp','76%',236,1),(23,'dq','waterpik 洁碧 冲牙器便携式水牙线电动洗牙器洁牙机WP-450J 白+蓝 100V','便捷携带随时清洗',1201,999,'dq/dq-10.webp','78%',124,2),(24,'dq','AMBIE 耳夹式骨传导耳机 白色 1副','AMBIE 耳夹式骨',421,374,'dq/dq-11.webp','76%',1234,1),(25,'dq','SONY 索尼 全无线降噪耳机 降噪豆 入耳式 WF-1000X','迷你尺寸的降噪耳机',1642,1549,'dq/dq-12.webp','89%',225,2),(26,'dq','beyerdynamic 拜亚动力 头戴式超宽频专业监听耳机 DT990 PRO','专业监听耳机',1542,1499,'dq/dq-13.webp','92%',111,1),(27,'dq','BOSE 博士  SOUNDSPORT FREE真无线蓝牙运动耳机 黑色',' FREE真无线蓝牙运动耳机',1899,1678,'dq/dq-14.webp','93%',34,2),(28,'dq','AMBIE 耳夹式骨传导 无线蓝牙耳机 淡蓝色','AMBIE 耳夹式骨传导',984,889,'dq/dq-15.webp','68%',12,1),(29,'dq','HOMESTAR 家庭用天象仪 藏蓝色 1个','把星空带回家',784,729,'dq/dq-16.webp','87%',23,2),(30,'dq','HOMESTAR 家庭用天象仪 珍珠白 1个','把星空带回家',762,739,'dq/dq-17.webp','98%',567,1),(31,'dq','HOMESTAR 天象仪 迪士尼 限定款','迪士尼之夜',789,749,'dq/dq-18.webp','86%',788,2),(32,'dq','HOMESTAR 天象仪 你的名字 限定款','浪漫星空，君の名は',789,749,'dq/dq-19.webp','89%',123,1),(33,'dq','SHARP 夏普 电子词典 商务用 PW-SB4-W 白色','地道日语近在咫尺',2100,1999,'dq/dq-20.webp','98%',345,2),(34,'dq','CASIO 卡西欧 电子词典 中国语向 XD-CV730','地道日语近在咫尺',1499,1399,'dq/dq-21.webp','84%',234,1),(35,'dq','CASIO 卡西欧 电子词典 中国语向 XD-Z7300WE 白色','地道日语近在咫尺',3210,2999,'dq/dq-22.webp','83%',3456,2),(36,'dq','CASIO 卡西欧 电子词典 中国语向 XD-Z7300RD 红色','地道日语近在咫尺',3459,3399,'dq/dq-23.webp','99%',3456,1),(37,'dq','CASIO 卡西欧 电子词典 中国语向 XD-G7300RD 红色','地道日语近在咫尺',2689,2599,'dq/dq-24.webp','97%',111,2),(38,'dq','Dr.arrivo Zeus宙斯 第五代导入射频美容仪 标准款','唤醒活力抵御衰老',7845,7738,'dq/dq-25.webp','86%',123,1),(39,'dq','Dr.arrivo Zeus宙斯 第五代导入射频美容仪 标准款 套装含金色PE美容液','美容仪界的爱马仕',8942,8731,'dq/dq-26.webp','93%',12412,1),(40,'dq','Dr.arrivo Zeus宙斯 第五代导入射频美容仪 镶钻款 套装含金色PE美容液','唤醒活力抵御衰老',9512,9228,'dq/dq-27.webp','76%',2,1),(41,'dq','Dr.Arrivo 小尖刀美容仪器 银色','塑造美丽光彩照人',3945,3565,'dq/dq-28.webp','87%',8886,1),(42,'dq','TESCOM 负离子直卷两用卷发棒 ITH1700 38mm 红色 1支','手残党也不怕',645,545,'dq/dq-29.webp','94%',3454,2),(43,'dq','TESCOM 负离子直卷三用卷发棒  ITH1810 亮粉色 1支','1支3用百变造型',320,279,'dq/dq-30.webp','76%',3457,1),(44,'dq','TESCOM 干湿两用负离子直发直板夹  ITH1805 亮粉色 1支','负离子护发',320,279,'dq/dq-31.webp','94%',100,2),(45,'dq','TESCOM 干湿两用负离子直发直板夹  ITH1805 炫黑色 1支','负离子护发',320,279,'dq/dq-32.webp','93%',1124,2),(46,'dq','TRIA 家用小型激光脱毛器PRECISION 1个','轻松脱掉唇周汗毛',1984,1887,'dq/dq-33.webp','98%',2324,1),(47,'dq','TRIA 家用眼周抗衰老激光美容仪 1个','恢复眼周青春活力',1599,1499,'dq/dq-34.webp','92%',7675,1),(48,'dq','belulu aquamarine高浓度水素水杯 白','高纯水素护航健康',2864,2679,'dq/dq-35.webp','94%',778,1),(49,'dq','belulu style溶脂减肥仪 香槟金','纤体美肤瘦身神器',1698,1488,'dq/dq-36.webp','84%',2354,1),(50,'dq','belulu caviup溶脂减肥仪 白','美体美肤瘦身甩脂',2254,2167,'dq/dq-37.webp','86%',4645,1),(51,'dq','belulu clearveilmini光子IPL多功能脱毛机 白','一闪而光丝滑肌肤',1984,1889,'dq/dq-38.webp','93%',666,2),(52,'dq','belulu clearveil光子IPL多功能脱毛机 白','一闪而光丝滑肌肤',2849,2579,'dq/dq-39.webp','99%',8874,2),(53,'dq','belulu aquarufa洁肤铲皮机 粉','改善黑头滋润肌肤',945,829,'dq/dq-40.webp','84%',965,2),(54,'dq','belulu RebirthGOLDU形电穿孔导入美容仪 粉','黄金美肤逆龄美肌',2984,2679,'dq/dq-41.webp','90%',905,2),(55,'dq','belulu PremiumGold射频美容仪 金','家庭美白一只搞定',2101,1959,'dq/dq-42.webp','98%',7856,2),(56,'dq','belulu premium射频美容仪 白','抗衰瘦脸一机搞定',3584,1368,'dq/dq-43.webp','84%',5643,1),(57,'dq','belulu ClassyGOLD黄金头超声波美容仪 金','奢华黄金升级护肤',1854,1779,'dq/dq-44.webp','90%',234,1),(58,'dq','Panasonic 松下 LUMIX DC-GF9W-D 双套机单反相机 橙色','复古典雅高清潮机',5121,4899,'dq/dq-45.webp','99%',643,1),(59,'dq','SONY 索尼 ILCE-6000L a6000微单数码相机含16-50mm与55-210mm 镜头 白色 标配','便携美观4D对焦',5620,5399,'dq/dq-46.webp','93%',346,2),(60,'dq','OLYMPUS 奥林巴斯 微单数码相机 PEN E-PL9 白色','高颜值轻松自拍',6999,5999,'dq/dq-47.webp','94%',356,1),(61,'dq','FUJIFILM 富士 单电自拍文艺复古微单相机 含XC15-45mm 镜头套装 X-A5套机  粉色','文艺青年包中必备',5484,5399,'dq/dq-48.webp','98%',3253,1),(62,'dq','SONY 索尼 酷拍摄像机 FDR-X3000R 4K摄像 白色','高清画质时尚便携',6777,4299,'dq/dq-49.webp','90%',36,2),(63,'dq','FUJIFILM 富士 防水数码相机 FinePix XP130 蓝色','防水便携畅享拍摄',2899,2399,'dq/dq-50.webp','99%',546,1),(64,'lz','ISHIZAWA LABS 石泽研究所 毛孔抚子日本大米面膜 10片','ISHIZAWA LABS ',50,78,'lz/cheap-top1.png','99%',230,1),(65,'lz','NATURIE 娥佩兰 薏仁水Naturie Imju保湿化妆水 500ML','NATURIE 娥佩兰',55,43,'lz/cheap-top2.png','96%',12,1),(66,'lz','KOSE 高丝 babyish婴儿肌面膜 高保湿润泽型 7片','KOSE 高丝',30,18,'lz/cheap-top3.png','86%',245,2),(67,'lz','DAISO 大创 粉扑&化妆海绵专用清洗剂 80ml','化妆海绵专用清洗剂',16,14,'lz/cheap-top4.png','96%',10,2),(68,'lz','ALOE 太阳社 玻尿酸透明质酸原液高效保湿 10ML',' 玻尿酸透明质酸原液高效保湿',50,30,'lz/cheap-top5.png','95%',136,2),(69,'lz','MANDOM 曼丹 Bifesta眼部卸妆液 145ML',' Bifesta眼部卸妆液 ',75,50,'lz/cheap-top6.png','94%',235,1),(70,'lz','CUREL 珂润 提亮肤色补水润浸保湿乳霜 40g','提亮肤色补水润浸保湿',160,146,'lz/cheap-top7.png','84%',54,2),(71,'lz','NURSERY 肌肤舒缓卸妆啫喱 180ML 柚子味',' 肌肤舒缓卸妆',90,85,'lz/cheap-top8.png','97%',26,1),(72,'lz','BCL Saborino早安面膜 滋润牛油果 32片','早安面膜 滋润牛油果',95,81,'lz/cheap-top9.png','99%',12,1),(73,'lz','SHISEIDO 资生堂 611棉花糖补水瘦脸拍拍棒 1支','补水瘦脸',45,33,'lz/cheap-top10.png','93%',1235,2),(74,'lz','LION 狮王 PAIRACNE粉刺暗疮药膏 14g','LION 狮王',66,51,'lz/cheap-top11.png','86%',230,1),(75,'lz','QUALITY 皇后秘密 超保湿抗老化面膜 豪华版 5片','QUALITY 皇后秘密 ',52,42,'lz/cheap-top12.png','96%',120,2),(76,'lz','Media 媚点 保湿粉底霜 PO-B1 粉肤色白皙肤色25g','粉肤色白皙肤色',72,68,'lz/cheap-top13.png','79%',195,1),(77,'lz','FANCL 芳珂 新版无添加纳米净化卸妆油 120ML','FANCL 芳珂',150,121,'lz/cheap-top14.png','99%',123,1),(78,'lz','ROSETTE 诗留美屋 海泥洗面奶 120g','ROSETTE 诗留美屋 ',51,33,'lz/cheap-top15.png','96%',65,2),(79,'lz','QUALITY 皇后秘密 缩毛孔提升面膜 豪华版 5片',' 缩毛孔提升面膜',56,42,'lz/cheap-top16.png','95%',125,2),(80,'lz','FREEPLUS 芙丽芳丝 净润洗面乳洗面奶 100g','FREEPLUS 芙丽芳丝 ',131,111,'lz/cheap-top17.png','86%',263,1),(81,'lz','ALOVIVI 清洁皇后卸妆水（新旧版本随机发） 500ML','ALOVIVI 清洁皇后卸妆水（',67,53,'lz/cheap-top18.png','96%',56,2),(82,'lz','CLUB 素颜粉 淡玫瑰香味 26g','CLUB 素颜粉',96,83,'lz/cheap-top19.png','89%',61,1),(83,'lz','ROHTO 乐敦 C3隐形眼镜护理液 保湿款 500ml','ROHTO 乐敦',75,65,'lz/cheap-top20.png','79%',33,1),(84,'lz','HABA 鲨烷美容油SQ油精油保湿补水 15ML','SQ油精油保湿补水',131,111,'lz/cheap-top21.png','98%',470,2),(85,'lz','BCL Saborino 小雏菊晚安面膜 28枚','BCL Saborino 小雏菊',99,84,'lz/cheap-top22.png','90%',568,2),(86,'lz','HABA 角鲨烷美白美容油 15ml','HABA 角鲨烷',136,126,'lz/cheap-top23.png','92%',98,1),(87,'lz','Enohonpu 惠之本铺 水润面膜 25ml x 5片','Enohonpu 惠之本铺 ',96,84,'lz/cheap-top24.png','95%',56,2),(88,'lz','CANMAKE 井田 五色哑光眼影 03 复古红色 3.3g','CANMAKE 井田',86,66,'lz/cheap-top25.png','77%',231,1),(89,'lz','QUALITY 皇后秘密 多效合一保湿补水懒人面膜EX 50片','QUALITY 皇后秘密 ',132,110,'lz/cheap-top26.png','96%',63,2),(90,'lz','CURE 活性水素去角质凝胶 250g','CURE 活性水素',175,154,'lz/cheap-top27.png','89%',98,1),(91,'lz','COSME DECORTE 黛珂 AQMW白檀舞蝶丝绒蜜粉 10 明亮肤色哑光雾面20g','白檀舞蝶丝绒蜜粉',370,344,'lz/cheap-top28.png','96%',890,2),(92,'lz','THREE 平衡卸妆油 200ml','THREE ',342,305,'lz/cheap-top29.png','86%',254,1),(93,'lz','ORBIS 奥蜜思 熬夜拜拜水凝精华 50g','ORBIS 奥蜜思',250,220,'lz/cheap-top30.png','83%',630,2),(94,'lz','TAKAMI 03毛孔闭合精华美容液 30ml','TAKAMI',356,329,'lz/cheap-top31.png','98%',230,1),(95,'lz','COVERMARK 中草药修护粉底霜 YN00 30g','COVERMARK 中草药修护粉底霜',378,364,'lz/cheap-top32.png','96%',333,2),(96,'lz','COVERMARK 中草药修护粉底霜  YO00 黄调最白 30g','COVERMARK 中草药修护粉底霜',401,385,'lz/cheap-top33.png','86%',36,1),(97,'lz','MUJI 无印良品 敏感肌用保湿乳液 清爽型 400mL','MUJI 无印良品',96,85,'lz/cheap-top34.png','87%',13,2),(98,'lz','Creer Beaute 克丽贝蒂 凡尔赛玫瑰眼线液笔 棕色 0.4ml','凡尔赛玫瑰眼线液笔',99,75,'lz/cheap-top35.png','78%',32,1),(99,'lz','CANMAKE 井田 水润腮红膏 CL01 圣诞红','CANMAKE 井田',68,57,'lz/cheap-top36.png','98%',63,1),(100,'lz','Cotton Labo 柔软化妆棉 80枚','Cotton Labo 柔软化妆棉',20,14,'lz/cheap-top37.png','99%',89,2);
/*!40000 ALTER TABLE `goods` ENABLE KEYS */;