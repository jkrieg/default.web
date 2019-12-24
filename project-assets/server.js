const http = require("http");
const fs = require("fs");
const url = require("url");

const mimeTypes = (function (){
    const mimeTypeParts = {
        image: {
            ".jpg": "jpeg",
            ".jpeg": "jpeg",
            ".jfif": "jpeg",
            ".pjpeg": "jpeg",
            ".pjp": "jpeg",
            ".apng": "apng",
            ".png": "png",
            ".ico": "x-icon",
            ".cur": "x-icon",
            ".svg": "svg+xml",
            ".tiff": "tiff",
            ".tif": "tiff",
            ".webp": "webp",
            ".pdf": "pdf"
        },
        text: {
            ".txt": "plain",
            ".html": "html",
            ".htm": "html",
            ".css": "css",
            ".csh": "x-script.csh",
            ".cxx": "plain",
            ".scss": "css"
        },
        audio: {
            ".wav": "wav",
            ".wave": "wave"
        },
        video: {
            ".webm": "webm",
            ".ogg": "ogg"
        },
        application: {
            ".js": "javascript",
            ".ts": "typescript"
        }
    };
    const defaultMimeType = "application/octent-stream";
    const result = {};
    for(const superType in mimeTypeParts)
    {
        for(const subType in mimeTypeParts[superType] )
        {
            result[subType] = `${superType}/${mimeTypeParts[superType][subType]}`;
        }
    }
    result["defaultMimeType"] = defaultMimeType;
    return result;
})();
function onRequest(request, response){
    let path = url.parse(request.url).path;
    if(!path.startsWith('.')){
        path = `.${path}`;
    }
    if(path == "./"){
        path = "./index.html";
    }
    const mimeType = mimeTypes[path.substring(path.lastIndexOf('.'))] || mimeTypes.defaultMimeType;
    
    fs.readFile(path, (err, data) => {
        if(!data){
            response.writeHead(404, "File not found at "+path);
            response.write(path);
            response.end();
        }
        else{
            response.writeHead(200, {"Content-Type": mimeType });
            response.write(data);
            response.end();
        }
    });
    
}

http.createServer(onRequest).listen(9532);