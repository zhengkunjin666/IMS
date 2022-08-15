/*
Navicat MySQL Data Transfer

Source Server         : root
Source Server Version : 50505
Source Host           : localhost:3306
Source Database       : ims

Target Server Type    : MYSQL
Target Server Version : 50505
File Encoding         : 65001

Date: 2022-08-15 21:41:48
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) DEFAULT NULL,
  `phone` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=30 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of user
-- ----------------------------
INSERT INTO `user` VALUES ('1', '钱一', '13794567541', '123456789', '2022-08-04 08:52:06', '2022-08-11 21:52:53');
INSERT INTO `user` VALUES ('5', '张三', '13536844457', '95646465', '2022-08-11 16:18:49', '2022-08-13 23:10:25');
INSERT INTO `user` VALUES ('7', '播放fgb', '13794568800', '464535fdf', '2022-08-11 16:49:57', '2022-08-13 16:54:41');
INSERT INTO `user` VALUES ('8', '播放', '13794567668', 'dgggiop;kl', '2022-08-11 16:52:51', '2022-08-11 22:01:32');
INSERT INTO `user` VALUES ('14', '小明', '13794567112', 'dsfdsfds', '2022-08-11 19:44:02', null);
INSERT INTO `user` VALUES ('15', '小李', '13994567550', 'fdsf56+56', '2022-08-11 21:42:21', '2022-08-12 11:00:19');
INSERT INTO `user` VALUES ('16', '小红', '13994999550', 'dsf5735', '2022-08-11 21:42:50', '2022-08-14 09:23:33');
INSERT INTO `user` VALUES ('19', 'gfdgfdgfgd', '13594561234', 'rgfrg57257', '2022-08-11 21:44:01', null);
INSERT INTO `user` VALUES ('20', 'gerg', '13894123550', 'i7tityui', '2022-08-11 21:44:18', null);
INSERT INTO `user` VALUES ('21', 'ffdsfsf', '13794561478', 'fgfhfhfhf', '2022-08-11 21:44:42', null);
INSERT INTO `user` VALUES ('24', 'gfdgdg', '13712354550', 'fgfdgd', '2022-08-11 21:56:41', null);
INSERT INTO `user` VALUES ('25', 'fsdfsdf', '13799877550', 'fdsfdsfg', '2022-08-11 21:58:22', null);
INSERT INTO `user` VALUES ('26', 'fdsgvfg', '13794569632', 'gfdgdgfd', '2022-08-11 22:00:07', null);
INSERT INTO `user` VALUES ('28', '小一', '13794567558', '455646546', '2022-08-11 22:04:19', null);
INSERT INTO `user` VALUES ('29', '播放', '13794562022', '20220200', '2022-08-11 22:20:10', null);
