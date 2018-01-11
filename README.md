# Rasperry-Pi-Inbox-notification


### 1. Prepare system
  Update system packages to the newest version
  ```
  sudo apt-get update
  sudo apt-get full-upgrade
  ```
  Downlad and install NodeJs
  ```
  curl -sL https://deb.nodesource.com/setup_9.x | sudo -E bash -
  sudo apt-get install -y nodejs
  ```
  Check if NodeJs is running properly
  ```
  node --version
  ```
  Should return the NodeJs version

  ### 2. Download & install code
  ```
  git clone https://github.com/thorbenschmitt/Rasperry-Pi-Inbox-notification.git
  cd Rasperry-Pi-Inbox-notification
  ```
  Before you can run the service, you have to install additional packages
  ```
  npm install
  ```

  ### 3. Change the configs & run the service
  Inside server.js you can change the configuration.
  After done that, start the service with
  ```
  node server.js
  ```
  and wait for the postman

  (https://raw.githubusercontent.com/thorbenschmitt/Rasperry-Pi-Inbox-notification/master/md/sketch.png)
