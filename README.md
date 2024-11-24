# Proyecto de Microservicios
Este proyecto está basado en tres microservicios: **usuario**, **producto** y **pedido**. Se utiliza Kubernetes para la orquestación de los contenedores, y Prometheus y Grafana para monitorear las métricas.

## Iniciar el Proyecto

Para iniciar los servicios, sigue los pasos a continuación.

### Ver Pods

Para ver los pods en Kubernetes, ejecuta:

bash
kubectl get pods

Iniciar Servicios
Para cada uno de los tres servicios (usuario, producto y pedido), navega a la carpeta del servicio y ejecuta el siguiente comando:
cd <servicio>
node index.js

Iniciar Kubernetes para Cada Servicio
Esto para cada servicio:
kubectl apply -f <archivo-yaml>.yaml

Crear ConfigMap de Prometheus
Crea el ConfigMap para Prometheus usando el siguiente comando:
kubectl create configmap prometheus-config --from-file=prometheus.yml=./prometheus.yml --dry-run=client -o yaml | kubectl apply -f -


Apagar Todo
Para detener los servicios y eliminar los recursos de Kubernetes, usa el siguiente comando para cada archivo .yaml:
kubectl delete -f <archivo-yaml>.yaml

Probar Pods
Para probar los pods, puedes ejecutar el siguiente comando en el contenedor de un servicio:
kubectl exec -it <nombre_del_pod_servicio-usuario> -- /bin/sh
curl http://servicio-producto/producto


Acceder a Métricas
Para acceder a las métricas de los servicios, abre la siguiente URL en tu navegador:

Servicio Usuario: http://localhost:3001/metrics
Servicio Producto: http://localhost:3002/metrics
Servicio Pedido: http://localhost/metrics

Grafana
Para acceder a Grafana, abre esta URL en tu navegador:

http://localhost:3000/?from=now-6h&to=now&timezone=browser


Memoria actualizada
Aquí tienes un ejemplo de cómo podría quedar el archivo README.md para tu proyecto con microservicios:

markdown
Copiar código
# Proyecto de Microservicios

Este proyecto está basado en tres microservicios: **usuario**, **producto** y **pedido**. Se utiliza Kubernetes para la orquestación de los contenedores, y Prometheus y Grafana para monitorear las métricas.

## Iniciar el Proyecto

Para iniciar los servicios, sigue los pasos a continuación.

### Ver Pods

Para ver los pods en Kubernetes, ejecuta:

bash
kubectl get pods
Iniciar Servicios
Para cada uno de los tres servicios (usuario, producto y pedido), navega a la carpeta del servicio y ejecuta el siguiente comando:

bash
Copiar código
cd <servicio>
node index.js
Iniciar Kubernetes para Cada Servicio
Asegúrate de que Kubernetes esté corriendo para cada servicio. Usa el siguiente comando para aplicar los archivos YAML de despliegue y servicio:

bash
Copiar código
kubectl apply -f <archivo-yaml>.yaml
Crear ConfigMap de Prometheus
Crea el ConfigMap para Prometheus usando el siguiente comando:

bash
Copiar código
kubectl create configmap prometheus-config --from-file=prometheus.yml=./prometheus.yml --dry-run=client -o yaml | kubectl apply -f -
Apagar Todo
Para detener los servicios y eliminar los recursos de Kubernetes, usa el siguiente comando para cada archivo .yaml:

bash
Copiar código
kubectl delete -f <archivo-yaml>.yaml
Probar Pods
Para probar los pods, puedes ejecutar el siguiente comando en el contenedor de un servicio:

bash
Copiar código
kubectl exec -it <nombre_del_pod_servicio-usuario> -- /bin/sh
curl http://servicio-producto/producto
Acceder a Métricas
Para acceder a las métricas de los servicios, abre la siguiente URL en tu navegador:

Servicio Usuario: http://localhost:3001/metrics
Servicio Producto: http://localhost:3002/metrics
Servicio Pedido: http://localhost/metrics
Grafana
Para acceder a Grafana, abre esta URL en tu navegador:

http://localhost:3000/?from=now-6h&to=now&timezone=browser
Prometheus
Para acceder a Prometheus, ejecuta el siguiente comando desde la carpeta de Prometheus:
cd "C:\Program Files\Prometheus"
prometheus.exe --config.file=prometheus.yml
Luego, accede a la interfaz de Prometheus en:
http://localhost:9090/query

Token de GitHub
Este es el token de acceso de GitHub (AGREGUE LETRAS RANDOM):
ghp_b4g9vunLDHjCYN31oR2SFqz59SxEqOg1Z28KO


Descripción de los Microservicios
1.Microservicio Usuario: Gestiona la autenticación y los detalles de los usuarios.
2.Microservicio Producto: Gestiona la información de los productos disponibles.
3.Microservicio Pedido: Maneja la creación y gestión de los pedidos de los usuarios.

#Requisitos
Kubernetes
Prometheus
Grafana
Node.js
Docker




# POR EL MOMENTO SE LOGRÓ SOLO HASTA LA ORQUESTACIÓN Y COMUNICACIÓN ENTRE MICROSERVICIOS EN EL CLUSTER LOCAL DE KUBERNETES #
