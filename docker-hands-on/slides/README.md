# Novencia Docker hands-on

* https://docs.docker.com/engine/getstarted/
* https://github.com/docker/labs/blob/master/README.md
* https://github.com/docker/dceu_tutorials

## 1. Basics : What is docker
 * Image : no state, ro
 * container : a running instance of an image, rw
 * repository local / distant : docker hub, ex : the whalesay image
 docker run docker/whalesay cowsay boo
 docker ps
 
 # write Dockerfile
 
 * describe file, environment, commands
 * FROM 'image'
 * RUN : command to build the image
 * CMD : default command to run
 * docker build -t docker-whale .
 
 # Build process
 
 * read Dockerfile
 * docker cli send command to docker daemon
 * checks if image already in the local repository
 * each step create a layer
 * when next layer is finished, the previous is removed
 
 # docker commands
 docker build -t 'tag' .
 docker images
 docker ps
 