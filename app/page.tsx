import PhotoSlideshow from "@/components/photo-slideshow";
import MusicPlayer from "@/components/music-player";

export default function WeddingPage() {
  return (
    <div className="flex min-h-screen items-center justify-center p-6">
      <main className="grid w-full max-w-[880px] overflow-hidden rounded-3xl bg-[var(--card-bg)] shadow-[0_18px_45px_rgba(0,0,0,0.08)] md:grid-cols-[1.1fr_1.2fr]"
        style={{ fontFamily: "'Nanum Pen Script', var(--font-nanum-pen), cursive" }}
      >
        {/* Left Section */}
        <section className="border-b border-pink-200/35 p-8 md:border-b-0 md:border-r"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,239,239,0.8)), radial-gradient(circle at top left, #ffe4e1, transparent 60%)",
          }}
        >
          <div
            className="inline-flex items-center gap-2 rounded-full bg-[var(--accent-soft)] px-3 py-1.5 text-sm font-semibold tracking-wide text-[var(--accent)]"
            style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif" }}
          >
            <span className="h-[7px] w-[7px] rounded-full bg-[var(--accent)]" />
            우리 결혼합니다
          </div>

          <h1 className="mt-5 mb-2.5 text-4xl leading-snug max-sm:text-3xl">
            {"강아지 🐶 & 고양이 🐱의 결혼"}
          </h1>

          <p className="mb-1 text-[22px]">
            신랑 <strong className="font-bold">강아지</strong>
            {" \u00A0\u00B7\u00A0 "}
            신부 <strong className="font-bold">고양이</strong>
          </p>

          <p className="mb-5 text-lg leading-relaxed text-[var(--text-sub)] max-sm:text-base">
            서로를 가장 사랑하는 친구였던 강아지와 고양이가
            <br />
            평생을 함께할 부부가 되려 합니다.
          </p>

          <div className="mb-4">
            <PhotoSlideshow />
          </div>

          <div className="text-lg text-[var(--text-main)] leading-relaxed max-sm:text-base">
            <div
              className="mb-1.5 text-sm tracking-wider text-[var(--text-sub)]"
              style={{ fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', system-ui, sans-serif" }}
            >
              Parents
            </div>
            <div>
              신랑측 부모님: <strong>개똥이</strong>, <strong>말숙이</strong>
            </div>
            <div>
              신부측 부모님: <strong>초롱이</strong>, <strong>두리</strong>
            </div>
          </div>

          <div className="my-4 h-px bg-gradient-to-r from-transparent via-pink-300/70 to-transparent" />

          <p className="text-lg leading-relaxed text-[var(--text-sub)] max-sm:text-base">
            소중한 날, 사랑하는 분들을 모시고자 합니다.
            <br />
            따뜻한 축복으로 함께해 주세요.
          </p>
        </section>

        {/* Right Section */}
        <section className="flex flex-col gap-3.5 p-7">
          <div>
            <div className="text-sm tracking-wider text-[var(--text-sub)]">When</div>
            <p className="text-[28px] leading-snug text-[var(--text-main)] tracking-wide max-sm:text-2xl">
              2026년 11월 14일
              <br />
              오전 11시 40분
            </p>
          </div>

          <div>
            <div className="text-sm tracking-wider text-[var(--text-sub)]">Where</div>
            <p className="mb-1 text-[22px] text-[var(--text-main)]">청량리 L65호텔</p>
            <p className="text-[17px] text-[var(--text-main)] leading-snug">
              <strong className="font-normal">서울특별시 동대문구 왕산로 200</strong>
            </p>

            <div className="mt-1 overflow-hidden rounded-[18px] border border-black/8">
              <iframe
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
                src="https://www.google.com/maps?q=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC+%EC%99%95%EC%82%B0%EB%A1%9C+200&output=embed"
                className="h-[260px] w-full border-0 max-sm:h-[220px]"
                title="결혼식장 지도"
              />
            </div>

            <p className="mt-2 text-[17px]">
              <a
                className="font-medium text-[var(--accent)] no-underline hover:underline"
                href="https://www.google.com/maps/search/?api=1&query=%EC%84%9C%EC%9A%B8%ED%8A%B9%EB%B3%84%EC%8B%9C+%EB%8F%99%EB%8C%80%EB%AC%B8%EA%B5%AC+%EC%99%95%EC%82%B0%EB%A1%9C+200"
                target="_blank"
                rel="noopener noreferrer"
              >
                구글 지도에서 보기
              </a>
            </p>
          </div>

          <MusicPlayer />

          <p className="mt-auto text-right text-[15px] text-[var(--text-sub)]">
            {"음악이 나와요~!"}
          </p>
        </section>

        {/* Footer - Account */}
        <footer
          className="col-span-full border-t border-pink-200/35 px-7 py-5 text-center"
          style={{
            background: "linear-gradient(180deg, rgba(255,248,248,0.6), #fff)",
          }}
        >
          <div className="mb-1.5 text-[15px] tracking-wider text-[var(--text-sub)]">
            마음 전하실 곳
          </div>
          <div className="text-[22px] tracking-wide text-[var(--text-main)]">
            신한 123-456-789-11
          </div>
        </footer>
      </main>
    </div>
  );
}
