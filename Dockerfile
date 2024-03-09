FROM node:16

WORKDIR /home/app

#COPY . . 
COPY ./package.json .

RUN npm config set registry https://registry.npmmirror.com/ && npm install --legacy-peer-deps
# RUN npm config set registry https://registry.npmmirror.com/


EXPOSE 9529

# 如果arg server_ip不为空，则替换配置文件中的server_ip
ARG SERVER_IP
# 运行env.py传递参数
ENV SERVER_IP = ${SERVER_IP}
#RUN python3 env.py $SERVER_IP

#CMD ["npm", "run", "dev", "--", "--port", "9529"]
ENTRYPOINT [ "./start.sh" ]