# tutorial how to use git and github in your project
1. make sure you already setting your your gift to connect to github
```shell
git config --global user.name "your_username"
git config --global user.email "your_email"
```
2. open vscode, terminal -> new terminal -> cmd (hit enter)
3. type git init
```shell
git init
```shell
git branch -m main
```
5. connect your git local and use github using this command
```shell
git remote add origin https://your-repository-url
```
6. stage all changes using
```shell
git add .
7. give message before send it to github
```shell
git commit -m "your message" // for example "first commit"