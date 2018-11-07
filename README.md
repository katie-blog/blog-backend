# backend README
#mongodb #myBlog

1. before start, install mongodb and robo-3t firstly
```
	// install mongodb and robo-3t  with cmd in mac
	$ brew install mongodb 
	$ brew cask install robo-3t
```

2. start mongo service with auth and create user for your blog database
```
	// start mongo with auth
	mongod --auth

	// login mongo with amin db auth
	mongo --port 27017 -u "useradmin" -p "adminpassword" --authenticationDatabase "admin"

	// enter blog db
	use yourBlogDB
	
	// creat user in your blog db with 'userAdminAnyDatabase' role
	db.createUser({ user: "yourBlogAdmin", pwd: "yourBlogPwd", roles: [{role: "userAdminAnyDatabase", db: "admin"}]})

```

3. create  ‘readWrite’  role user in blog db
```
	// reboot mongod service with auth, ctrl+c, and run:
	mongod --auth

	// login your blog db with auth
	mongo --port 27017 -u "yourBlogAdmin" -p "yourBlogPwd" --authenticationDatabase "yourBlogDB"
	
	// enter your db
	use yourBlogDB

	// create user with 'readWrite' authorization in your blog db
	db.createUser({ user: "yourUser", pwd: "yourPassword", roles: [{role: "readWrite", db: "yourBlogDB"}]})

	// reboot mongod service with auth
	mongod --auth

	// login your db with authtication
	mongo --port 27017 -u "youruser" -p "yourpassword" --authenticationDatabase "yourdatabase"
```

4.  install dependencies
```
	npm install
```

5. start backend service 
```
	node index.js
```
 