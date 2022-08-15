/*
Navicat MySQL Data Transfer

Source Server         : root
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : ims

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2022-08-15 21:41:14
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for article
-- ----------------------------
DROP TABLE IF EXISTS `article`;
CREATE TABLE `article` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(255) DEFAULT '',
  `content` longtext DEFAULT NULL,
  `classify_id` int(11) DEFAULT NULL,
  `visits` int(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=27 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of article
-- ----------------------------
INSERT INTO `article` VALUES ('1', 'Glide是Android平台上的一个快速高效的图像加载库读分类管理', 'Glide是Android平台上的一个快速高效的图像加载库，专注于平滑滚动。Glide提供了一个简单易用的 API，一个性能可扩展的资源解码管道流和自动资源池。\r\n\r\nglide\r\n\r\nGlide支持获取，解码和显示视频、图片以及GIF动画。Glide包含一个灵活的API，允许开发人员插入 几乎任何网络堆栈。默认情况下，Glide使用基于HttpUrlConnection的自定义堆栈，但是也包含实用 程序库插入到Google的Volley项目或Square的OkHttp库替代。\r\n\r\nGlide的主要重点是尽可能平滑和快速地滚动任何类型的图像列表，但是对于几乎任何需要获取，调整 大小和显示远程图像的情况，Glide也是适用的。', '2', '22', '2022-08-08 09:03:13', '2022-08-09 09:03:18');
INSERT INTO `article` VALUES ('5', '雪花地下城 一', '<p>dsfdf需要需要要需要大是大非基材五块石 城 一</p>', '4', '12', '2022-08-13 17:24:18', '2022-08-13 22:40:45');
INSERT INTO `article` VALUES ('6', 'xcv cv', '<p>hfgdhfghfgh</p>', '3', '7', '2022-08-13 18:53:31', '2022-08-13 22:39:10');
INSERT INTO `article` VALUES ('7', 'fdgfdgfd', '<p>fdgfdgfdgfdg</p>', '2', '3', '2022-08-13 18:58:21', '2022-08-13 22:38:49');
INSERT INTO `article` VALUES ('8', 'fdghfdgfdgfd', '<p>gfdgfdgf</p>', '1', '8', '2022-08-13 19:01:37', '2022-08-13 22:38:57');
INSERT INTO `article` VALUES ('10', 'rgerdgdrgfd', '<p>fdhbfghbfghnbfgnhbfghb</p>', '8', '4', '2022-08-13 19:05:40', '2022-08-13 22:55:59');
INSERT INTO `article` VALUES ('12', '地五块石坧圩', '<p>yujfgjhgkughohoi</p>', '8', '7', '2022-08-13 19:18:26', '2022-08-13 23:02:30');
INSERT INTO `article` VALUES ('13', 'fghfghnbfgh', '<p>fhbfgnb fgnb fgn fg</p>', '5', '7', '2022-08-13 19:19:42', '2022-08-13 23:01:06');
INSERT INTO `article` VALUES ('14', 'gfgdgvfdg', '<p>dsgvdsfvdsv</p>', '8', '1', '2022-08-13 19:20:51', '2022-08-13 22:48:35');
INSERT INTO `article` VALUES ('19', 'hytrfgynfhgnfgnhb', '<p>fdbv db fdb fxcvv fdb fdb fdbv</p><p>发城gf</p><p><br></p><p><br></p><p> 城厢</p><p>反攻倒算</p>', '3', '5', '2022-08-13 19:23:49', '2022-08-13 23:19:17');
INSERT INTO `article` VALUES ('20', '解码和显示视频、图片以及GIF动画。', '<p>	因工作需要，广州市规划和自然资源局计划招聘编外工作人员1名。为更好地选拔优秀人才，现面向社会进行公开招聘。一、招聘岗位及条件</p><p>	总体规划处事务辅助岗1名（主要从事行政事务、综合管理等工作）1．文秘，人力资源管理等相关专业，本科学历；</p><p>	2．年龄35岁以下；</p><p>	3．工作责任心强，具有较强的分析与协调能力，具备2年以上行政工作相关经验。</p><p>	尚未解除纪律处分或者正在接受纪律审查的人员，以及刑事处罚期限未满或者涉嫌违法犯罪正在接受调查的人员，不得报考；年龄计算截止至2019年12月31日。</p><p>	二、报名办法</p><p>	有意应聘者请将填写好的《广州市规划和自然资源局编外聘用人员应聘报名表》及本人身份证复印件，简历及相关学历证明等应聘材料亲自交到我局机关服务中心。（地址：广州市越秀区豪贤路193号14楼1403室，联系电话：（83346169）接收报名表及简历时间：即日起至2019年4月12日，工作日上午9：00—11：30，下午2：00—5：00。</p><p>	三、招聘程序</p><p>	（一）资格审核及初步筛选</p><p>	1．对报考者提供的信息及申请材料进行审核，弄虚作假的，一经查实，即取消其报名资格。</p>', '3', '4', '2022-08-13 19:40:09', null);
INSERT INTO `article` VALUES ('21', '解码和显示视频、图片以及GIF动画。', '<p>因工作需要，广州市规划和自然资源局计划招聘编外工作人员1名。为更好地选拔优秀人才，现面向社会进行公开招聘。一、招聘岗位及条件</p><p>总体规划处事务辅助岗1名（主要从事行政事务、综合管理等工作）1．文秘，人力资源管理等相关专业，本科学历；</p><p>2．年龄35岁以下；</p><p>3．工作责任心强，具有较强的分析与协调能力，具备2年以上行政工作相关经验。</p><p>尚未解除纪律处分或者正在接受纪律审查的人员，以及刑事处罚期限未满或者涉嫌违法犯罪正在接受调查的人员，不得报考；年龄计算截止至2019年12月31日。</p><p>二、报名办法</p><p>有意应聘者请将填写好的《广州市规划和自然资源局编外聘用人员应聘报名表》及本人身份证复印件，简历及相关学历证明等应聘材料亲自交到我局机关服务中心。（地址：广州市越秀区豪贤路193号14楼1403室，联系电话：（83346169）接收报名表及简历时间：即日起至2019年4月12日，工作日上午9：00—11：30，下午2：00—5：00。</p><p>三、招聘程序</p><p>（一）资格审核及初步筛选</p><ul><li><strong class=\"ql-size-large\" style=\"color: rgb(255, 255, 0); background-color: rgb(153, 51, 255);\"><em>1．对报考者提供的信息及申请材料进行审核，弄虚作假的，一经查实，即取消其报名资格。</em></strong></li><li><strong class=\"ql-size-large\" style=\"color: rgb(255, 255, 0); background-color: rgb(153, 51, 255);\"><em>1．对报考者提供的信息及申请材料进行审核，弄虚作假的，一经查实，即取消其报名资格。</em></strong></li><li><strong class=\"ql-size-large\" style=\"color: rgb(255, 255, 0); background-color: rgb(153, 51, 255);\"><em>1．对报考者提供的信息及申请材料进行审核，弄虚作假的，一经查实，即取消其报名资格。</em></strong></li><li><strong class=\"ql-size-large\" style=\"color: rgb(255, 255, 0); background-color: rgb(153, 51, 255);\"><em>1．对报考者提供的信息及申请材料进行审核，弄虚作假的，一经查实，即取消其报名资格。</em></strong></li><li><strong class=\"ql-size-large\" style=\"color: rgb(255, 255, 0); background-color: rgb(153, 51, 255);\"><em>1．对报考者提供的信息及申请材料进行审核，弄虚作假的，一经查实，即取消其报名资格。</em></strong></li></ul>', '3', '7', '2022-08-13 22:32:43', '2022-08-13 23:22:40');
INSERT INTO `article` VALUES ('22', '地地硒鼓 ', '<p>地需要佛挡杀佛在有模有样</p>', '4', '3', '2022-08-13 22:53:09', '2022-08-14 09:23:45');
INSERT INTO `article` VALUES ('23', ' 回访电话都有点都有点都有点上', '<p>量地时政上二上直  </p>', '4', '6', '2022-08-13 23:23:47', null);
INSERT INTO `article` VALUES ('24', '你好吧了', '夺鼎折覆餗佛挡杀佛地', '4', '0', '2022-06-15 21:33:22', null);
INSERT INTO `article` VALUES ('25', '你好吗', 'dsfg s dfd g g ', '8', '0', '2022-07-27 21:35:59', null);
INSERT INTO `article` VALUES ('26', 'hfgh fh hd hgfd gfd', 'gdfgh r hfg hfg', '5', '0', '2022-07-26 21:36:46', null);
