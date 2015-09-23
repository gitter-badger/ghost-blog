# DOCKER-VERSION 1.1.2

FROM ubuntu:14.04

# Speed up apt-get according to https://gist.github.com/jpetazzo/6127116
RUN echo "force-unsafe-io" > /etc/dpkg/dpkg.cfg.d/02apt-speedup
RUN echo "Acquire::http {No-Cache=True;};" > /etc/apt/apt.conf.d/no-cache

# Update the distribution
ENV DEBIAN_FRONTEND noninteractive
RUN apt-get update
RUN apt-get upgrade -y

# https://github.com/joyent/node/wiki/Installing-Node.js-via-package-manager
RUN apt-get install -y software-properties-common
RUN add-apt-repository -y ppa:chris-lea/node.js
RUN apt-get update
RUN apt-get install -y python-software-properties python g++ make nodejs git  # git needed by 'npm install'

ADD . /src
RUN cd /src; npm install --save ghost

ENTRYPOINT ["node", "/src/server.js"]
# Override ubuntu:14.04 CMD directive:
CMD []

EXPOSE 2368