podman build --no-cache -f ./app/backend/Dockerfile -t shonpaz123/fullstack-app:backend ./app/backend
podman build --no-cache -f ./app/frontend/Dockerfile -t shonpaz123/fullstack-app:frontend ./app/frontend
podman tag localhost/shonpaz123/fullstack-app:frontend shonpaz123/fullstack-app:frontend
podman tag localhost/shonpaz123/fullstack-app:backend shonpaz123/fullstack-app:backend
podman push shonpaz123/fullstack-app:frontend
podman push shonpaz123/fullstack-app:backend
