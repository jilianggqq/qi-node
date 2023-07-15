## Docker

```
docker build .      
docker run -p 3000[local_port]:3000[container_port]sha256:db2b024b5724c50b7d7a954908f351c429828e3158a85c4ef030e58d7ceba768
docker ps 
docker stop [container_name]
```

__start docker container with interactive way__

```
docker start <container_name_or_id>
docker logs -f <container_name_or_id>

<!-- run docker with detach mode -->
docker run -d -p 3000[local_port]:3000[container_port]sha256:db2b024b5724c50b7d7a954908f351c429828e3158a85c4ef030e58d7ceba768

<!-- attach again -->
docker attach
```

```
docker build --tag qiqiangguan/qi-python-test1:1.0 .
docker run -p 8081:8080 -d --rm --name qinode-test1 qinode:0.1
docker run -it --rm qiqiangguan/qi-python-test1:1.0
```
-d: deatach mode (attach mode: -a)
--rm: container will be removed automatically when it's stopped.
qinode: image name
0.1: image tag

### Volumes & Bind Mount
```
dk build -t feedback-anonym .
docker run -p 8081:8080 -d --rm --name qifeedback feedback
docker run -p 8081:8080 -d --rm -v feedback:/app/feedback --name qifeedback1 feedback
docker run -p 8081:8080 -d -v feedback:/app/feedback -v $(pwd):/app --name qifeedback2 feedback
docker run -p 8081:8080 -d -v feedback:/app/feedback -v $(pwd):/app --name qifeedback3 feedback-anonym
```