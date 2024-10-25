CREATE TABLE `m_user` (
	`code` char(36) NOT NULL COMMENT 'ユーザーコード',
	`id` varchar(32) NOT NULL COMMENT 'ユーザーID',
	`email` varchar(256) NOT NULL COMMENT 'メールアドレス',
	`password` varchar(256) NOT NULL COMMENT 'パスワード',
	PRIMARY KEY (`code`),
	UNIQUE KEY `unique_id` (`id`),
	UNIQUE KEY `unique_email` (`email`)
) ENGINE = InnoDB DEFAULT CHARSET = utf8mb4 COLLATE = utf8mb4_0900_bin COMMENT = 'ユーザーマスター';
