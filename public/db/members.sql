-- phpMyAdmin SQL Dump
-- version 4.0.4.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Feb 11, 2020 at 03:53 AM
-- Server version: 5.5.32
-- PHP Version: 5.4.16

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `training`
--

-- --------------------------------------------------------

--
-- Table structure for table `members`
--

CREATE TABLE IF NOT EXISTS `members` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user_id` varchar(20) NOT NULL DEFAULT '',
  `password` varchar(100) NOT NULL DEFAULT '',
  `name` varchar(50) NOT NULL DEFAULT '',
  `gender` tinyint(1) NOT NULL,
  `birthday` date NOT NULL,
  `address` varchar(255) NOT NULL DEFAULT '',
  `position` varchar(100) NOT NULL,
  `role` int(2) NOT NULL,
  `created_date` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=utf8 AUTO_INCREMENT=22 ;

--
-- Dumping data for table `members`
--

INSERT INTO `members` (`id`, `user_id`, `password`, `name`, `gender`, `birthday`, `address`, `position`, `role`, `created_date`) VALUES
(1, 'admin', '$2a$10$juIS2kZnYasX51TfiKIroek1MwsNM5iKVb.SQHgfcYyuN2H0ZEuW.', 'Administrator', 0, '1986-01-01', 'CCCC', 'DDDDD', 9, '2020-02-09 20:35:16'),
(2, 'rijb', '$2a$10$juIS2kZnYasX51TfiKIroek1MwsNM5iKVb.SQHgfcYyuN2H0ZEuW.', 'Ri Ju Bom', 0, '1986-06-04', 'AAAAAA', 'BBBBBB', 0, '2020-02-10 18:27:06'),
(3, 'kohi', '', '', 1, '0000-00-00', '', '', 0, '2020-02-10 20:37:27'),
(4, 'riih', '', '', 0, '0000-00-00', '', '', 1, '2020-02-10 20:37:40'),
(5, 'paekks', '', '', 1, '0000-00-00', '', '', 0, '2020-02-10 20:37:53'),
(6, 'kimjy', '', '', 0, '0000-00-00', '', '', 2, '2020-02-10 20:38:05'),
(7, 'janggc', '', '', 0, '0000-00-00', '', '', 0, '2020-02-10 20:38:31'),
(8, 'kanghc', '', '', 0, '0000-00-00', '', '', 0, '2020-02-11 00:44:06'),
(9, 'kimhj', '', '', 0, '0000-00-00', '', '', 0, '2020-02-11 00:44:17'),
(10, 'yunhs', '', '', 0, '0000-00-00', '', '', 0, '2020-02-11 00:58:26'),
(11, 'songik', '', '', 0, '0000-00-00', '', '', 0, '2020-02-11 00:58:39'),
(12, 'uhn', '', '', 0, '0000-00-00', '', '', 0, '2020-02-11 00:58:53'),
(13, 'pakuc', '', '', 0, '0000-00-00', '', '', 0, '2020-02-11 00:59:04'),
(14, 'rojc', '', '', 0, '0000-00-00', '', '', 0, '2020-02-11 00:59:30'),
(15, 'kangik', '', '', 0, '0000-00-00', '', '', 0, '2020-02-11 00:59:42'),
(16, 'rijh', '', '', 0, '0000-00-00', '', '', 0, '2020-02-11 01:01:27'),
(17, 'a', '', 'b', 0, '2000-01-01', 'c', 'd', 1, '2020-02-11 02:17:46'),
(20, '1', '', '2222', 1, '2000-01-01', 'Korea', '4', 1, '2020-02-11 02:22:13'),
(21, 'bbb', '', 'bbbbb', 1, '2000-01-01', 'e', 'c', 1, '2020-02-11 02:50:01');

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
