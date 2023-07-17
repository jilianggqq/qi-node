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
docker run -p 8081:8080 -d --rm -v feedback:/app/feedback -v "$(pwd):/app:ro" -v /app/temp --name qifeedback3 feedback-anonym
<!-- Env args -->
docker run -p 8081:8888 -d --rm -e PORT=8888 -v feedback:/app/feedback -v "$(pwd):/app:ro" -v /app/temp --name qifeedback5 feedback-anonym:port
```

### Network
- for mongodb
```
dk network create qi-network
dk run -d --network qi-network --name mongodb mongo
```
- for app
```
docker build -t imgnetwork .
dk run -d --network qi-network -p 3000:3000 --name ctnetwork imgnetwork
```

### Integration (multi-02-finished)
```
dk network create goals-network
docker run -d --network goals-network --name goalsmongodb -v data:/data/db -e MONGO_INITDB_ROOT_USERNAME=root -e MONGO_INITDB_ROOT_PASSWORD=secret mongo

<!-- backend -->
docker build -t goals-node .
docker run -d --rm --network goals-network -p 80:80 --name goals-backend -v /Users/qiqiangguan/projects/qi-node/docker/multi-02-finished/backend:/app -v /app/node_modules -v /tmp/logs:/app/logs -e MONGODB_USERNAME=root -e MONGODB_PASSWORD=secret goals-node

<!-- error -->
docker run --rm --network goals-network -p 80:80 --name goals-backend -v /Users/qiqiangguan/projects/qi-node/docker/multi-02-finished/backend:/app -v /app/node_modules -v /tmp/logs:/app/logs -e MONGODB_USERNAME=root -e MONGODB_PASSWORD=secret1 goals-node

docker build -t goals-react .
 docker run -d --rm -p 3000:3000 --name goals-front -it -v /Users/qiqiangguan/projects/qi-node/docker/multi-02-finished/frontend/src:/app/src goals-react

```

### Operations of MongoDB in local
```
docker exec -it multi-02-finished-goalsmongodb-1 mongosh -u "root" -p "secret"

show databases;
use course-goals;
show collections
db.goals.find()
```