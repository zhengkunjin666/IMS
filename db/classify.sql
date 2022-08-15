/*
Navicat MySQL Data Transfer

Source Server         : root
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : ims

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2022-08-15 21:41:40
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for classify
-- ----------------------------
DROP TABLE IF EXISTS `classify`;
CREATE TABLE `classify` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of classify
-- ----------------------------
INSERT INTO `classify` VALUES ('1', '技术动态');
INSERT INTO `classify` VALUES ('2', '极客新闻');
INSERT INTO `classify` VALUES ('3', '通知公告');
INSERT INTO `classify` VALUES ('4', '技术热点');
INSERT INTO `classify` VALUES ('5', '新课列表');
INSERT INTO `classify` VALUES ('8', '关于我们');
INSERT INTO `classify` VALUES ('10', '一坧一子地');
