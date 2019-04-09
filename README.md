# HealthUnsurance Landing Page

This is a landing page for [HealthUnsurance](https://healthunsurance.com). HealthUnsurance is a marketplace to compare prices on outpatient medicial procedures for people who are paying out of pocket. It is built using React JS.


## Develop locally

Transpile the Javascript using Babel and watch for changes:

```bash
git clone https://github.com/mnmainguy/healthymatch.git
cd healthymatch
npm install
npm run watch
```

## Run with webpack:

```bash
npm run serve
```

## Run inside a docker container:

```
docker run -p 3000:80 -v "$PWD"/public:/usr/local/apache2/htdocs/ httpd:2.4
```

Visit `http://<YOUR_DOCKER_MACHINE_IP>:3000`
