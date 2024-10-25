FROM golang:1.23-alpine

WORKDIR /usr/src/app

EXPOSE 8080

# EC2接続用にopensshをインストール
RUN apk add openssh

# 開発用に、LSPサーバー（IDEのような機能を提供する）をインストール
RUN go install golang.org/x/tools/gopls@latest \
	# ホットリロードライブラリをインストール
	&& go install github.com/air-verse/air@latest \
	# デバッグライブラリをインストール
	&& go install github.com/go-delve/delve/cmd/dlv@latest \
	# linterをインストール
	&& go install honnef.co/go/tools/cmd/staticcheck@latest \
	# DIでの依存解決するコードを生成するツール（wire）をインストール
	&& go install github.com/google/wire/cmd/wire@latest \
	# Test生成ツールをインストール
	&& go install github.com/cweill/gotests/gotests@latest \
	# Stub生成ツールをインストール
	&& go install github.com/josharian/impl@latest \
	# MySQLのマイグレーションツール
	&& go install github.com/sqldef/sqldef/cmd/mysqldef@latest

COPY app/go.mod app/go.sum ./
RUN go mod download && go mod verify
