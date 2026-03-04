import os
from flask import Flask, render_template, url_for

app = Flask(__name__)

# 허용 이미지 확장자
IMAGE_EXT = {".jpg", ".jpeg", ".png", ".gif", ".webp"}
# 허용 음악 확장자
MUSIC_EXT = {".mp3", ".wav", ".ogg", ".m4a"}


def list_static_files(subdir: str, extensions: set) -> list:
    """static 폴더 내 subdir 경로의 파일 중 extensions에 해당하는 파일 목록 반환."""
    base = os.path.join(app.static_folder, subdir)
    if not os.path.isdir(base):
        return []
    files = []
    for name in sorted(os.listdir(base)):
        ext = os.path.splitext(name)[1].lower()
        if ext in extensions:
            files.append(url_for("static", filename=f"{subdir}/{name}"))
    return files


@app.route("/")
def index():
    image_urls = list_static_files("images", IMAGE_EXT)
    music_urls = list_static_files("music", MUSIC_EXT)
    # 단일 이미지용 fallback (기존 wedding.png 등)
    if not image_urls:
        single = url_for("static", filename="images/wedding.png")
        image_urls = [single] if os.path.isfile(os.path.join(app.static_folder, "images", "wedding.png")) else []
    return render_template(
        "index.html",
        image_urls=image_urls,
        music_urls=music_urls,
    )


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
