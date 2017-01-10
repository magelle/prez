# Novencia Docker hands-on

# links
 * https://docs.docker.com/engine/getstarted/
 * https://github.com/docker/labs/blob/master/README.md
 * https://github.com/docker/dceu_tutorials
 * debug : http://pothibo.com/2015/7/how-to-debug-a-docker-container

## 1. Basics : What is docker
 * https://docs.docker.com/engine/understanding-docker/#/how-does-a-docker-image-work
 * Image : no state, ro
  * union filesystem UnionFS
  * control groups
  * linux libcontainer -> LXC (linux container)
 * container : a running instance of an image, rw
 * repository local / distant : docker hub, ex : the whalesay image
 docker run docker/whalesay cowsay boo
 docker ps

 # Build process
 * read Dockerfile
 * docker cli send command to docker daemon
 * checks if image already in the local repository
 * each step create a layer
 * when next layer is finished, the previous is removed
 
 # write Dockerfile
 * describe file, environment, commands
 * FROM 'image'
 * RUN : command to build the image
 * CMD : default command to run
 * docker build -t docker-whale .
 
 # docker commands
 docker build -t 'tag' ./
 docker run 'tag' 
 docker images
 docker ps
 
![](https://docs.docker.com/engine/article-img/engine-components-flow.png)
![](https://docs.docker.com/engine/article-img/architecture.svg)

 * docker whalesay -> pull from docker registry
 * docker whalesay with fortune -> Custom Dockerfile 
 * cheat sheet : https://github.com/wsargent/docker-cheat-sheet#dockerfile