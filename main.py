from fastapi import FastAPI
import uvicorn

app = FastAPI()


async def get_root():
    return {
        "message": "welcome to investment web",
        "url": "http://localhost:8000/docs"
    }





if __name__ == "__main__":
    uvicorn.run("main:app", host=8000, reload=True)