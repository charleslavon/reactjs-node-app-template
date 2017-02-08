This ReactJS NodeJS boilerplate app is to be used for quickly spinning up web applications with all the necessary configs to support dev and production builds.


##### Clone the project
1. create a directory for your new app, mkdir my-new-app & cd my-new-app
2. git clone {repoURL} /my-new-app
3. reinitialize the git settings, git init



##### Environment Requirements

##### Node Version
  `>=` 6

##### Node Version
  `>=` 3

##### Maven Version (Using Maven is optional)
 `>=` 3.1.1


##### Using ATOM /Sublime Text/ Terminal `(Recommended)`
 - open your terminal window and run this command within the root directory of
   your react template directory:

```sh
$ npm install
$ npm start
```
- The application should automatically start running on your default browser on this url: http://localhost:3000/

To run only tests, execute this command below:
```sh
$ npm test
```


To run the app in production mode (.war file) execute the command below
```sh
$ mvn clean package
```

`NOTE`
-After executing the commanbd above, you should see a ROOT.war file which you can deploy to an apache server.

##### Using Eclipse
If you are using Eclipse or STS IDE you can follow the steps below after checking out the project from the repository and into your eclipse workspace.

step 1:
Convert the Project to a maven project if it doesn't have an `"M"` as a superscript on the project icon.

step2:
Right-click on the project and click on  `'Run-As > Maven-build...'` a new window pops up.
Enter  the  maven commands below in the `goals` field of the window and hit apply and build.

```sh
$ clean package
```
