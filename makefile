build:
	npm run build
	GOOS=windows GOARCH=amd64 go build -o /mnt/d/fmb/server.exe