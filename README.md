# Node-media-server based streaming service

Streaming service for accelerator platform

## Installation
Use the version control [git](https://git-scm.com/book/en/v2/Getting-Started-The-Command-Line) to clone service.

Use the package manager [yarn](https://yarnpkg.com) to install service.

```bash
git clone git@github.com:GERYON-TEAM/accelerator-streaming-service.git(via-ssh)

cd accelerator-streaming-service
yarn
```

## Usage

```bash
yarn dev
```
Use GraphQL mutation on Base-API to create stream for event
```Graphql
mutation {
  createStream(data: {
    eventId:{INT}
  }){
    streamKey
  }
}
```
While using streaming-app like OBS use link: **rtmp://localhost:1935(Or {HOST})/live** with Streaming-Key from graqphl mutation from previous step

To get stream in **.flv** format use: **https://localhost:8000(Or {HOST})/live/{STREAM_KEY}.flv**

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.
