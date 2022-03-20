#!/bin/bash

# Run in detached mode
docker run -it --name ifx -h ifx --privileged -p 9088:9088 -p 9089:9089 -p 27017:27017 -p 27018:27018 \
-p 27883:27883 -e LICENSE=accept -d ibmcom/informix-developer-database:latest -d
